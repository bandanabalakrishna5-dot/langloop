// Machine Learning Page JavaScript

// YouTube Channels Data
const youtubeChannels = [
    {
        name: "3Blue1Brown",
        language: "english",
        description: "Mathematical foundations of ML and neural networks visualized",
        url: "https://www.youtube.com/@3blue1brown"
    },
    {
        name: "Sentdex",
        language: "english",
        description: "Python programming for machine learning and AI",
        url: "https://www.youtube.com/@sentdex"
    },
    {
        name: "Two Minute Papers",
        language: "english",
        description: "Latest AI and ML research papers explained",
        url: "https://www.youtube.com/@TwoMinutePapers"
    },
    {
        name: "StatQuest with Josh Starmer",
        language: "english",
        description: "Statistics and machine learning concepts made simple",
        url: "https://www.youtube.com/@statquest"
    },
    {
        name: "Andrej Karpathy",
        language: "english",
        description: "Deep learning and neural networks from Tesla's AI director",
        url: "https://www.youtube.com/@AndrejKarpathy"
    },
    {
        name: "Krish Naik",
        language: "hindi",
        description: "Complete machine learning and AI courses in Hindi/English",
        url: "https://www.youtube.com/@krishnaik06"
    },
    {
        name: "CampusX",
        language: "hindi",
        description: "Data science and machine learning in Hindi",
        url: "https://www.youtube.com/@campusx-official"
    },
    {
        name: "CodeWithHarry",
        language: "hindi",
        description: "Machine learning tutorials in Hindi",
        url: "https://www.youtube.com/@CodeWithHarry"
    },
    {
        name: "Dot CSV",
        language: "spanish",
        description: "Inteligencia artificial y machine learning en español",
        url: "https://www.youtube.com/@DotCSV"
    },
    {
        name: "Machine Learnia",
        language: "french",
        description: "Cours de machine learning en français",
        url: "https://www.youtube.com/@MachineLearnia"
    },
    {
        name: "Coding Lab",
        language: "german",
        description: "KI und Machine Learning auf Deutsch",
        url: "https://www.youtube.com/@CodingLabYT"
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

    // Simulated search results
    setTimeout(() => {
        const mockResults = [
            {
                title: `${query} - Towards Data Science`,
                description: `Comprehensive articles and tutorials on ${query} for machine learning.`,
                url: `https://towardsdatascience.com/search?q=${query}`
            },
            {
                title: `${query} - Machine Learning Mastery`,
                description: `Step-by-step tutorials on ${query} with Python examples.`,
                url: `https://machinelearningmastery.com/?s=${query}`
            },
            {
                title: `${query} - Papers with Code`,
                description: `Latest research papers and implementations for ${query}.`,
                url: `https://paperswithcode.com/search?q=${query}`
            },
            {
                title: `${query} - Kaggle`,
                description: `Notebooks, datasets, and competitions related to ${query}.`,
                url: `https://www.kaggle.com/search?q=${query}`
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
            <title>Machine Learning Notes</title>
            <style>
                body {
                    font-family: 'Inter', Arial, sans-serif;
                    padding: 2rem;
                    max-width: 800px;
                    margin: 0 auto;
                    line-height: 1.6;
                }
                h1 {
                    color: #00d4ff;
                    border-bottom: 3px solid #7c3aed;
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
            <h1>Machine Learning Notes</h1>
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
