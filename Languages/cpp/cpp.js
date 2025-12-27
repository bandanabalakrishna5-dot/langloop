// C++ Page JavaScript

// YouTube Channels Data
const youtubeChannels = [
    {
        name: "The Cherno",
        language: "english",
        description: "High-quality C++ and Game Engine development tutorials (Game Dev Series)",
        url: "https://www.youtube.com/@TheCherno"
    },
    {
        name: "CodeBeauty",
        language: "english",
        description: "Interactive C++ tutorials with visual explanations",
        url: "https://www.youtube.com/@CodeBeauty"
    },
    {
        name: "C++ Weekly",
        language: "english",
        description: "Short, high-quality videos on C++ features by Jason Turner",
        url: "https://www.youtube.com/@Lefticus1"
    },
    {
        name: "CodeWithHarry",
        language: "hindi",
        description: "Complete C++ course in Hindi including DSA",
        url: "https://www.youtube.com/playlist?list=PLu0W_9lII9agp6E9fMo9KxCBMFk82ZjXm"
    },
    {
        name: "Apna College",
        language: "hindi",
        description: "C++ and Data Structures & Algorithms placement course",
        url: "https://www.youtube.com/@ApnaCollegeOfficial"
    },
    {
        name: "Jenny's Lectures",
        language: "hindi",
        description: "C++ Programming and DSA explained simply",
        url: "https://www.youtube.com/@JennyslecturesCSIT"
    },
    {
        name: "Píldoras Informáticas",
        language: "spanish",
        description: "Curso completo de C++ en español",
        url: "https://www.youtube.com/@pildorasinformaticas"
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

    const langId = 'cpp';

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

    // Simulated search results
    setTimeout(() => {
        const mockResults = [
            {
                title: `C++ ${query} - GeeksforGeeks`,
                description: `Detailed tutorial on ${query} in C++ with examples.`,
                url: `https://www.geeksforgeeks.org/?s=${query}+cpp`
            },
            {
                title: `${query} - cppreference.com`,
                description: `Technical documentation for ${query} from the standard C++ reference.`,
                url: `https://en.cppreference.com/mwiki/index.php?search=${query}`
            },
            {
                title: `Learn C++ - ${query}`,
                description: `Comprehensive guide to understanding ${query}.`,
                url: `https://www.learncpp.com/?s=${query}`
            },
            {
                title: `C++ ${query} - W3Schools`,
                description: `Beginner friendly examples for ${query}.`,
                url: `https://www.w3schools.com/cpp/cpp_${query.toLowerCase()}.asp`
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
            <title>C++ Notes</title>
            <style>
                body {
                    font-family: 'Inter', Arial, sans-serif;
                    padding: 2rem;
                    max-width: 800px;
                    margin: 0 auto;
                    line-height: 1.6;
                }
                h1 {
                    color: #00599C;
                    border-bottom: 3px solid #659ad2;
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
            <h1>C++ Notes</h1>
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