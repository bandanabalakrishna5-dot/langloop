// Web Development Page JavaScript

// YouTube Channels Data
const youtubeChannels = [
    {
        name: "Traversy Media",
        language: "english",
        description: "Comprehensive web development tutorials and crash courses",
        url: "https://www.youtube.com/@TraversyMedia"
    },
    {
        name: "freeCodeCamp.org",
        language: "english",
        description: "Full-length courses on web development and programming",
        url: "https://www.youtube.com/@freecodecamp"
    },
    {
        name: "Web Dev Simplified",
        language: "english",
        description: "Simplified tutorials on modern web development",
        url: "https://www.youtube.com/@WebDevSimplified"
    },
    {
        name: "The Net Ninja",
        language: "english",
        description: "JavaScript, React, Node.js, and modern web dev tutorials",
        url: "https://www.youtube.com/@NetNinja"
    },
    {
        name: "Fireship",
        language: "english",
        description: "Quick, high-intensity web development tutorials",
        url: "https://www.youtube.com/@Fireship"
    },
    {
        name: "CodeWithHarry",
        language: "hindi",
        description: "Complete web development courses in Hindi",
        url: "https://www.youtube.com/@CodeWithHarry"
    },
    {
        name: "Thapa Technical",
        language: "hindi",
        description: "Full-stack web development tutorials in Hindi",
        url: "https://www.youtube.com/@ThapaTechnical"
    },
    {
        name: "Apna College",
        language: "hindi",
        description: "Web development and programming in Hindi",
        url: "https://www.youtube.com/@ApnaCollegeOfficial"
    },
    {
        name: "Fazt Code",
        language: "spanish",
        description: "Desarrollo web completo en español",
        url: "https://www.youtube.com/@FaztCode"
    },
    {
        name: "midudev",
        language: "spanish",
        description: "Tutoriales de React, JavaScript y desarrollo web",
        url: "https://www.youtube.com/@midudev"
    },
    {
        name: "Grafikart.fr",
        language: "french",
        description: "Développement web moderne et JavaScript",
        url: "https://www.youtube.com/@grafikart"
    },
    {
        name: "Coding Lab",
        language: "german",
        description: "Webentwicklung und Frontend-Programmierung",
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
                title: `${query} - MDN Web Docs`,
                description: `Comprehensive documentation for ${query} from Mozilla Developer Network.`,
                url: `https://developer.mozilla.org/en-US/search?q=${query}`
            },
            {
                title: `${query} Tutorial - W3Schools`,
                description: `Interactive tutorials and examples for ${query}.`,
                url: `https://www.w3schools.com/search/?q=${query}`
            },
            {
                title: `${query} - JavaScript.info`,
                description: `Modern JavaScript tutorial covering ${query} in detail.`,
                url: `https://javascript.info/?s=${query}`
            },
            {
                title: `${query} Guide - freeCodeCamp`,
                description: `Learn ${query} with practical examples and exercises.`,
                url: `https://www.freecodecamp.org/news/search/?query=${query}`
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
            <title>Web Development Notes</title>
            <style>
                body {
                    font-family: 'Inter', Arial, sans-serif;
                    padding: 2rem;
                    max-width: 800px;
                    margin: 0 auto;
                    line-height: 1.6;
                }
                h1 {
                    color: #61dafb;
                    border-bottom: 3px solid #667eea;
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
            <h1>Web Development Notes</h1>
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
