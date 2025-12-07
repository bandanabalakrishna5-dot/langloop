const fs = require('fs');
const path = require('path');

const languages = [
    { id: 'cpp', name: 'C++', icon: '🚀' },
    { id: 'csharp', name: 'C#', icon: '#️⃣' },
    { id: 'c', name: 'C', icon: 'Ⓒ' },
    { id: 'go', name: 'Go', icon: '🐹' },
    { id: 'rust', name: 'Rust', icon: '🦀' },
    { id: 'swift', name: 'Swift', icon: '🐦' },
    { id: 'kotlin', name: 'Kotlin', icon: '🎯' },
    { id: 'php', name: 'PHP', icon: '🐘' },
    { id: 'ruby', name: 'Ruby', icon: '💎' },
    { id: 'typescript', name: 'TypeScript', icon: '📘' },
    { id: 'scala', name: 'Scala', icon: '🔴' },
    { id: 'perl', name: 'Perl', icon: '🐪' },
    { id: 'lua', name: 'Lua', icon: '🌙' },
    { id: 'r', name: 'R', icon: '📊' },
    { id: 'matlab', name: 'MATLAB', icon: '🔢' },
    { id: 'assembly', name: 'Assembly', icon: '⚙️' },
    { id: 'sql', name: 'SQL', icon: '🗃️' },
    { id: 'nosql', name: 'NoSQL', icon: '🚫' },
    { id: 'mongodb', name: 'MongoDB', icon: '🍃' },
    { id: 'postgresql', name: 'PostgreSQL', icon: '🐘' },
    { id: 'redis', name: 'Redis', icon: '🔴' },
    { id: 'docker', name: 'Docker', icon: '🐳' },
    { id: 'kubernetes', name: 'Kubernetes', icon: '☸️' },
    { id: 'aws', name: 'AWS', icon: '☁️' },
    { id: 'azure', name: 'Azure', icon: '☁️' },
    { id: 'gcp', name: 'Google Cloud', icon: '☁️' },
    { id: 'android', name: 'Android', icon: '🤖' },
    { id: 'ios', name: 'iOS', icon: '🍎' },
    { id: 'react', name: 'React', icon: '⚛️' },
    { id: 'angular', name: 'Angular', icon: '🅰️' },
    { id: 'vue', name: 'Vue.js', icon: '🟢' },
    { id: 'nodejs', name: 'Node.js', icon: '🌿' },
    { id: 'django', name: 'Django', icon: '🎸' },
    { id: 'flask', name: 'Flask', icon: '🌶️' },
    { id: 'springBoot', name: 'Spring Boot', icon: '🍃' },
    { id: 'unity', name: 'Unity', icon: '🎮' },
    { id: 'unrealEngine', name: 'Unreal Engine', icon: '🎮' },
    { id: 'git', name: 'Git', icon: '🐙' },
    { id: 'linux', name: 'Linux', icon: '🐧' },
    { id: 'devops', name: 'DevOps', icon: '♾️' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: '🔒' },
    { id: 'blockchain', name: 'Blockchain', icon: '🔗' },
    { id: 'deepLearning', name: 'Deep Learning', icon: '🧠' },
    { id: 'nlp', name: 'NLP', icon: '🗣️' }
];

const baseDir = path.join(__dirname, 'langues');

if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir);
}

languages.forEach(lang => {
    // Handle special folder names if needed, but for now ID is safe
    const folderName = lang.id === 'csharp' ? 'c-sharp' : lang.id;
    // Update ID to match if changed
    const scriptId = lang.id;

    // For simplicity, let's use hyphens for folders like 'spring-boot' from 'springBoot'
    const cleanFolderName = folderName.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');

    const langDir = path.join(baseDir, cleanFolderName);

    if (!fs.existsSync(langDir)) {
        fs.mkdirSync(langDir, { recursive: true });
    }

    // HTML Content
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${lang.name} - Learning Resources</title>
    <link rel="stylesheet" href="../../styles.css">
    <link rel="stylesheet" href="${cleanFolderName}.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <header class="page-header">
            <button class="back-btn" onclick="window.location.href='../../index.html'">← Back</button>
            <h1>${lang.icon} ${lang.name} Learning Resources</h1>
            <p class="subtitle">Master ${lang.name} with curated resources</p>
        </header>

        <div class="tabs-container">
            <div class="tabs-nav">
                <button class="tab-btn active" data-tab="youtube">
                     YouTube Channels
                </button>
                <button class="tab-btn" data-tab="updates">
                     Updates & History
                </button>
                <button class="tab-btn" data-tab="notes">
                     Notes & PDF
                </button>
            </div>

            <div class="tabs-content">
                <div class="tab-pane active" id="youtube">
                    <div class="youtube-channels" id="channelsList"></div>
                </div>

                <div class="tab-pane" id="updates">
                    <div class="updates-section">
                        <div class="update-card">
                            <h3>📰 Latest ${lang.name} News</h3>
                            <div id="newsContent">
                                <p>Stay updated with the latest in ${lang.name}.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tab-pane" id="notes">
                    <div class="notes-section">
                         <h3>🔍 Search for ${lang.name} Notes</h3>
                         <div class="search-box">
                                <input type="text" id="searchQuery" placeholder="Enter topic...">
                                <button id="searchBtn" class="btn-primary">Search</button>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="${cleanFolderName}.js"></script>
</body>
</html>`;

    // CSS Content
    const cssContent = `/* ${lang.name} Page Styles */
.page-header {
    text-align: center;
    padding: 40px 0;
    color: var(--text-dark);
}

.page-header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.back-btn {
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 8px 16px;
    background: transparent;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
}

/* Add more specific styles here */
`;

    // JS Content
    const jsContent = `document.addEventListener('DOMContentLoaded', function() {
    // Tab Switching Logic
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Populate Content (Placeholder)
    const channelsList = document.getElementById('channelsList');
    channelsList.innerHTML = '<p>Recommended YouTube channels for ${lang.name} will appear here.</p>';
});`;

    fs.writeFileSync(path.join(langDir, `${cleanFolderName}.html`), htmlContent);
    fs.writeFileSync(path.join(langDir, `${cleanFolderName}.css`), cssContent);
    fs.writeFileSync(path.join(langDir, `${cleanFolderName}.js`), jsContent);

    console.log(`Generated ${cleanFolderName}`);
});
