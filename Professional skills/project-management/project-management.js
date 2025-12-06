// Project Management Skills Data

// YouTube Channels
const youtubeChannels = [
    {
        name: "Google Project Management",
        language: "english",
        description: "Official channel for Google's PM certificate content",
        url: "https://www.youtube.com/c/GoogleCareerCertificates"
    },
    {
        name: "Adriana Girdler",
        language: "english",
        description: "Practical project management tips and career advice",
        url: "https://www.youtube.com/@AdrianaGirdler"
    },
    {
        name: "Project Management Institute (PMI)",
        language: "english",
        description: "Global insights and standards for PMs",
        url: "https://www.youtube.com/user/PMInstitute"
    },
    {
        name: "David McLachlan",
        language: "english",
        description: "Agile, PMP, and PMBOK explained simply",
        url: "https://www.youtube.com/@DavidMcLachlanProject"
    },
    {
        name: "Edureka! (Hindi)",
        language: "hindi",
        description: "Tech and PM tutorials in Hindi",
        url: "https://www.youtube.com/c/edurekaIN"
    }
];

// Resources & Books
const resources = [
    {
        icon: "📘",
        name: "PMBOK® Guide",
        type: "Standard by PMI",
        description: "The Project Management Body of Knowledge.",
        features: ["Global standard", "Process groups", "Knowledge areas", "Best practices"],
        link: "https://www.pmi.org/pmbok-guide-standards"
    },
    {
        icon: "🔄",
        name: "Scrum: The Art of Doing Twice the Work...",
        type: "Book by Jeff Sutherland",
        description: "The definitive guide to Scrum methodology.",
        features: ["Agile principles", "Sprints", "Team velocity", "Continuous improvement"],
        link: "https://www.amazon.com/Scrum-Doing-Twice-Work-Half/dp/038534645X"
    },
    {
        icon: "🛠️",
        name: "Trello / Jira / Asana",
        type: "Tools",
        description: "Popular project management software tools.",
        features: ["Task tracking", "Collaboration", "Kanban boards", "Gantt charts"],
        link: "https://trello.com/"
    }
];

// Tips & Methodologies
const tips = [
    {
        icon: "🚀",
        title: "Agile Methodology",
        tips: [
            "Iterative development",
            "Focus on customer value",
            "Respond to change over following a plan",
            "Daily stand-ups",
            "Retrospectives for improvement"
        ]
    },
    {
        icon: "⚠️",
        title: "Risk Management",
        tips: [
            "Identify potential risks early",
            "Assess probability and impact",
            "Develop mitigation plans",
            "Monitor risks regularly",
            "Communicate risks to stakeholders"
        ]
    },
    {
        icon: "🎯",
        title: "Scope Management",
        tips: [
            "Clearly define project requirement",
            "Avoid scope creep",
            "Use a Work Breakdown Structure (WBS)",
            "Get formal sign-off on scope",
            "Manage change requests rigorously"
        ]
    },
    {
        icon: "👥",
        title: "Stakeholder Management",
        tips: [
            "Identify all stakeholders",
            "Understand their needs and expectations",
            "Communicate regularly and clearly",
            "Manage conflicting interests",
            "Keep them engaged"
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
      <p style="color: #00b894; font-weight: 600; font-size: 13px; margin-bottom: 8px;">${resource.type}</p>
      <p>${resource.description}</p>
      <ul style="list-style: none; padding: 0; margin: 12px 0;">
        ${resource.features.map(feature => `
          <li style="color: #718096; font-size: 13px; padding: 4px 0; padding-left: 18px; position: relative;">
            <span style="position: absolute; left: 0; color: #00b894;">✓</span>
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
