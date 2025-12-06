// Coding Practice Interview Preparation JavaScript

// YouTube Channels Data
const youtubeChannels = [
    {
        name: "NeetCode",
        language: "english",
        description: "LeetCode solutions with clear explanations and patterns",
        url: "https://www.youtube.com/@NeetCode"
    },
    {
        name: "Nick White",
        language: "english",
        description: "Daily LeetCode problems and interview preparation",
        url: "https://www.youtube.com/@NickWhite"
    },
    {
        name: "Kevin Naughton Jr.",
        language: "english",
        description: "Interview questions and coding challenges",
        url: "https://www.youtube.com/@KevinNaughtonJr"
    },
    {
        name: "Clément Mihailescu",
        language: "english",
        description: "AlgoExpert and coding interview preparation",
        url: "https://www.youtube.com/@clem"
    },
    {
        name: "Back To Back SWE",
        language: "english",
        description: "Technical interview preparation and algorithms",
        url: "https://www.youtube.com/@BackToBackSWE"
    },
    {
        name: "take U forward",
        language: "english",
        description: "Complete Striver's DSA course and problem solving",
        url: "https://www.youtube.com/@takeUforward"
    },
    {
        name: "Aditya Verma",
        language: "hindi",
        description: "Dynamic Programming and pattern-based problem solving",
        url: "https://www.youtube.com/@TheAdityaVerma"
    },
    {
        name: "CodeHelp - by Babbar",
        language: "hindi",
        description: "Complete DSA and coding practice in Hindi",
        url: "https://www.youtube.com/@CodeHelp"
    },
    {
        name: "Apna College",
        language: "hindi",
        description: "DSA and competitive programming in Hindi",
        url: "https://www.youtube.com/@ApnaCollegeOfficial"
    },
    {
        name: "Pepcoding",
        language: "hindi",
        description: "Problem solving and coding interview preparation",
        url: "https://www.youtube.com/@Pepcoding"
    }
];

// Practice Platforms Data
const platforms = [
    {
        icon: "💻",
        name: "LeetCode",
        difficulty: "intermediate",
        description: "The most popular platform for coding interviews. 2000+ problems categorized by company, difficulty, and topic.",
        link: "https://leetcode.com/"
    },
    {
        icon: "🏆",
        name: "HackerRank",
        difficulty: "beginner",
        description: "Great for beginners. Covers algorithms, data structures, and domain-specific challenges.",
        link: "https://www.hackerrank.com/"
    },
    {
        icon: "⚔️",
        name: "CodeForces",
        difficulty: "advanced",
        description: "Competitive programming platform with regular contests and rating system.",
        link: "https://codeforces.com/"
    },
    {
        icon: "📊",
        name: "CodeChef",
        difficulty: "intermediate",
        description: "Monthly contests and practice problems for competitive programming.",
        link: "https://www.codechef.com/"
    },
    {
        icon: "🎯",
        name: "InterviewBit",
        difficulty: "intermediate",
        description: "Structured interview preparation with guided learning paths.",
        link: "https://www.interviewbit.com/"
    },
    {
        icon: "🚀",
        name: "AlgoExpert",
        difficulty: "intermediate",
        description: "100+ curated coding questions with video explanations. (Paid)",
        link: "https://www.algoexpert.io/"
    },
    {
        icon: "💎",
        name: "AtCoder",
        difficulty: "advanced",
        description: "Japanese competitive programming platform with high-quality problems.",
        link: "https://atcoder.jp/"
    },
    {
        icon: "📚",
        name: "GeeksforGeeks Practice",
        difficulty: "beginner",
        description: "Extensive problem set with detailed explanations and tutorials.",
        link: "https://practice.geeksforgeeks.org/"
    },
    {
        icon: "🎓",
        name: "Coderbyte",
        difficulty: "beginner",
        description: "Coding challenges and interview prep for developers.",
        link: "https://coderbyte.com/"
    }
];

// Curated Problem Sets
const problemSets = [
    {
        icon: "🔰",
        title: "Blind 75",
        problems: [
            "75 must-do problems curated by a Blind user",
            "Covers all essential patterns for interviews",
            "Most frequently asked in FAANG interviews",
            "Recommended completion: 2-3 weeks"
        ]
    },
    {
        icon: "🎯",
        title: "NeetCode 150",
        problems: [
            "Extension of Blind 75 with 150 problems",
            "Organized by topic with video solutions",
            "Covers all major coding patterns",
            "Best for comprehensive interview prep"
        ]
    },
    {
        icon: "📈",
        title: "Striver's SDE Sheet",
        problems: [
            "180+ essential problems for placements",
            "Organized by difficulty and topic",
            "Complete video explanations available",
            "Popular among Indian tech aspirants"
        ]
    },
    {
        icon: "🏅",
        title: "Top Interview Questions (Easy)",
        problems: [
            "LeetCode's curated easy problems",
            "50+ questions sorted by acceptance rate",
            "Perfect for building confidence",
            "Great starting point for beginners"
        ]
    },
    {
        icon: "⚡",
        title: "Top Interview Questions (Medium)",
        problems: [
            "LeetCode's curated medium problems",
            "100+ most frequently asked questions",
            "Core interview preparation material",
            "Where most interviews happen"
        ]
    },
    {
        icon: "🔥",
        title: "Top Interview Questions (Hard)",
        problems: [
            "LeetCode's curated hard problems",
            "45+ challenging questions",
            "For senior positions and FAANG",
            "Demonstrates advanced problem-solving"
        ]
    },
    {
        icon: "💡",
        title: "Patterns Collection",
        problems: [
            "Two Pointers - 20+ problems",
            "Sliding Window - 15+ problems",
            "Binary Search - 25+ problems",
            "Dynamic Programming - 40+ problems"
        ]
    },
    {
        icon: "🎁",
        title: "Daily Coding Problem",
        problems: [
            "Subscribe for daily interview questions",
            "Problems from top tech companies",
            "Email delivery with solutions",
            "Build consistent practice habit"
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

    // Initialize content
    displayChannels('all');
    displayPlatforms();
    displayProblemSets();

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
    <div class="platform-card">
      <span class="platform-icon">${platform.icon}</span>
      <h3>${platform.name}</h3>
      <span class="difficulty-badge ${platform.difficulty}">${platform.difficulty.toUpperCase()}</span>
      <p>${platform.description}</p>
      <a href="${platform.link}" target="_blank" class="platform-link">Visit Platform</a>
    </div>
  `).join('');
}

// Display Problem Sets
function displayProblemSets() {
    const problemsList = document.getElementById('problemsList');
    problemsList.innerHTML = problemSets.map(set => `
    <div class="problem-card">
      <h3><span class="problem-icon">${set.icon}</span>${set.title}</h3>
      <ul>
        ${set.problems.map(problem => `<li>${problem}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}
