// Behavioral Interview Preparation JavaScript

// YouTube Channels Data
const youtubeChannels = [
    {
        name: "Jeff Su",
        language: "english",
        description: "Career advice and behavioral interview strategies",
        url: "https://www.youtube.com/@JeffSu"
    },
    {
        name: "The Companies Expert",
        language: "english",
        description: "Behavioral interviews and FAANG preparation",
        url: "https://www.youtube.com/@TheCompaniesExpert"
    },
    {
        name: "Exponent",
        language: "english",
        description: "Behavioral interview mock questions and tips",
        url: "https://www.youtube.com/@tryexponent"
    },
    {
        name: "Indeed",
        language: "english",
        description: "Job interview tips and career advice",
        url: "https://www.youtube.com/@Indeed"
    },
    {
        name: "Linda Raynier",
        language: "english",
        description: "Interview strategies and STAR method examples",
        url: "https://www.youtube.com/@LindaRaynier"
    },
    {
        name: "CareerVidz",
        language: "hindi",
        description: "Interview preparation and career guidance in Hindi",
        url: "https://www.youtube.com/@CareerVidz"
    },
    {
        name: "Placement Preparation",
        language: "hindi",
        description: "Campus placement and behavioral interviews in Hindi",
        url: "https://www.youtube.com/@PlacementPreparation"
    },
    {
        name: "Rachit Jain",
        language: "hindi",
        description: "Interview experiences and preparation tips",
        url: "https://www.youtube.com/@RachitJain"
    }
];

// STAR Method Framework
const starMethod = [
    {
        icon: "🎯",
        letter: "S",
        title: "Situation",
        subtitle: "Set the Scene",
        description: "Describe the context or background of the specific situation you were in. Be concise but provide enough detail for the interviewer to understand.",
        example: "Example: 'In my previous role as a software engineer, our team was falling behind on a critical project deadline...'"
    },
    {
        icon: "📋",
        letter: "T",
        title: "Task",
        subtitle: "Explain the Challenge",
        description: "Explain what your responsibility was in that situation. What was the goal or objective you needed to achieve?",
        example: "Example: 'I was tasked with identifying bottlenecks in our development process and proposing solutions to get us back on track...'"
    },
    {
        icon: "⚡",
        letter: "A",
        title: "Action",
        subtitle: "Describe What You Did",
        description: "Detail the specific actions YOU took to address the task. Focus on your individual contribution, not the team's.",
        example: "Example: 'I analyzed our workflow, implemented automated testing to reduce manual QA time, and organized daily standups...'"
    },
    {
        icon: "✅",
        letter: "R",
        title: "Result",
        subtitle: "Share the Outcome",
        description: "Explain what happened as a result of your actions. Quantify the results when possible. What did you learn?",
        example: "Example: 'We delivered the project 2 weeks early, reduced bugs by 40%, and I was recognized as Employee of the Month...'"
    }
];

