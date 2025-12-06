// DSA Interview Prep Page JavaScript

// YouTube Channels Data for DSA
const youtubeChannels = [
    {
        name: "NeetCode",
        language: "english",
        description: "LeetCode solutions and patterns explained clearly",
        url: "https://www.youtube.com/@NeetCode"
    },
    {
        name: "Abdul Bari",
        language: "english",
        description: "Algorithms explained with animations and clarity",
        url: "https://www.youtube.com/@abdul_bari"
    },
    {
        name: "William Fiset",
        language: "english",
        description: "Data structures and algorithms visualized",
        url: "https://www.youtube.com/@WilliamFiset-videos"
    },
    {
        name: "take U forward",
        language: "english",
        description: "Complete DSA placement course by Striver",
        url: "https://www.youtube.com/@takeUforward"
    },
    {
        name: "Aditya Verma",
        language: "hindi",
        description: "DSA patterns and Dynamic Programming in Hindi",
        url: "https://www.youtube.com/@TheAdityaVerma"
    },
    {
        name: "CodeHelp - by Babbar",
        language: "hindi",
        description: "Complete DSA course in Hindi by Love Babbar",
        url: "https://www.youtube.com/@CodeHelp"
    },
    {
        name: "Apna College",
        language: "hindi",
        description: "DSA and interview preparation in Hindi",
        url: "https://www.youtube.com/@ApnaCollegeOfficial"
    },
    {
        name: "Jenny's Lectures",
        language: "hindi",
        description: "Data structures and algorithms explained",
        url: "https://www.youtube.com/@JennyslecturesCSIT"
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
    if (languageDropdown) {
        languageDropdown.addEventListener('change', (e) => {
            displayChannels(e.target.value);
        });
    }
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
