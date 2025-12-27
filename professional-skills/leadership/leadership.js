// Leadership Skills Data

// YouTube Channels
const youtubeChannels = [
    {
        name: "Simon Sinek",
        language: "english",
        description: "Inspiring talks on leadership and the 'Why'",
        url: "https://www.youtube.com/@SimonSinek"
    },
    {
        name: "Harvard Business Review",
        language: "english",
        description: "Management tips and leadership insights",
        url: "https://www.youtube.com/@harvardbusinessreview"
    },
    {
        name: "Leadership with Mike",
        language: "english",
        description: "Practical management and leadership advice",
        url: "https://www.youtube.com/@LeadershipWithMike"
    },
    {
        name: "Robin Sharma",
        language: "english",
        description: "Leadership and personal mastery insights",
        url: "https://www.youtube.com/@RobinSharma"
    },
    {
        name: "Dr. Vivek Bindra",
        language: "hindi",
        description: "Business and leadership strategies in Hindi",
        url: "https://www.youtube.com/@MrVivekBindra"
    }
];

// Resources & Books
const resources = [
    {
        icon: "📖",
        name: "Leaders Eat Last",
        type: "Book by Simon Sinek",
        description: "Why some teams pull together and others don't.",
        features: ["Building trust", "Circle of safety", "Servant leadership", "Team culture"],
        link: "https://simonsinek.com/books/leaders-eat-last/"
    },
    {
        icon: "🦁",
        name: "Dare to Lead",
        type: "Book by Brené Brown",
        description: "Brave work. Tough conversations. Whole hearts.",
        features: ["Vulnerability", "Courage", "Empathy", "Resilience"],
        link: "https://brenebrown.com/book/dare-to-lead/"
    },
    {
        icon: "⚔️",
        name: "The Art of War",
        type: "Book by Sun Tzu",
        description: "Ancient wisdom on strategy and leadership.",
        features: ["Strategy", "Tactics", "Decision making", "Discipline"],
        link: "https://www.amazon.com/Art-War-Sun-Tzu/dp/1590302257"
    }
];

// Tips & Principles
const tips = [
    {
        icon: "🎯",
        title: "Lead by Example",
        tips: [
            "Demonstrate the behavior you expect",
            "Be the first to arrive, last to leave",
            "Show integrity in all actions",
            "Admit your mistakes",
            "Stay calm under pressure"
        ]
    },
    {
        icon: "🤝",
        title: "Empower Your Team",
        tips: [
            "Delegate responsibilities, not just tasks",
            "Trust your team to deliver",
            "Provide resources and support",
            "Celebrate team successes",
            "Encourage diverse opinions"
        ]
    },
    {
        icon: "👂",
        title: "Effective Communication",
        tips: [
            "Listen more than you speak",
            "Provide clear and constructive feedback",
            "Be transparent about goals",
            "Communicate value and purpose",
            "Encourage open dialogue"
        ]
    },
    {
        icon: "🌱",
        title: "Continuous Growth",
        tips: [
            "Invest in your own learning",
            "Mentor others",
            "Seek feedback on your leadership",
            "Adapt to changing circumstances",
            "Foster a learning culture"
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
      <p style="color: #FF6B6B; font-weight: 600; font-size: 13px; margin-bottom: 8px;">${resource.type}</p>
      <p>${resource.description}</p>
      <ul style="list-style: none; padding: 0; margin: 12px 0;">
        ${resource.features.map(feature => `
          <li style="color: #718096; font-size: 13px; padding: 4px 0; padding-left: 18px; position: relative;">
            <span style="position: absolute; left: 0; color: #FF6B6B;">✓</span>
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
