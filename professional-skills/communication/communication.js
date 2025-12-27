// Communication Skills Data

// YouTube Channels
const youtubeChannels = [
    {
        name: "TED",
        language: "english",
        description: "Inspiring talks on communication and human behavior",
        url: "https://www.youtube.com/@TED"
    },
    {
        name: "Charisma on Command",
        language: "english",
        description: "Learn how to be more confident and charismatic",
        url: "https://www.youtube.com/@Charismaoncommand"
    },
    {
        name: "Communication Coach Alexander Lyons",
        language: "english",
        description: "Practical advice on public speaking and communication",
        url: "https://www.youtube.com/@CommunicationCoachAlexanderLyons"
    },
    {
        name: "Josh Talks",
        language: "hindi",
        description: "Inspiring stories and communication tips in Hindi",
        url: "https://www.youtube.com/@JoshTalksHindi"
    },
    {
        name: "Evan Carmichael",
        language: "english",
        description: "Believe in yourself and improve communication skills",
        url: "https://www.youtube.com/@EvanCarmichael"
    }
];

// Resources & Books
const resources = [
    {
        icon: "📖",
        name: "How to Win Friends and Influence People",
        type: "Book by Dale Carnegie",
        description: "A timeless classic on building relationships and influencing others effectively.",
        features: ["Handling people", "Making people like you", "Winning people to your way of thinking", "Leadership"],
        link: "https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034"
    },
    {
        icon: "🗣️",
        name: "Crucial Conversations",
        type: "Book by Patterson, Grenny, et al.",
        description: "Tools for talking when stakes are high.",
        features: ["High-stakes conversations", "Emotional safety", "Persuasion", "Conflict resolution"],
        link: "https://www.amazon.com/Crucial-Conversations-Talking-Stakes-Second/dp/1469266822"
    },
    {
        icon: "🧠",
        name: "Nonviolent Communication",
        type: "Book by Marshall B. Rosenberg",
        description: "A language of life. Create connection and understanding.",
        features: ["Empathy", "Conflict resolution", "Emotional intelligence", "Compassionate communication"],
        link: "https://www.cnvc.org/"
    }
];

// Tips & Techniques
const tips = [
    {
        icon: "👂",
        title: "Active Listening",
        tips: [
            "Give full attention to the speaker",
            "Nod and provide verbal cues",
            "Don't interrupt",
            "Paraphrase to show understanding",
            "Ask clarifying questions"
        ]
    },
    {
        icon: "👁️",
        title: "Body Language",
        tips: [
            "Maintain eye contact (but don't stare)",
            "Use open postures (uncrossed arms)",
            "Match the other person's energy",
            "Smile genuinely",
            "Be aware of your facial expressions"
        ]
    },
    {
        icon: "🎯",
        title: "Clarity & Conciseness",
        tips: [
            "Think before you speak",
            "Get to the point quickly",
            "Avoid jargon",
            "Structure your thoughts",
            "Check for understanding"
        ]
    },
    {
        icon: "🤝",
        title: "Empathy",
        tips: [
            "Put yourself in their shoes",
            "Validate their feelings",
            "Listen without judging",
            "Show genuine concern",
            "Be patient"
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

            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to clicked button and corresponding pane
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Initialize content
    displayChannels('all');
    displayResources();
    displayTips();

    // Language filter
    const languageDropdown = document.getElementById('language');
    if (languageDropdown) {
        languageDropdown.addEventListener('change', (e) => {
            displayChannels(e.target.value);
        });
    }
});

// Display YouTube Channels
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
      <a href="${channel.url}" target="_blank" class="channel-link">
        Visit Channel →
      </a>
    </div>
  `).join('');
}

// Display Resources
function displayResources() {
    const resourcesList = document.getElementById('resourcesList');
    resourcesList.innerHTML = resources.map(resource => `
    <div class="resource-card">
      <span class="resource-icon">${resource.icon}</span>
      <h3>${resource.name}</h3>
      <p style="color: #667eea; font-weight: 600; font-size: 13px; margin-bottom: 8px;">${resource.type}</p>
      <p>${resource.description}</p>
      <ul style="list-style: none; padding: 0; margin: 12px 0;">
        ${resource.features.map(feature => `
          <li style="color: #718096; font-size: 13px; padding: 4px 0; padding-left: 18px; position: relative;">
            <span style="position: absolute; left: 0; color: #667eea;">✓</span>
            ${feature}
          </li>
        `).join('')}
      </ul>
      <a href="${resource.link}" target="_blank" class="resource-link">View Resource</a>
    </div>
  `).join('');
}

// Display Tips
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
