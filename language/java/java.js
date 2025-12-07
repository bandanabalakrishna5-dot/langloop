// Java Page JavaScript

// YouTube Channels Data
const youtubeChannels = [
    {
        name: "Programming with Mosh",
        language: "english",
        description: "Complete Java programming course for beginners",
        url: "https://www.youtube.com/@programmingwithmosh"
    },
    {
        name: "Telusko",
        language: "english",
        description: "Java tutorials, Spring Boot, and advanced Java concepts",
        url: "https://www.youtube.com/@Telusko"
    },
    {
        name: "Coding with John",
        language: "english",
        description: "Clear Java tutorials and Spring framework guides",
        url: "https://www.youtube.com/@CodingWithJohn"
    },
    {
        name: "Amigoscode",
        language: "english",
        description: "Modern Java development with Spring Boot and microservices",
        url: "https://www.youtube.com/@amigoscode"
    },
    {
        name: "CodeWithHarry",
        language: "hindi",
        description: "Complete Java course in Hindi for beginners",
        url: "https://www.youtube.com/@CodeWithHarry"
    },
    {
        name: "Apna College",
        language: "hindi",
        description: "Java programming and DSA in Hindi",
        url: "https://www.youtube.com/@ApnaCollegeOfficial"
    },
    {
        name: "Saurabh Shukla",
        language: "hindi",
        description: "In-depth Java tutorials in Hindi",
        url: "https://www.youtube.com/@SaurabhShuklaClasses"
    },
    {
        name: "Programming Knowledge",
        language: "english",
        description: "Java basics to advanced programming concepts",
        url: "https://www.youtube.com/@ProgrammingKnowledge"
    },
    {
        name: "pildorasinformaticas",
        language: "spanish",
        description: "Curso completo de Java en español",
        url: "https://www.youtube.com/@pildorasinformaticas"
    },
    {
        name: "mitocode",
        language: "spanish",
        description: "Java, Spring Boot y desarrollo enterprise",
        url: "https://www.youtube.com/@mitocode"
    },
    {
        name: "FormationVidéo",
        language: "french",
        description: "Cours complet de Java en français",
        url: "https://www.youtube.com/@FormationVideo8"
    },
    {
        name: "Programmieren lernen",
        language: "german",
        description: "Java Programmierung auf Deutsch",
        url: "https://www.youtube.com/@programmierenlernen1844"
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

    // Initialize YouTube channels
    displayChannels('all');

    // Language filter
    const languageDropdown = document.getElementById('language');
    languageDropdown.addEventListener('change', (e) => {
        displayChannels(e.target.value);
    });

    // Search functionality
    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', searchNotes);

    // PDF conversion
    const convertPdfBtn = document.getElementById('convertPdfBtn');
    convertPdfBtn.addEventListener('click', convertToPDF);
});

// Display YouTube Channels
function displayChannels(language) {
    const channelsList = document.getElementById('channelsList');
    const filteredChannels = language === 'all'
        ? youtubeChannels
        : youtubeChannels.filter(channel => channel.language === language);

    if (filteredChannels.length === 0) {
        channelsList.innerHTML = '<p style="text-align: center; color: #718096;">No channels found for this language.</p>';
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

// Search Notes Function
function searchNotes() {
    const query = document.getElementById('searchQuery').value.trim();
    const resultsContainer = document.getElementById('searchResults');

    if (!query) {
        resultsContainer.innerHTML = '<p style="color: #e53e3e; padding: 1rem;">Please enter a search query.</p>';
        return;
    }

    // Show loading state
    resultsContainer.innerHTML = '<p style="padding: 1rem;">Searching for notes...</p>';

    // Simulated search results (in real app, this would be an API call)
    setTimeout(() => {
        const mockResults = [
            {
                title: `Java ${query} - Oracle Documentation`,
                description: `Official Java documentation for ${query} with detailed API reference.`,
                url: `https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/package-summary.html`
            },
            {
                title: `${query} Tutorial - Baeldung`,
                description: `Comprehensive guide to ${query} in Java with code examples and best practices.`,
                url: `https://www.baeldung.com/?s=${query}`
            },
            {
                title: `${query} - GeeksforGeeks`,
                description: `Learn about ${query} in Java with examples and explanations.`,
                url: `https://www.geeksforgeeks.org/?s=${query}+java`
            },
            {
                title: `Java ${query} - JavaPoint`,
                description: `Detailed tutorial on ${query} with code snippets and examples.`,
                url: `https://www.javatpoint.com/java-tutorial`
            },
            {
                title: `${query} - W3Schools Java`,
                description: `Interactive tutorial on ${query} in Java.`,
                url: `https://www.w3schools.com/java/`
            }
        ];

        resultsContainer.innerHTML = mockResults.map(result => `
            <div class="result-item">
                <h4>${result.title}</h4>
                <p>${result.description}</p>
                <a href="${result.url}" target="_blank" class="result-link">View Resource →</a>
            </div>
        `).join('');
    }, 1000);
}

// Convert to PDF Function
function convertToPDF() {
    const content = document.getElementById('notesContent').value.trim();

    if (!content) {
        alert('Please enter some content to convert to PDF.');
        return;
    }

    // Create a simple PDF using browser print functionality
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Java Notes</title>
            <style>
                body {
                    font-family: 'Inter', Arial, sans-serif;
                    padding: 2rem;
                    max-width: 800px;
                    margin: 0 auto;
                    line-height: 1.6;
                }
                h1 {
                    color: #f89820;
                    border-bottom: 3px solid #5382a1;
                    padding-bottom: 0.5rem;
                }
                pre {
                    background: #f7fafc;
                    padding: 1rem;
                    border-radius: 8px;
                    white-space: pre-wrap;
                    word-wrap: break-word;
                }
            </style>
        </head>
        <body>
            <h1>Java Notes</h1>
            <pre>${content}</pre>
        </body>
        </html>
    `);
    printWindow.document.close();

    // Wait for content to load then trigger print
    setTimeout(() => {
        printWindow.print();
    }, 250);
}

// Add enter key support for search
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchQuery');
    if (searchInput) {
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                searchNotes();
            }
        });
    }
});
