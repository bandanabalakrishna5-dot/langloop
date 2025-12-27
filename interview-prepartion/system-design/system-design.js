// System Design Interview Preparation JavaScript

// YouTube Channels Data
const youtubeChannels = [
    {
        name: "Gaurav Sen",
        language: "english",
        description: "System design concepts explained with real-world examples",
        url: "https://www.youtube.com/@gkcs"
    },
    {
        name: "System Design Interview",
        language: "english",
        description: "Comprehensive system design interview preparation",
        url: "https://www.youtube.com/@SystemDesignInterview"
    },
    {
        name: "Tech Dummies Narendra L",
        language: "english",
        description: "System design and architecture tutorials",
        url: "https://www.youtube.com/@TechDummiesNarendraL"
    },
    {
        name: "ByteByteGo",
        language: "english",
        description: "Visual system design explanations by Alex Xu",
        url: "https://www.youtube.com/@ByteByteGo"
    },
    {
        name: "Exponent",
        language: "english",
        description: "System design mock interviews and tips",
        url: "https://www.youtube.com/@tryexponent"
    },
    {
        name: "sudoCODE",
        language: "hindi",
        description: "System design in Hindi by Yogita Sharma",
        url: "https://www.youtube.com/@sudocode"
    },
    {
        name: "Concept && Coding - Shreyans",
        language: "hindi",
        description: "Low level and high level design in Hindi",
        url: "https://www.youtube.com/@ConceptandCoding"
    },
    {
        name: "Coding Simplified",
        language: "hindi",
        description: "System design interview preparation in Hindi",
        url: "https://www.youtube.com/@CodingSimplified"
    },
    {
        name: "Think Software",
        language: "hindi",
        description: "Software design and architecture in Hindi",
        url: "https://www.youtube.com/@ThinkSoftware"
    }
];

// Resources Data
const resources = [
    {
        icon: "🎯",
        title: "Load Balancing",
        description: "Distribute traffic across multiple servers for high availability and reliability",
        link: "https://aws.amazon.com/what-is/load-balancing/"
    },
    {
        icon: "💾",
        title: "Databases & Sharding",
        description: "SQL vs NoSQL, database partitioning, and horizontal scaling",
        link: "https://www.mongodb.com/databases"
    },
    {
        icon: "⚡",
        title: "Caching Strategies",
        description: "Redis, Memcached, cache invalidation, and CDN strategies",
        link: "https://aws.amazon.com/caching/"
    },
    {
        icon: "📨",
        title: "Message Queues",
        description: "RabbitMQ, Kafka, event-driven architecture",
        link: "https://aws.amazon.com/message-queue/"
    },
    {
        icon: "🔄",
        title: "Microservices",
        description: "Service-oriented architecture, API gateways, service mesh",
        link: "https://microservices.io/"
    },
    {
        icon: "📊",
        title: "Scalability Patterns",
        description: "Vertical vs horizontal scaling, auto-scaling, elasticity",
        link: "https://docs.microsoft.com/en-us/azure/architecture/patterns/"
    },
    {
        icon: "🔐",
        title: "Security & Authentication",
        description: "OAuth, JWT, API keys, rate limiting, DDoS protection",
        link: "https://auth0.com/docs"
    },
    {
        icon: "📈",
        title: "Monitoring & Logging",
        description: "Metrics, alerts, distributed tracing, observability",
        link: "https://prometheus.io/docs/introduction/overview/"
    },
    {
        icon: "🌐",
        title: "CAP Theorem",
        description: "Consistency, Availability, Partition tolerance trade-offs",
        link: "https://www.ibm.com/topics/cap-theorem"
    }
];

// Notes & Tips Data
const notes = [
    {
        icon: "💡",
        title: "Start with Requirements",
        tips: [
            "Clarify functional requirements (what the system should do)",
            "Define non-functional requirements (scalability, availability, consistency)",
            "Estimate scale: users, requests per second, data storage",
            "Identify key constraints and assumptions"
        ]
    },
    {
        icon: "🏗️",
        title: "High-Level Design",
        tips: [
            "Start with a simple architecture diagram",
            "Identify main components: clients, load balancers, servers, databases",
            "Show data flow between components",
            "Discuss trade-offs and alternatives"
        ]
    },
    {
        icon: "🔍",
        title: "Deep Dive Components",
        tips: [
            "Design database schema and data models",
            "Choose appropriate databases (SQL vs NoSQL)",
            "Plan for caching strategy",
            "Design API endpoints and communication protocols"
        ]
    },
    {
        icon: "📏",
        title: "Scale Calculations",
        tips: [
            "Calculate storage requirements (daily active users × data per user)",
            "Estimate bandwidth needs",
            "Plan for database sharding at scale",
            "Consider CDN for static content"
        ]
    },
    {
        icon: "⚖️",
        title: "Trade-offs to Discuss",
        tips: [
            "Consistency vs Availability (CAP theorem)",
            "Read-heavy vs Write-heavy workloads",
            "SQL vs NoSQL databases",
            "Synchronous vs Asynchronous processing",
            "Monolith vs Microservices"
        ]
    },
    {
        icon: "✅",
        title: "Common Design Patterns",
        tips: [
            "Publisher-Subscriber pattern for notifications",
            "Circuit Breaker for fault tolerance",
            "CQRS (Command Query Responsibility Segregation)",
            "Event Sourcing for audit trails",
            "Saga pattern for distributed transactions"
        ]
    },
    {
        icon: "🎓",
        title: "Interview Tips",
        tips: [
            "Always ask clarifying questions first",
            "Think out loud - explain your reasoning",
            "Start simple, then iterate and improve",
            "Discuss trade-offs for each decision",
            "Be prepared to dive deep into any component"
        ]
    },
    {
        icon: "📚",
        title: "Common System Design Questions",
        tips: [
            "Design URL Shortener (like bit.ly)",
            "Design Twitter/X feed system",
            "Design Instagram/Image sharing service",
            "Design Netflix/Video streaming platform",
            "Design Uber/Ride-sharing service",
            "Design WhatsApp/Messaging service"
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
    displayResources();
    displayNotes();

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
      <h3>${resource.title}</h3>
      <p>${resource.description}</p>
      <a href="${resource.link}" target="_blank" class="resource-link">Learn More</a>
    </div>
  `).join('');
}

// Display Notes
function displayNotes() {
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = notes.map(note => `
    <div class="note-card">
      <h3><span class="note-icon">${note.icon}</span>${note.title}</h3>
      <ul>
        ${note.tips.map(tip => `<li>${tip}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}
