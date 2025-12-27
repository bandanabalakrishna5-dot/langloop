// Data Science Page JavaScript

const youtubeChannels = [
    {
        name: "StatQuest with Josh Starmer",
        language: "english",
        description: "Statistics and machine learning concepts explained clearly",
        url: "https://www.youtube.com/@statquest"
    },
    {
        name: "3Blue1Brown",
        language: "english",
        description: "Mathematical concepts with beautiful visualizations",
        url: "https://www.youtube.com/@3blue1brown"
    },
    {
        name: "Data School",
        language: "english",
        description: "Data science tutorials with Python and pandas",
        url: "https://www.youtube.com/@dataschool"
    },
    {
        name: "Sentdex",
        language: "english",
        description: "Python programming for data science and ML",
        url: "https://www.youtube.com/@sentdex"
    },
    {
        name: "Krish Naik",
        language: "hindi",
        description: "Complete data science course in Hindi",
        url: "https://www.youtube.com/@krishnaik06"
    },
    {
        name: "Campusx",
        language: "hindi",
        description: "Data science and machine learning in Hindi",
        url: "https://www.youtube.com/@campusx-official"
    },
    {
        name: "Dot CSV",
        language: "spanish",
        description: "Ciencia de datos e inteligencia artificial",
        url: "https://www.youtube.com/@DotCSV"
    },
    {
        name: "Machine Learning TV",
        language: "french",
        description: "Science des données en français",
        url: "https://www.youtube.com/@machinelearningtv"
    },
    {
        name: "Data Science Tutorials",
        language: "german",
        description: "Datenwissenschaft auf Deutsch",
        url: "https://www.youtube.com/@datasciencetutorials"
    }
];

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

    const languageDropdown = document.getElementById('language');
    languageDropdown.addEventListener('change', (e) => {
        displayChannels(e.target.value);
    });

    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', searchNotes);

    const convertPdfBtn = document.getElementById('convertPdfBtn');
    convertPdfBtn.addEventListener('click', convertToPDF);
});

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

function searchNotes() {
    const query = document.getElementById('searchQuery').value.trim();
    const resultsContainer = document.getElementById('searchResults');

    if (!query) {
        resultsContainer.innerHTML = '<p style="color: #e53e3e; padding: 1rem;">Please enter a search query.</p>';
        return;
    }

    resultsContainer.innerHTML = '<p style="padding: 1rem;">Searching for notes...</p>';

    setTimeout(() => {
        const mockResults = [
            {
                title: `${query} - Kaggle Learn`,
                description: `Learn ${query} with interactive tutorials and datasets.`,
                url: `https://www.kaggle.com/learn`
            },
            {
                title: `Data Science ${query} - Coursera`,
                description: `Professional courses on ${query}.`,
                url: `https://www.coursera.org/search?query=${query}`
            },
            {
                title: `${query} Tutorial - DataCamp`,
                description: `Interactive ${query} tutorials.`,
                url: `https://www.datacamp.com/search?q=${query}`
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

function convertToPDF() {
    const content = document.getElementById('notesContent').value.trim();

    if (!content) {
        alert('Please enter some content to convert to PDF.');
        return;
    }

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Data Science Notes</title>
            <style>
                body {
                    font-family: 'Inter', Arial, sans-serif;
                    padding: 2rem;
                    max-width: 800px;
                    margin: 0 auto;
                    line-height: 1.6;
                }
                h1 {
                    color: #9c27b0;
                    border-bottom: 3px solid #e91e63;
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
            <h1>Data Science Notes</h1>
            <pre>${content}</pre>
        </body>
        </html>
    `);
    printWindow.document.close();

    setTimeout(() => {
        printWindow.print();
    }, 250);
}

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
