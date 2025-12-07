// Roadmap Data
const roadmaps = {
    java: [
        {
            title: "Java Basics",
            icon: "☕",
            items: [
                "Install JDK & IDE (IntelliJ)",
                "Variables & Data Types",
                "Operators & Control Flow (if/else, loops)",
                "Arrays & Strings",
                "Methods & Scope"
            ]
        },
        {
            title: "Object-Oriented Programming (OOP)",
            icon: "🧩",
            items: [
                "Classes & Objects",
                "Inheritance & Polymorphism",
                "Encapsulation & Abstraction",
                "Interfaces & Abstract Classes",
                "Constructors & 'this' keyword"
            ]
        },
        {
            title: "Core Java Advanced",
            icon: "⚙️",
            items: [
                "Exception Handling (try/catch)",
                "Generics",
                "Collections Framework (List, Set, Map)",
                "Java Streams API (Functional Programming)",
                "Multithreading & Concurrency"
            ]
        },
        {
            title: "Build Tools & Databases",
            icon: "🏗️",
            items: [
                "Maven or Gradle",
                "JDBC Basics",
                "SQL Fundamentals",
                "JUnit (Testing)",
                "Git & GitHub"
            ]
        },
        {
            title: "Spring Framework (Backend)",
            icon: "🍃",
            items: [
                "Spring Boot Basics",
                "Dependency Injection (IoC)",
                "RESTful APIs",
                "Spring Data JPA (Hibernate)",
                "Spring Security (Auth)"
            ]
        }
    ],
    python: [
        {
            title: "Python Fundamentals",
            icon: "🐍",
            items: [
                "Install Python & IDLE/VS Code",
                "Variables, Numbers, Strings",
                "Lists, Tuples, Sets, Dictionaries",
                "Control Flow (If, For, While)",
                "Functions & Modules"
            ]
        },
        {
            title: "Advanced Python",
            icon: "🧠",
            items: [
                "Object Oriented Programming",
                "File Handling (Read/Write)",
                "Decorators & Generators",
                "Error Handling (Try/Except)",
                "Pip & Virtual Environments"
            ]
        },
        {
            title: "Data Science Path (Optional)",
            icon: "📊",
            items: [
                "NumPy (Numerical Data)",
                "Pandas (Data Analysis)",
                "Matplotlib/Seaborn (Visualization)",
                "Scikit-Learn (Machine Learning)",
                "Jupyter Notebooks"
            ]
        },
        {
            title: "Web Development Path (Optional)",
            icon: "🌐",
            items: [
                "Flask (Micro-framework)",
                "Django (Full-stack)",
                "REST APIs",
                "Database Integration (SQLAlchemy)",
                "Deployment (Heroku/Render)"
            ]
        }
    ],
    javascript: [
        {
            title: "JS Foundations",
            icon: "📜",
            items: [
                "Variables (let, const, var)",
                "Data Types & Operators",
                "Functions (Arrow functions)",
                "Control Structures",
                "DOM Manipulation"
            ]
        },
        {
            title: "Modern JS (ES6+)",
            icon: "✨",
            items: [
                "Destructuring & Spread Operator",
                "Template Literals",
                "Modules (Import/Export)",
                "Promises & Async/Await",
                "Fetch API & JSON"
            ]
        },
        {
            title: "Frontend Frameworks",
            icon: "⚛️",
            items: [
                "React / Vue / Angular",
                "Component Life Cycle",
                "State Management (Redux/Context)",
                "Routing",
                "Tailwind CSS / Styled Components"
            ]
        },
        {
            title: "Backend (Node.js)",
            icon: "🟢",
            items: [
                "Node.js Runtime",
                "Express.js Framework",
                "REST API Design",
                "MongoDB / PostgreSQL",
                "Authentication (JWT)"
            ]
        }
    ]
    // Add more languages as needed
};

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('roadmapSearch');
    const displayArea = document.getElementById('roadmapDisplay');

    if (searchInput && displayArea) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.toLowerCase().trim();
                renderRoadmap(query);
            }
        });

        // Autocomplete Logic
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const suggestionsEl = document.getElementById('roadmapSuggestions');

            if (!suggestionsEl) return;

            if (query.length === 0) {
                suggestionsEl.classList.remove('visible');
                return;
            }

            // Filter roadmaps
            const matches = Object.entries(roadmaps).filter(([key, data]) => {
                // Search by key (language name) or specific items
                const keyMatch = key.includes(query);
                const titleMatch = data.some(section => section.title.toLowerCase().includes(query));
                return keyMatch || titleMatch;
            });

            if (matches.length > 0) {
                const html = matches.slice(0, 5).map(([key, data]) => {
                    // Get icon from first section or default
                    const icon = data[0]?.icon || '🗺️';
                    // Capitalize key for display
                    const displayName = key.charAt(0).toUpperCase() + key.slice(1);

                    return `
                    <div class="suggestion-item" data-lang="${key}">
                        <span>${icon}</span>
                        <span>${displayName}</span>
                    </div>
                `;
                }).join('');

                suggestionsEl.innerHTML = html;
                suggestionsEl.classList.add('visible');

                // Add click events
                suggestionsEl.querySelectorAll('.suggestion-item').forEach(item => {
                    item.addEventListener('click', () => {
                        const langKey = item.dataset.lang;
                        // Format name nice
                        searchInput.value = langKey.charAt(0).toUpperCase() + langKey.slice(1);
                        suggestionsEl.classList.remove('visible');
                        renderRoadmap(langKey);
                    });
                });
            } else {
                suggestionsEl.classList.remove('visible');
            }
        });

        // Hide suggestions on outside click
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-input-wrapper')) {
                const suggestionsEl = document.getElementById('roadmapSuggestions');
                if (suggestionsEl) suggestionsEl.classList.remove('visible');
            }
        });
    }

    function renderRoadmap(language) {
        if (!displayArea) return;

        displayArea.innerHTML = ''; // Clear previous

        if (!language) {
            displayArea.innerHTML = `
                <div class="empty-state">
                    <span class="empty-state-icon">🔍</span>
                    <h3>Type a language to begin</h3>
                    <p>Try searching for "Java", "Python", or "JavaScript"</p>
                </div>
            `;
            return;
        }

        const data = roadmaps[language] || roadmaps[Object.keys(roadmaps).find(k => k.includes(language))];

        if (!data) {
            displayArea.innerHTML = `
                <div class="empty-state">
                    <span class="empty-state-icon">🚫</span>
                    <h3>Roadmap not found</h3>
                    <p>We currently don't have a roadmap for "${language}". Try "Java" or "Python".</p>
                </div>
            `;
            return;
        }

        // Create Timeline HTML
        const timeline = document.createElement('div');
        timeline.className = 'timeline';

        data.forEach((step, index) => {
            const item = document.createElement('div');
            item.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;

            item.innerHTML = `
                <div class="content">
                    <h3>${step.icon || '📌'} ${step.title}</h3>
                    <ul>
                        ${step.items.map(i => `<li>${i}</li>`).join('')}
                    </ul>
                </div>
            `;

            timeline.appendChild(item);
        });

        displayArea.appendChild(timeline);

        // Animate items appearing
        const items = timeline.querySelectorAll('.timeline-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('show');
            }, index * 200 + 100); // 200ms delay per item
        });
    }

    // Initial Empty State
    renderRoadmap('');
});
