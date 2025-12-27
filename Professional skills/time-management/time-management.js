// Time Management Skills Data

// YouTube Channels
const youtubeChannels = [
    {
        name: "Ali Abdaal",
        language: "english",
        description: "Evidence-based productivity and life advice",
        url: "https://www.youtube.com/@AliAbdaal"
    },
    {
        name: "Thomas Frank",
        language: "english",
        description: "Productivity, study tips, and not-getting-distracted",
        url: "https://www.youtube.com/@Thomasfrank"
    },
    {
        name: "Matt D'Avella",
        language: "english",
        description: "Minimalism, habits, and productivity",
        url: "https://www.youtube.com/@mattdavella"
    },
    {
        name: "Simpletivity",
        language: "english",
        description: "Helping you get more done in less time",
        url: "https://www.youtube.com/@Simpletivity"
    },
    {
        name: "Ranveer Allahbadia",
        language: "hindi",
        description: "Self-improvement and career growth in Hindi",
        url: "https://www.youtube.com/@BeerBiceps"
    }
];

// Resources & Books
const resources = [
    {
        icon: "📘",
        name: "Atomic Habits",
        type: "Book by James Clear",
        description: "Tiny Changes, Remarkable Results.",
        features: ["Habit formation", "Breaking bad habits", "Systematic improvement", "1% better every day"],
        link: "https://jamesclear.com/atomic-habits"
    },
    {
        icon: "🧠",
        name: "Deep Work",
        type: "Book by Cal Newport",
        description: "Rules for focused success in a distracted world.",
        features: ["Deep vs Shallow work", "Embracing boredom", "Quitting social media", "Focus strategies"],
        link: "https://calnewport.com/deep-work-rules-for-focused-success-in-a-distracted-world/"
    },
    {
        icon: "⏱️",
        name: "Notion / Todoist",
        type: "Tools",
        description: "Apps to organize your life and work.",
        features: ["Task management", "Personal wiki", "Habit tracking", "Calendar integration"],
        link: "https://www.notion.so/"
    }
];

// Tips & Techniques
const tips = [
    {
        icon: "🍅",
        title: "Pomodoro Technique",
        tips: [
            "Work for 25 minutes focused",
            "Take a 5 minute break",
            "Repeat 4 times, then take a longer break",
            "Use a timer to stay accountable",
            "Eliminate distractions during work intervals"
        ]
    },
    {
        icon: "📅",
        title: "Time Blocking",
        tips: [
            "Schedule every task in your calendar",
            "Group similar tasks together",
            "Dedicate blocks for deep work",
            "Protect your time blocks",
            "Be realistic with time estimates"
        ]
    },
    {
        icon: "📊",
        title: "Eisenhower Matrix",
        tips: [
            "Do (Urgent & Important)",
            "Decide (Important, Not Urgent)",
            "Delegate (Urgent, Not Important)",
            "Delete (Not Usegent, Not Important)",
            "Focus on the 'Decide' quadrant for long-term growth"
        ]
    },
    {
        icon: "🐸",
        title: "Eat That Frog",
        tips: [
            "Identify your most difficult task",
            "Do it first thing in the morning",
            "Don't procrastinate on the big stuff",
            "Set yourself up for a productive day",
            "Build momentum"
        ]
    }
];

// Tab Switching & Initialization -- REUSED LOGIC
document.addEventListener('DOMContentLoaded', function () {
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

    displayChannels('all');
    displayResources();
    displayTips();

    const languageDropdown = document.getElementById('language');
    if (languageDropdown) {
        languageDropdown.addEventListener('change', (e) => {
            displayChannels(e.target.value);
        });
    }
});

function displayChannels(language) {
    const channelsList = document.getElementById('channelsList');
    const filteredChannels = language === 'all'
        ? youtubeChannels
        : youtubeChannels.filter(channel => channel.language === language);

    if (filteredChannels.length === 0) {
        channelsList.innerHTML = '<p style="text-align: center; color: white; grid-column: 1/-1;">No channels found for this language.</p>';
        return;
    }

    channelsList.innerHTML = filteredChannels.map(channel => `
    <div class="channel-card">
      <div class="channel-header">
        <div class="channel-icon">▶</div>
        <div class="channel-info">
          <h4>${channel.name}</h4>
          <span class="channel-language">${channel.language.charAt(0).toUpperCase() + channel.language.slice(1)}</span>
        </div>
      </div>
      <p class="channel-description">${channel.description}</p>
      <a href="${channel.url}" target="_blank" class="channel-link">Visit Channel →</a>
    </div>
  `).join('');
}

function displayResources() {
    const resourcesList = document.getElementById('resourcesList');
    resourcesList.innerHTML = resources.map(resource => `
    <div class="resource-card">
      <span class="resource-icon">${resource.icon}</span>
      <h3>${resource.name}</h3>
      <p style="color: #11998e; font-weight: 600; font-size: 13px; margin-bottom: 8px;">${resource.type}</p>
      <p>${resource.description}</p>
      <ul style="list-style: none; padding: 0; margin: 12px 0;">
        ${resource.features.map(feature => `
          <li style="color: #718096; font-size: 13px; padding: 4px 0; padding-left: 18px; position: relative;">
            <span style="position: absolute; left: 0; color: #11998e;">✓</span>
            ${feature}
          </li>
        `).join('')}
      </ul>
      <a href="${resource.link}" target="_blank" class="resource-link">View Resource</a>
    </div>
  `).join('');
}

function displayTips() {
    const tipsList = document.getElementById('tipsList');
    tipsList.innerHTML = tips.map(tip => `
    <div class="note-card">
      <h3><span class="note-icon">${tip.icon}</span>${tip.title}</h3>
      <ul>
        ${tip.tips.map(t => `<li>${t}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}
