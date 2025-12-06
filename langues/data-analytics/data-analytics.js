// Data Analytics Page JavaScript

// YouTube Channels Data
const youtubeChannels = [
    {
        name: "Alex The Analyst",
        language: "english",
        description: "Data analytics tutorials, SQL, Tableau, and Power BI projects",
        url: "https://www.youtube.com/@AlexTheAnalyst"
    },
    {
        name: "Data Professor",
        language: "english",
        description: "Data science and analytics tutorials with Python and R",
        url: "https://www.youtube.com/@DataProfessor"
    },
    {
        name: "Ken Jee",
        language: "english",
        description: "Data science career advice and analytics projects",
        url: "https://www.youtube.com/@KenJee_ds"
    },
    {
        name: "Luke Barousse",
        language: "english",
        description: "Data analytics career guidance and SQL tutorials",
        url: "https://www.youtube.com/@LukeBarousse"
    },
    {
        name: "Tableau Tim",
        language: "english",
        description: "Tableau tutorials and data visualization techniques",
        url: "https://www.youtube.com/@TableauTim"
    },
    {
        name: "Krish Naik",
        language: "hindi",
        description: "Complete data analytics and machine learning in Hindi",
        url: "https://www.youtube.com/@krishnaik06"
    },
    {
        name: "Codebasics",
        language: "hindi",
        description: "Data analytics, Power BI, and SQL tutorials in Hindi",
        url: "https://www.youtube.com/@codebasics"
    },
    {
        name: "WsCube Tech",
        language: "hindi",
        description: "Data analytics and business intelligence tutorials",
        url: "https://www.youtube.com/@WsCubeTech"
    },
    {
        name: "Datos y Analytics",
        language: "spanish",
        description: "Análisis de datos y visualización en español",
        url: "https://www.youtube.com/@DatosyAnalytics"
    },
    {
        name: "Rafa Gonzalez Gouveia",
        language: "spanish",
        description: "Power BI y análisis de datos",
        url: "https://www.youtube.com/@RafaelGonzalezGouveia"
    },
    {
        name: "Data Freak",
        language: "french",
        description: "Analyse de données et Business Intelligence en français",
        url: "https://www.youtube.com/@DataFreak"
    },
    {
        name: "Datenanalyse mit Python",
        language: "german",
        description: "Datenanalyse und Visualisierung auf Deutsch",
        url: "https://www.youtube.com/@DatenanalysemitPython"
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
                title: `${query} - Kaggle Learn`,
                description: `Learn ${query} with interactive tutorials and real-world datasets.`,
                url: `https://www.kaggle.com/learn`
            },
            {
                title: `Data Analytics ${query} - Coursera`,
                description: `Professional courses on ${query} from top universities.`,
                url: `https://www.coursera.org/search?query=${query}`
            },
            {
                title: `${query} Tutorial - DataCamp`,
                description: `Interactive ${query} tutorials with hands-on exercises.`,
                url: `https://www.datacamp.com/search?q=${query}`
            },
            {
                title: `${query} Guide - Analytics Vidhya`,
                description: `Comprehensive guide to ${query} with practical examples.`,
                url: `https://www.analyticsvidhya.com/?s=${query}`
            },
            {
                title: `${query} - Towards Data Science`,
                description: `Articles and tutorials on ${query} from data professionals.`,
                url: `https://towardsdatascience.com/search?q=${query}`
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
            <title>Data Analytics Notes</title>
            <style>
                body {
                    font-family: 'Inter', Arial, sans-serif;
                    padding: 2rem;
                    max-width: 800px;
                    margin: 0 auto;
                    line-height: 1.6;
                }
                h1 {
                    color: #1e88e5;
                    border-bottom: 3px solid #ffa726;
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
            <h1>Data Analytics Notes</h1>
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
