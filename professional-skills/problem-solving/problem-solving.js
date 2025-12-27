// Problem Solving Skills Data

// YouTube Channels
const youtubeChannels = [
    {
        name: "TED-Ed",
        language: "english",
        description: "Lessons worth sharing, including riddles and logic",
        url: "https://www.youtube.com/user/TEDEducation"
    },
    {
        name: "Think Like a Programmer",
        language: "english",
        description: "Solving problems with code and logic",
        url: "https://www.youtube.com/@Reducible"
    },
    {
        name: "Veritasium",
        language: "english",
        description: "Science and engineering problems explained",
        url: "https://www.youtube.com/@veritasium"
    },
    {
        name: "Vsauce",
        language: "english",
        description: "Curiosity and scientific problem solving",
        url: "https://www.youtube.com/@Vsauce"
    },
    {
        name: "Physics Wallah (Hindi)",
        language: "hindi",
        description: "Solving complex physics and math problems",
        url: "https://www.youtube.com/@PhysicsWallah"
    }
];

// Resources & Books
const resources = [
    {
        icon: "🧠",
        name: "Thinking, Fast and Slow",
        type: "Book by Daniel Kahneman",
        description: "Understanding how our brain makes decisions.",
        features: ["System 1 vs System 2", "Cognitive biases", "Decision making", "Rationality"],
        link: "https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374275637"
    },
    {
        icon: "💻",
        name: "Cracking the Coding Interview",
        type: "Book by Gayle Laakmann McDowell",
        description: "The bible for technical problem solving.",
        features: ["Data Structures", "Algorithms", "System Design", "Behavioral questions"],
        link: "https://www.crackingthecodinginterview.com/"
    },
    {
        icon: "🧩",
        name: "LeetCode / HackerRank",
        type: "Platforms",
        description: "Practice coding problems efficiently.",
        features: ["Daily challenges", "Contests", "Interview kits", "Community solutions"],
        link: "https://leetcode.com/"
    }
];

// Tips & Frameworks
const tips = [
    {
        icon: "🔪",
        title: "Divide and Conquer",
        tips: [
            "Break the problem into smaller parts",
            "Solve each part individually",
            "Combine solutions",
            "Simplifies complex issues",
            "Makes progress visible"
        ]
    },
    {
        icon: "🌳",
        title: "Root Cause Analysis",
        tips: [
            "Ask 'Why?' five times",
            "Identify the underlying cause, not just symptoms",
            "Use Fishbone diagrams",
            "Fix the system, not just the isolated error",
            "Prevent recurrence"
        ]
    },
    {
        icon: "💡",
        title: "Lateral Thinking",
        tips: [
            "Approach the problem from a new angle",
            "Challenge assumptions",
            "Brainstorm wild ideas",
            "Connect unrelated concepts",
            "Don't settle for the first solution"
        ]
    },
    {
        icon: "📝",
        title: "The ADEPT Method",
        tips: [
            "Analogy: Use analogies to explain",
            "Diagram: Visualize the problem",
            "Example: Use concrete examples",
            "Plain English: Explain it simply",
            "Technical: Dive into details"
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
