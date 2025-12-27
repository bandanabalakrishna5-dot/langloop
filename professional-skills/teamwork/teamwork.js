// Teamwork Skills Data

// YouTube Channels
const youtubeChannels = [
    {
        name: "Simon Sinek",
        language: "english",
        description: "Insights on trust, safety, and cooperation",
        url: "https://www.youtube.com/@SimonSinek"
    },
    {
        name: "Atlassian",
        language: "english",
        description: "Tips on agile teamwork and collaboration tools",
        url: "https://www.youtube.com/@Atlassian"
    },
    {
        name: "Teamwork",
        language: "english",
        description: "Content dedicated to improving team efficiency",
        url: "https://www.youtube.com/@Teamwork"
    },
    {
        name: "MindToolsVideos",
        language: "english",
        description: "Skills for career excellence and team success",
        url: "https://www.youtube.com/@mindtoolsvideos"
    },
    {
        name: "Josh Talks (Hindi)",
        language: "hindi",
        description: "Inspirational stories on team success in Hindi",
        url: "https://www.youtube.com/@JoshTalksHindi"
    }
];

// Resources & Books
const resources = [
    {
        icon: "📘",
        name: "The Five Dysfunctions of a Team",
        type: "Book by Patrick Lencioni",
        description: "Understanding the pitfalls that destroy teamwork.",
        features: ["Absence of Trust", "Fear of Conflict", "Lack of Commitment", "Avoidance of Accountability"],
        link: "https://www.amazon.com/Five-Dysfunctions-Team-Leadership-Fable/dp/0787960756"
    },
    {
        icon: "🧠",
        name: "Project Aristotle",
        type: "Study by Google",
        description: "What makes a team effective at Google.",
        features: ["Psychological Safety", "Dependability", "Structure & Clarity", "Meaning"],
        link: "https://rework.withgoogle.com/print/guides/5721312655835136/"
    },
    {
        icon: "🤝",
        name: "Team Habits",
        type: "Book by Charlie Gilkey",
        description: "How small changes lead to better collaboration.",
        features: ["Communication habits", "Meeting habits", "Belonging", "Productivity"],
        link: "https://www.amazon.com/Team-Habits-Small-Changes-Better/dp/0306829731"
    }
];

// Tips & Collaboration
const tips = [
    {
        icon: "🛡️",
        title: "Psychological Safety",
        tips: [
            "Encourage risk-taking without fear",
            "Admit mistakes openly",
            "Respect diverse viewpoints",
            "No blame culture",
            "Be supportive"
        ]
    },
    {
        icon: "🗺️",
        title: "Clear Roles & Goals",
        tips: [
            "Know your responsibilities",
            "Understand the team's objective",
            "Align personal goals with team goals",
            "Clarify expectations",
            "Avoid duplication of work"
        ]
    },
    {
        icon: "🔧",
        title: "Conflict Resolution",
        tips: [
            "Address issues early",
            "Focus on the problem, not the person",
            "Listen to understand",
            "Find common ground",
            "Compromise when necessary"
        ]
    },
    {
        icon: "🎉",
        title: "Celebrate Success",
        tips: [
            "Acknowledge individual contributions",
            "Celebrate team milestones",
            "Share credit",
            "Build morale",
            "Have fun together"
        ]
    }
];

// Tab Switching & Initialization
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
      <p style="color: #FF5E62; font-weight: 600; font-size: 13px; margin-bottom: 8px;">${resource.type}</p>
      <p>${resource.description}</p>
      <ul style="list-style: none; padding: 0; margin: 12px 0;">
        ${resource.features.map(feature => `
          <li style="color: #718096; font-size: 13px; padding: 4px 0; padding-left: 18px; position: relative;">
            <span style="position: absolute; left: 0; color: #FF5E62;">✓</span>
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
