// Technical Concepts Interview Preparation JavaScript

// YouTube Channels Data
const youtubeChannels = [
    {
        name: "Neso Academy",
        language: "english",
        description: "Operating Systems, DBMS, Computer Networks explained",
        url: "https://www.youtube.com/@nesoacademy"
    },
    {
        name: "Gate Smashers",
        language: "english",
        description: "CS fundamentals for interviews and competitive exams",
        url: "https://www.youtube.com/@GateSmashers"
    },
    {
        name: "Abdul Bari",
        language: "english",
        description: "Algorithms, OS, and core CS concepts",
        url: "https://www.youtube.com/@abdul_bari"
    },
    {
        name: "GeeksforGeeks",
        language: "english",
        description: "Complete CS fundamentals and interview prep",
        url: "https://www.youtube.com/@GeeksforGeeksVideos"
    },
    {
        name: "Hussein Nasser",
        language: "english",
        description: "Backend, databases, networking, and system design",
        url: "https://www.youtube.com/@hnasr"
    },
    {
        name: "Jenny's Lectures CS IT",
        language: "hindi",
        description: "DBMS, OS, Computer Networks in Hindi",
        url: "https://www.youtube.com/@JennyslecturesCSIT"
    },
    {
        name: "Knowledge Gate",
        language: "hindi",
        description: "Operating Systems and CS fundamentals in Hindi",
        url: "https://www.youtube.com/@KnowledgeGate"
    },
    {
        name: "Education 4u",
        language: "hindi",
        description: "Computer Networks and OS concepts in Hindi",
        url: "https://www.youtube.com/@Education4u"
    },
    {
        name: "Last Moment Tuitions",
        language: "hindi",
        description: "Quick CS concepts and interview preparation",
        url: "https://www.youtube.com/@LASTMOMENTUITIONS"
    }
];

// Core Topics Data
const coreTopics = [
    {
        icon: "💾",
        title: "Operating Systems",
        description: "Essential OS concepts for technical interviews",
        concepts: [
            "Processes vs Threads",
            "Process Scheduling Algorithms",
            "Deadlock: Detection, Prevention, Avoidance",
            "Memory Management & Paging",
            "Virtual Memory",
            "Inter-Process Communication (IPC)"
        ],
        link: "https://www.geeksforgeeks.org/operating-systems/"
    },
    {
        icon: "🗄️",
        title: "Database Management Systems",
        description: "Database concepts and SQL fundamentals",
        concepts: [
            "ACID Properties",
            "Normalization (1NF, 2NF, 3NF, BCNF)",
            "Indexing & B-Trees",
            "SQL Joins (Inner, Outer, Cross)",
            "Transactions & Concurrency Control",
            "CAP Theorem & NoSQL Databases"
        ],
        link: "https://www.geeksforgeeks.org/dbms/"
    },
    {
        icon: "🌐",
        title: "Computer Networks",
        description: "Networking protocols and concepts",
        concepts: [
            "OSI Model & TCP/IP Model",
            "HTTP/HTTPS & RESTful APIs",
            "TCP vs UDP",
            "DNS & How the Internet Works",
            "IP Addressing & Subnetting",
            "Network Security & Firewalls"
        ],
        link: "https://www.geeksforgeeks.org/computer-network-tutorials/"
    },
    {
        icon: "🧩",
        title: "Object-Oriented Programming",
        description: "OOP principles and design patterns",
        concepts: [
            "Encapsulation, Inheritance, Polymorphism",
            "Abstract Classes vs Interfaces",
            "SOLID Principles",
            "Design Patterns (Singleton, Factory, Observer)",
            "Composition vs Inheritance",
            "Method Overloading vs Overriding"
        ],
        link: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/"
    },
    {
        icon: "📊",
        title: "Data Structures",
        description: "Core data structures knowledge",
        concepts: [
            "Arrays, Linked Lists, Stacks, Queues",
            "Trees (Binary, BST, AVL, Red-Black)",
            "Graphs & Graph Algorithms",
            "Hash Tables & Collision Handling",
            "Heaps & Priority Queues",
            "Tries & Suffix Trees"
        ],
        link: "https://www.geeksforgeeks.org/data-structures/"
    },
    {
        icon: "⚙️",
        title: "Algorithms",
        description: "Algorithm design and complexity",
        concepts: [
            "Time & Space Complexity (Big O)",
            "Sorting Algorithms (Quick, Merge, Heap)",
            "Searching (Binary Search, BFS, DFS)",
            "Dynamic Programming",
            "Greedy Algorithms",
            "Divide and Conquer"
        ],
        link: "https://www.geeksforgeeks.org/fundamentals-of-algorithms/"
    },
    {
        icon: "🔐",
        title: "Security Fundamentals",
        description: "Basic security concepts",
        concepts: [
            "Authentication vs Authorization",
            "Encryption (Symmetric vs Asymmetric)",
            "OAuth 2.0 & JWT",
            "SQL Injection & XSS",
            "HTTPS & SSL/TLS",
            "Password Hashing & Salting"
        ],
        link: "https://www.geeksforgeeks.org/computer-network-security/"
    },
    {
        icon: "☁️",
        title: "Cloud Computing Basics",
        description: "Cloud concepts and services",
        concepts: [
            "IaaS vs PaaS vs SaaS",
            "Cloud Service Providers (AWS, Azure, GCP)",
            "Containers & Docker",
            "Kubernetes Basics",
            "Serverless Architecture",
            "Cloud Storage Solutions"
        ],
        link: "https://aws.amazon.com/what-is-cloud-computing/"
    }
];

