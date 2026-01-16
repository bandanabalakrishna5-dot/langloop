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






