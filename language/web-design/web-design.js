// Web Design Page JavaScript

// YouTube Channels Data
const youtubeChannels = [
    {
        name: "The Futur",
        language: "english",
        description: "Design thinking, business strategy, and creative insights",
        url: "https://www.youtube.com/@thefutur"
    },
    {
        name: "DesignCourse",
        language: "english",
        description: "UI/UX design, web design, and graphic design tutorials",
        url: "https://www.youtube.com/@DesignCourse"
    },
    {
        name: "Flux",
        language: "english",
        description: "Modern web design and development tutorials",
        url: "https://www.youtube.com/@FluxWithRanSegall"
    },
    {
        name: "CharliMarieTV",
        language: "english",
        description: "Design career advice and real-world design work",
        url: "https://www.youtube.com/@charlimarieTV"
    },
    {
        name: "Thapa Technical",
        language: "hindi",
        description: "Web design and development tutorials in Hindi",
        url: "https://www.youtube.com/@ThapaTechnical"
    },
    {
        name: "CodeWithHarry",
        language: "hindi",
        description: "Complete web design course in Hindi",
        url: "https://www.youtube.com/@CodeWithHarry"
    },
    {
        name: "Diseño Web en Español",
        language: "spanish",
        description: "Tutoriales completos de diseño web",
        url: "https://www.youtube.com/@FalconMasters"
    },
    {
        name: "Falcon Masters",
        language: "spanish",
        description: "Diseño y desarrollo web profesional",
        url: "https://www.youtube.com/@FalconMasters"
    },
    {
        name: "Grafikart.fr",
        language: "french",
        description: "Tutoriels de design et développement web",
        url: "https://www.youtube.com/@grafikart"
    },
    {
        name: "Coding Lab",
        language: "german",
        description: "Webdesign und Frontend-Entwicklung",
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
                title: `${query} - Smashing Magazine`,
                description: `Comprehensive guide to ${query} with modern best practices and examples.`,
                url: `https://www.smashingmagazine.com/?s=${query}`
            },
            {
                title: `Web Design ${query} - CSS-Tricks`,
                description: `In-depth tutorials and articles about ${query} for web designers.`,
                url: `https://css-tricks.com/?s=${query}`
            },
            {
                title: `${query} Tutorial - A List Apart`,
                description: `Expert insights on ${query} in web design and development.`,
                url: `https://alistapart.com/search/?q=${query}`
            },
            {
                title: `${query} - Web Designer Depot`,
                description: `Creative inspiration and practical tips for ${query}.`,
                url: `https://www.webdesignerdepot.com/?s=${query}`
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
            <title>Web Design Notes</title>
            <style>
                body {
                    font-family: 'Inter', Arial, sans-serif;
                    padding: 2rem;
                    max-width: 800px;
                    margin: 0 auto;
                    line-height: 1.6;
                }
                h1 {
                    color: #ff6b6b;
                    border-bottom: 3px solid #4ecdc4;
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
            <h1>Web Design Notes</h1>
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
