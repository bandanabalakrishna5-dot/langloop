document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.getElementById('studyTimer');
    const SYNC_INTERVAL_MS = 1000; // Sync every 1 second
    let startTime = Date.now();
    let accumulatedTimeMs = 0;
    let unsyncedTimeMs = 0;
    let timerInterval;

    // 1. Get User
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
        console.log('Study Tracker: No user logged in.');
        if (timerDisplay) timerDisplay.style.display = 'none';
        return;
    }
    const user = JSON.parse(storedUser);
    const userId = user.id || user._id;

    // 2. Identify Language
    // Simple heuristic: usage in specific language folders or title
    let language = 'Unknown';
    const path = window.location.pathname.toLowerCase();
    const title = document.title.toLowerCase();

    if (path.includes('python')) language = 'Python';
    else if (path.includes('java')) language = 'Java';
    else if (path.includes('javascript') || path.includes('js')) language = 'JavaScript';
    else if (path.includes('cpp') || path.includes('c++')) language = 'C++';
    else if (path.includes('html')) language = 'HTML & CSS';
    else if (path.includes('data-science')) language = 'Data Science';
    // Fallback to title
    else if (title.includes('python')) language = 'Python';
    // Add more mappings as needed

    console.log(`Study Tracker: Tracking time for ${language}`);

    // 3. Update Timer UI
    function updateTimerUI() {
        if (!timerDisplay) return;

        const now = Date.now();
        const sessionTimeMs = now - startTime;
        const totalTimeMs = accumulatedTimeMs + sessionTimeMs;

        const seconds = Math.floor((totalTimeMs / 1000) % 60);
        const minutes = Math.floor((totalTimeMs / (1000 * 60)) % 60);
        const hours = Math.floor((totalTimeMs / (1000 * 60 * 60)));

        const fmt = (n) => n.toString().padStart(2, '0');
        timerDisplay.textContent = `⏱️ ${fmt(hours)}:${fmt(minutes)}:${fmt(seconds)}`;
    }

    // 4. Sync to Backend
    async function syncTime(isUnload = false) {
        const now = Date.now();
        const deltaMs = now - startTime;

        if (deltaMs < 1000 && !isUnload) return; // Don't sync extremely small intervals unless unloading

        const minutesToLog = deltaMs / 1000 / 60; // Convert to minutes (float)

        if (minutesToLog <= 0) return;

        try {
            // Use fetch with keepalive for unload events
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: userId,
                    language: language,
                    duration: minutesToLog
                })
            };

            if (isUnload) {
                options.keepalive = true;
            }

            await fetch('/api/study-activity', options);

            // Reset start time for next interval
            startTime = Date.now();
            accumulatedTimeMs += deltaMs;

        } catch (error) {
            console.error('Study Tracker: Sync failed', error);
        }
    }

    // Start Timer
    timerInterval = setInterval(() => {
        updateTimerUI();
    }, 1000);

    // Start Sync Loop
    const syncInterval = setInterval(() => {
        syncTime();
    }, SYNC_INTERVAL_MS);

    // Handle Tab Close / Nav Away
    window.addEventListener('beforeunload', () => {
        syncTime(true);
    });

    // Initial UI update
    updateTimerUI();
});