// Common Behavioral Questions
const questions = [
    {
        category: "Leadership & Teamwork",
        question: "Tell me about a time when you had to lead a team.",
        tips: [
            "Emphasize your leadership style and how you motivated the team",
            "Mention specific actions you took as a leader",
            "Highlight the positive outcome and team success"
        ]
    },
    {
        category: "Leadership & Teamwork",
        question: "Describe a situation where you had to work with a difficult team member.",
        tips: [
            "Show empathy and understanding",
            "Focus on how you resolved the conflict professionally",
            "Emphasize collaboration and positive outcome"
        ]
    },
    {
        category: "Problem Solving",
        question: "Tell me about a time you faced a significant challenge at work.",
        tips: [
            "Choose a genuinely challenging situation",
            "Explain your analytical approach to the problem",
            "Highlight creative solutions you implemented"
        ]
    },
    {
        category: "Problem Solving",
        question: "Describe a time when you had to make a difficult decision with limited information.",
        tips: [
            "Explain your decision-making process",
            "Discuss how you gathered available information",
            "Show confidence in making tough calls"
        ]
    },
    {
        category: "Adaptability",
        question: "Tell me about a time you had to learn something new quickly.",
        tips: [
            "Show your learning agility and curiosity",
            "Describe resources and strategies you used",
            "Highlight how you applied the new knowledge"
        ]
    },
    {
        category: "Adaptability",
        question: "Describe a situation where priorities changed suddenly. How did you handle it?",
        tips: [
            "Demonstrate flexibility and composure",
            "Explain how you re-prioritized tasks",
            "Show ability to stay productive during change"
        ]
    },
    {
        category: "Conflict Resolution",
        question: "Tell me about a time you disagreed with your manager.",
        tips: [
            "Be respectful when discussing the disagreement",
            "Show that you can disagree professionally",
            "Emphasize the positive resolution"
        ]
    },
    {
        category: "Conflict Resolution",
        question: "Describe a situation where you had to give negative feedback.",
        tips: [
            "Show empathy and professionalism",
            "Explain your constructive approach",
            "Highlight the positive outcome of the feedback"
        ]
    },
    {
        category: "Achievement",
        question: "What's your greatest professional achievement?",
        tips: [
            "Choose something genuinely impressive",
            "Quantify the impact when possible",
            "Explain why it was meaningful to you"
        ]
    },
    {
        category: "Achievement",
        question: "Tell me about a time you exceeded expectations.",
        tips: [
            "Set context for what was expected",
            "Explain how you went above and beyond",
            "Quantify the extra value you delivered"
        ]
    },
    {
        category: "Failure & Learning",
        question: "Tell me about a time you failed.",
        tips: [
            "Be honest but choose an appropriate failure",
            "Focus more on what you learned",
            "Show growth and how you improved"
        ]
    },
    {
        category: "Failure & Learning",
        question: "Describe a time when you received critical feedback.",
        tips: [
            "Show you're open to feedback",
            "Explain how you processed and acted on it",
            "Demonstrate self-improvement"
        ]
    },
    {
        category: "Time Management",
        question: "Tell me about a time you had to manage multiple priorities.",
        tips: [
            "Explain your prioritization framework",
            "Describe time management techniques used",
            "Show successful completion of all tasks"
        ]
    },
    {
        category: "Time Management",
        question: "Describe a time when you missed a deadline.",
        tips: [
            "Take ownership of the situation",
            "Explain circumstances and what you learned",
            "Show how you've improved since then"
        ]
    },
    {
        category: "Initiative",
        question: "Tell me about a time you identified and solved a problem without being asked.",
        tips: [
            "Show proactive thinking",
            "Explain how you identified the opportunity",
            "Quantify the impact of your initiative"
        ]
    },
    {
        category: "Initiative",
        question: "Describe a time you proposed a new idea or process.",
        tips: [
            "Show innovation and creativity",
            "Explain how you convinced others",
            "Highlight the positive results"
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
    displayStarMethod();
    displayQuestions();

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

// Display STAR Method
function displayStarMethod() {
    const starList = document.getElementById('starList');
    starList.innerHTML = starMethod.map(item => `
    <div class="star-card">
      <span class="star-icon">${item.icon}</span>
      <h3>${item.letter} - ${item.title}</h3>
      <p class="subtitle">${item.subtitle}</p>
      <p>${item.description}</p>
      <div class="example">
        <strong>Example:</strong>
        <span style="color: #718096; font-size: 13px;">${item.example}</span>
      </div>
    </div>
  `).join('');
}

// Display Common Questions
function displayQuestions() {
    const questionsList = document.getElementById('questionsList');
    questionsList.innerHTML = questions.map(q => `
    <div class="question-card">
      <span class="category-badge">${q.category}</span>
      <h4>${q.question}</h4>
      <ul>
        ${q.tips.map(tip => `<li>${tip}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}
