// Mock Interviews Preparation JavaScript

// YouTube Channels Data
const youtubeChannels = [
    {
        name: "Exponent",
        language: "english",
        description: "Real mock interviews for PM, SWE, and design roles",
        url: "https://www.youtube.com/@tryexponent"
    },
    {
        name: "The Companies Expert",
        language: "english",
        description: "FAANG mock interviews and career advice",
        url: "https://www.youtube.com/@TheCompaniesExpert"
    },
    {
        name: "Clément Mihailescu",
        language: "english",
        description: "Real Google, Facebook interview experiences",
        url: "https://www.youtube.com/@clem"
    },
    {
        name: "Joma Tech",
        language: "english",
        description: "Tech career advice and interview experiences",
        url: "https://www.youtube.com/@JomaOppa"
    },
    {
        name: "Mock Interview Pro",
        language: "english",
        description: "Professional mock interview sessions",
        url: "https://www.youtube.com/@MockInterviewPro"
    },
    {
        name: "Nick White",
        language: "english",
        description: "Coding mock interviews and problem solving",
        url: "https://www.youtube.com/@NickWhite"
    },
    {
        name: "Rachit Jain",
        language: "hindi",
        description: "Interview experiences and preparation in Hindi",
        url: "https://www.youtube.com/@RachitJain"
    },
    {
        name: "Apni Kaksha",
        language: "hindi",
        description: "Mock interviews and placement preparation",
        url: "https://www.youtube.com/@ApniKaksha"
    },
    {
        name: "Knowledge Gate",
        language: "hindi",
        description: "Interview preparation and mock sessions",
        url: "https://www.youtube.com/@KnowledgeGate"
    }
];

// Mock Interview Platforms
const platforms = [
    {
        icon: "🎯",
        name: "Pramp",
        type: "Peer-to-Peer",
        description: "Free peer-to-peer mock interviews. Practice coding, system design, and behavioral questions with other candidates.",
        features: ["100% Free", "Real-time coding", "Video chat", "Instant feedback"],
        link: "https://www.pramp.com/"
    },
    {
        icon: "💼",
        name: "Interviewing.io",
        type: "Anonymous Practice",
        description: "Anonymous technical mock interviews with engineers from top companies. Get honest feedback without bias.",
        features: ["Anonymous interviews", "Real engineers", "Detailed feedback", "Job opportunities"],
        link: "https://interviewing.io/"
    },
    {
        icon: "🎓",
        name: "Exponent",
        type: "Comprehensive Prep",
        description: "Complete interview prep platform with mock interviews, courses, and practice questions for PM, SWE, and more.",
        features: ["Mock interview videos", "Expert coaches", "Company-specific", "Resume review"],
        link: "https://www.tryexponent.com/"
    },
    {
        icon: "🚀",
        name: "Gainlo",
        type: "System Design Focus",
        description: "Mock interviews focused on system design. Practice with experienced engineers from Google, Facebook, etc.",
        features: ["System design focused", "Experienced interviewers", "Personalized feedback", "Flexible scheduling"],
        link: "http://www.gainlo.co/"
    },
    {
        icon: "🎪",
        name: "LeetCode Mock Interview",
        type: "Automated Practice",
        description: "Automated mock interview environment simulating real interview conditions with timer and constraints.",
        features: ["Multiple companies", "Timed interviews", "Instant results", "Premium feature"],
        link: "https://leetcode.com/interview/"
    },
    {
        icon: "🎯",
        name: "InterviewBit Mock",
        type: "Full-Stack Practice",
        description: "Mock interviews covering coding, system design, and problem-solving with detailed analytics.",
        features: ["Performance analytics", "Multiple  rounds", "Company-wise", "Peer comparison"],
        link: "https://www.interviewbit.com/mock-interview/"
    },
    {
        icon: "👨‍💼",
        name: "Technical.ly",
        type: "Professional Coaches",
        description: "One-on-one mock interviews with professional interview coaches from FAANG companies.",
        features: ["Professional coaches", "Personalized plan", "Career guidance", "Premium service"],
        link: "https://technical.ly/"
    },
    {
        icon: "🌟",
        name: "CareerCup Mock",
        type: "Community Practice",
        description: "Practice interviews with the CareerCup community. Founded by Gayle Laakmann McDowell (Cracking the Coding Interview).",
        features: ["Community-driven", "Free practice", "Discussion forums", "Question database"],
        link: "https://www.careercup.com/"
    }
];

