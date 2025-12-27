// Python Page JavaScript

// YouTube Channels Data
const youtubeChannels = [
    {
        name: "Corey Schafer",
        language: "english",
        description: "In-depth Python tutorials covering basics to advanced topics",
        url: "https://www.youtube.com/@coreyms"
    },
    {
        name: "Programming with Mosh",
        language: "english",
        description: "Clear and concise Python programming tutorials",
        url: "https://www.youtube.com/@programmingwithmosh"
    },
    {
        name: "Tech With Tim",
        language: "english",
        description: "Python projects, tutorials, and programming concepts",
        url: "https://www.youtube.com/@TechWithTim"
    },
    {
        name: "CodeWithHarry",
        language: "hindi",
        description: "Complete Python course in Hindi for beginners",
        url: "https://www.youtube.com/@CodeWithHarry"
    },
    {
        name: "Apna College",
        language: "hindi",
        description: "Python tutorials and DSA in Hindi",
        url: "https://www.youtube.com/@ApnaCollegeOfficial"
    },
    {
        name: "Jenny's Lectures",
        language: "hindi",
        description: "Python programming and computer science concepts",
        url: "https://www.youtube.com/@JennyslecturesCSIT"
    },
    {
        name: "pildorasinformaticas",
        language: "spanish",
        description: "Curso completo de Python en español",
        url: "https://www.youtube.com/@pildorasinformaticas"
    },
    {
        name: "Píldoras Informáticas",
        language: "spanish",
        description: "Tutoriales de Python desde cero",
        url: "https://www.youtube.com/@pildorasinformaticas"
    },
    {
        name: "Docstring",
        language: "french",
        description: "Apprendre Python en français",
        url: "https://www.youtube.com/@Docstring"
    },
    {
        name: "Programmieren lernen",
        language: "german",
        description: "Python Programmierung auf Deutsch",
        url: "https://www.youtube.com/@programmierenlernen1844"
    }
];

// Tab Switching
document.addEventListener('DOMContentLoaded', function () {
    // Back button functionality
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.location.href = '../../index.html';
        });
    }

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

    // Sidebar Logic
    const sidebar = document.getElementById('sidebar');
    const openSidebarBtn = document.getElementById('openSidebar');
    const closeSidebarBtn = document.getElementById('closeSidebar');

    if (openSidebarBtn) {
        openSidebarBtn.addEventListener('click', () => {
            sidebar.classList.add('active');
        });
    }

    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    }

    // Note Persistence Logic
    const mainNotebook = document.getElementById('mainNotebook');
    const sidebarNotes = document.getElementById('sidebarNotes');
    const saveMainBtn = document.getElementById('saveMainBtn');
    const saveSidebarBtn = document.getElementById('saveSidebarBtn');
    const mainStatus = document.getElementById('mainSaveStatus');
    const sidebarStatus = document.getElementById('sidebarStatus');

    const langId = 'python';

    // Load saved notes
    if (mainNotebook) mainNotebook.value = localStorage.getItem(`notes_${langId}_main`) || '';
    if (sidebarNotes) sidebarNotes.value = localStorage.getItem(`notes_${langId}_sidebar`) || '';

    const saveNotes = (type) => {
        if (type === 'main' && mainNotebook) {
            localStorage.setItem(`notes_${langId}_main`, mainNotebook.value);
            if (mainStatus) {
                mainStatus.innerText = 'All changes saved';
                mainStatus.style.color = '#48bb78';
            }
        } else if (type === 'sidebar' && sidebarNotes) {
            localStorage.setItem(`notes_${langId}_sidebar`, sidebarNotes.value);
            if (sidebarStatus) {
                sidebarStatus.innerText = 'Saved';
                sidebarStatus.style.color = '#48bb78';
            }
        }
    };

    if (mainNotebook) {
        mainNotebook.addEventListener('input', () => {
            if (mainStatus) {
                mainStatus.innerText = 'Saving...';
                mainStatus.style.color = '#718096';
            }
        });
    }

    if (sidebarNotes) {
        sidebarNotes.addEventListener('input', () => {
            if (sidebarStatus) {
                sidebarStatus.innerText = 'Saving...';
                sidebarStatus.style.color = '#718096';
            }
        });
    }

    if (saveMainBtn) saveMainBtn.addEventListener('click', () => saveNotes('main'));
    if (saveSidebarBtn) saveSidebarBtn.addEventListener('click', () => saveNotes('sidebar'));

    // Auto-save every 3 seconds
    setInterval(() => {
        saveNotes('main');
        saveNotes('sidebar');
    }, 3000);
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
                title: `Python ${query} - Official Documentation`,
                description: `Comprehensive guide to ${query} in Python from the official documentation.`,
                url: `https://docs.python.org/3/search.html?q=${query}`
            },
            {
                title: `${query} Tutorial - Real Python`,
                description: `Learn about ${query} with practical examples and best practices.`,
                url: `https://realpython.com/search?q=${query}`
            },
            {
                title: `${query} - GeeksforGeeks`,
                description: `Detailed explanation of ${query} with code examples.`,
                url: `https://www.geeksforgeeks.org/?s=${query}+python`
            },
            {
                title: `Python ${query} - W3Schools`,
                description: `Interactive tutorial on ${query} in Python.`,
                url: `https://www.w3schools.com/python/python_${query.toLowerCase()}.asp`
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
    const content = document.getElementById('pdfContentInput').value.trim();

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
            <title>Python Notes</title>
            <style>
                body {
                    font-family: 'Inter', Arial, sans-serif;
                    padding: 2rem;
                    max-width: 800px;
                    margin: 0 auto;
                    line-height: 1.6;
                }
                h1 {
                    color: #3776ab;
                    border-bottom: 3px solid #ffd43b;
                    padding-bottom: 0.5rem;
                }
                pre {
                    background: #f7fafc;
                    padding: 1rem;
                    border-radius: 8px;
                    white-space: pre-wrap;
                    word-wrap: break-word;
                    font-family: 'Courier New', Courier, monospace;
                }
            </style>
        </head>
        <body>
            <h1>Python Notes</h1>
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
