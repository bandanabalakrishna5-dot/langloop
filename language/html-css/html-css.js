// HTML & CSS Page JavaScript

const youtubeChannels = [
    {
        name: "Traversy Media",
        language: "english",
        description: "Web development tutorials including HTML & CSS",
        url: "https://www.youtube.com/@TraversyMedia"
    },
    {
        name: "Kevin Powell",
        language: "english",
        description: "CSS expert with in‑depth tutorials",
        url: "https://www.youtube.com/@KevinPowell"
    },
    {
        name: "Web Dev Simplified",
        language: "english",
        description: "Simplified web development concepts",
        url: "https://www.youtube.com/@WebDevSimplified"
    },
    {
        name: "freeCodeCamp.org",
        language: "english",
        description: "Full HTML & CSS courses",
        url: "https://www.youtube.com/@freecodecamp"
    },
    {
        name: "CodeWithHarry",
        language: "hindi",
        description: "HTML & CSS tutorials in Hindi",
        url: "https://www.youtube.com/@CodeWithHarry"
    },
    {
        name: "Thapa Technical",
        language: "hindi",
        description: "Complete web development in Hindi",
        url: "https://www.youtube.com/@ThapaTechnical"
    },
    {
        name: "Fazt Code",
        language: "spanish",
        description: "Desarrollo web en español",
        url: "https://www.youtube.com/@FaztCode"
    },
    {
        name: "Grafikart.fr",
        language: "french",
        description: "Développement web en français",
        url: "https://www.youtube.com/@grafikart"
    },
    {
        name: "The Net Ninja",
        language: "german",
        description: "Web development tutorials",
        url: "https://www.youtube.com/@NetNinja"
    }
];

document.addEventListener('DOMContentLoaded', function () {
    // Tab navigation
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-tab');
            tabButtons.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    // Populate YouTube channels (default "all")
    displayChannels('all');

    // Language filter
    const languageDropdown = document.getElementById('language');
    languageDropdown.addEventListener('change', e => {
        displayChannels(e.target.value);
    });

    // Search notes
    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', searchNotes);

    // Convert to PDF
    const convertBtn = document.getElementById('convertPdfBtn');
    convertBtn.addEventListener('click', convertToPDF);
});

function displayChannels(lang) {
    const container = document.getElementById('channelsList');
    const filtered = lang === 'all' ? youtubeChannels : youtubeChannels.filter(c => c.language === lang);
    if (filtered.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:#718096;">No channels found for this language.</p>';
        return;
    }
    container.innerHTML = filtered.map(ch => `
        <div class="channel-card">
            <div class="channel-header">
                <div class="channel-icon">▶</div>
                <div class="channel-info">
                    <h4>${ch.name}</h4>
                    <span class="channel-language">${ch.language.charAt(0).toUpperCase() + ch.language.slice(1)}</span>
                </div>
            </div>
            <p class="channel-description">${ch.description}</p>
            <a href="${ch.url}" target="_blank" class="channel-link">Visit Channel →</a>
        </div>
    `).join('');
}

function searchNotes() {
    const query = document.getElementById('searchQuery').value.trim();
    const results = document.getElementById('searchResults');
    if (!query) {
        results.innerHTML = '<p style="color:#e53e3e;padding:1rem;">Please enter a search query.</p>';
        return;
    }
    results.innerHTML = '<p style="padding:1rem;">Searching...</p>';
    setTimeout(() => {
        const mock = [
            { title: `${query} – MDN Web Docs`, description: `Official documentation for ${query}.`, url: `https://developer.mozilla.org/en-US/search?q=${query}` },
            { title: `${query} – W3Schools`, description: `Learn ${query} with examples.`, url: `https://www.w3schools.com/tags/tag_${query.toLowerCase()}.asp` },
            { title: `${query} – CSS‑Tricks`, description: `Articles about ${query}.`, url: `https://css-tricks.com/?s=${query}` }
        ];
        results.innerHTML = mock.map(r => `
            <div class="result-item">
                <h4>${r.title}</h4>
                <p>${r.description}</p>
                <a href="${r.url}" target="_blank" class="result-link">View Resource →</a>
            </div>
        `).join('');
    }, 800);
}

function convertToPDF() {
    const content = document.getElementById('notesContent').value.trim();
    if (!content) {
        alert('Please enter some notes to convert.');
        return;
    }
    const win = window.open('', '_blank');
    win.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>HTML & CSS Notes</title>
            <style>
                body {font-family:'Inter',Arial,sans-serif;padding:2rem;max-width:800px;margin:auto;line-height:1.6;}
                h1 {color:#ff6f00;border-bottom:3px solid #e53935;padding-bottom:0.5rem;}
                pre {background:#f7fafc;padding:1rem;border-radius:8px;white-space:pre-wrap;word-wrap:break-word;}
            </style>
        </head>
        <body>
            <h1>HTML & CSS Notes</h1>
            <pre>${content}</pre>
        </body>
        </html>
    `);
    win.document.close();
    setTimeout(() => win.print(), 300);
}