// Interview Questions by Topic
const interviewQuestions = [
    {
        topic: "Operating Systems",
        icon: "💾",
        questions: [
            "What is the difference between process and thread?",
            "Explain the concept of deadlock and how to prevent it",
            "What is virtual memory and why is it important?",
            "Difference between paging and segmentation?",
            "What are semaphores and mutexes?"
        ]
    },
    {
        topic: "Database Management",
        icon: "🗄️",
        questions: [
            "Explain ACID properties in databases",
            "What is database normalization and why is it needed?",
            "Difference between clustered and non-clustered index?",
            "What is a transaction? Explain isolation levels",
            "SQL vs NoSQL - when to use which?"
        ]
    },
    {
        topic: "Computer Networks",
        icon: "🌐",
        questions: [
            "Explain the OSI model and its layers",
            "What happens when you type a URL in browser?",
            "Difference between TCP and UDP?",
            "What is HTTP and HTTPS? How does SSL work?",
            "Explain DNS and how domain name resolution works"
        ]
    },
    {
        topic: "Object-Oriented Programming",
        icon: "🧩",
        questions: [
            "Explain the four pillars of OOP",
            "What is polymorphism? Give an example",
            "Difference between abstract class and interface?",
            "Explain SOLID principles",
            "What is dependency injection?"
        ]
    },
    {
        topic: "System Design Basics",
        icon: "🏗️",
        questions: [
            "How would you design a URL shortener?",
            "Explain load balancing and its types",
            "What is caching? Where would you use it?",
            "Explain horizontal vs vertical scaling",
            "What is a CDN and when to use it?"
        ]
    },
    {
        topic: "Web Technologies",
        icon: "🌐",
        questions: [
            "What is REST? Explain RESTful principles",
            "Difference between GET and POST?",
            "What are cookies and sessions?",
            "Explain CORS and why it exists",
            "What is JWT and how does it work?"
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
            window.location.href = 'http://localhost:3000/';
        });
    }

    // Initialize content
    displayChannels('all');
    displayTopics();
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

// Display Core Topics
function displayTopics() {
    const topicsList = document.getElementById('topicsList');
    topicsList.innerHTML = coreTopics.map(topic => `
    <div class="resource-card">
      <span class="resource-icon">${topic.icon}</span>
      <h3>${topic.title}</h3>
      <p>${topic.description}</p>
      <ul style="list-style: none; padding: 0; margin: 16px 0;">
        ${topic.concepts.map(concept => `
          <li style="color: #718096; font-size: 13px; padding: 4px 0; padding-left: 18px; position: relative;">
            <span style="position: absolute; left: 0; color: #667eea;">✓</span>
            ${concept}
          </li>
        `).join('')}
      </ul>
      <a href="${topic.link}" target="_blank" class="resource-link">Learn More</a>
    </div>
  `).join('');
}

// Display Interview Questions
function displayQuestions() {
    const questionsList = document.getElementById('questionsList');
    questionsList.innerHTML = interviewQuestions.map(q => `
    <div class="note-card">
      <h3><span class="note-icon">${q.icon}</span>${q.topic}</h3>
      <ul>
        ${q.questions.map(question => `<li>${question}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}