// Preparation Tips
const preparationTips = [
    {
        icon: "📝",
        title: "Before the Mock Interview",
        tips: [
            "Treat it like a real interview - dress professionally",
            "Test your equipment (camera, mic, internet) 15 minutes early",
            "Have a pen, paper, and water nearby",
            "Review the job description and company",
            "Prepare questions to ask the interviewer",
            "Practice your elevator pitch and introduction"
        ]
    },
    {
        icon: "💬",
        title: "During the Interview",
        tips: [
            "Think out loud - explain your reasoning process",
            "Ask clarifying questions before jumping to solutions",
            "Communicate your approach before coding",
            "Test your code with examples",
            "Discuss time and space complexity",
            "Stay calm if you get stuck - it's okay to ask for hints"
        ]
    },
    {
        icon: "🎯",
        title: "Behavioral Questions",
        tips: [
            "Use the STAR method (Situation, Task, Action, Result)",
            "Have 3-5 stories prepared covering different scenarios",
            "Be specific with numbers and outcomes",
            "Show growth from challenges and failures",
            "Practice common questions out loud",
            "Be authentic - don't memorize scripts verbatim"
        ]
    },
    {
        icon: "⏰",
        title: "Time Management",
        tips: [
            "Schedule mocks regularly (2-3 times per week)",
            "Start 1-2 months before your real interviews",
            "Begin with easier problems, progress to harder ones",
            "Time yourself - practice under interview conditions",
            "Leave time at the end for questions",
            "Don't rush - better to solve one problem well"
        ]
    },
    {
        icon: "📊",
        title: "After the Mock Interview",
        tips: [
            "Request detailed feedback immediately",
            "Take notes on areas of improvement",
            "Review problems you struggled with",
            "Practice similar questions to reinforce learning",
            "Track your progress over multiple mocks",
            "Identify patterns in your weak areas"
        ]
    },
    {
        icon: "🔄",
        title: "Feedback Implementation",
        tips: [
            "Focus on one or two improvements at a time",
            "Practice the specific skills you're weak in",
            "Record yourself to identify verbal tics",
            "Get feedback from multiple sources",
            "Implement feedback in your next mock",
            "Don't be discouraged by criticism - use it to improve"
        ]
    },
    {
        icon: "💪",
        title: "Building Confidence",
        tips: [
            "Do at least 5-10 mocks before real interviews",
            "Practice with different types of interviewers",
            "Simulate various difficulty levels",
            "Review successful mock performances",
            "Celebrate small improvements",
            "Remember: every mock is a learning opportunity"
        ]
    },
    {
        icon: "🚫",
        title: "Common Mistakes to Avoid",
        tips: [
            "Don't stay silent - communicate constantly",
            "Don't jump to coding without planning",
            "Don't ignore edge cases and error handling",
            "Don't blame yourself too much for one bad performance",
            "Don't memorize solutions - understand patterns",
            "Don't cancel mocks out of fear - that's when you need them most"
        ]
    }
];

// Tab Switching
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

    // Back button navigation
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = '../../index.html';
        });
    }

    // Initialize content
    displayChannels('all');
    displayPlatforms();
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

// Display Platforms
function displayPlatforms() {
    const platformsList = document.getElementById('platformsList');
    platformsList.innerHTML = platforms.map(platform => `
    <div class="resource-card">
      <span class="resource-icon">${platform.icon}</span>
      <h3>${platform.name}</h3>
      <p style="color: #667eea; font-weight: 600; font-size: 13px; margin-bottom: 8px;">${platform.type}</p>
      <p>${platform.description}</p>
      <ul style="list-style: none; padding: 0; margin: 12px 0;">
        ${platform.features.map(feature => `
          <li style="color: #718096; font-size: 13px; padding: 4px 0; padding-left: 18px; position: relative;">
            <span style="position: absolute; left: 0; color: #667eea;">✓</span>
            ${feature}
          </li>
        `).join('')}
      </ul>
      <a href="${platform.link}" target="_blank" class="resource-link">Visit Platform</a>
    </div>
  `).join('');
}

// Display Tips
function displayTips() {
    const tipsList = document.getElementById('tipsList');
    tipsList.innerHTML = preparationTips.map(tip => `
    <div class="note-card">
      <h3><span class="note-icon">${tip.icon}</span>${tip.title}</h3>
      <ul>
        ${tip.tips.map(t => `<li>${t}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}
