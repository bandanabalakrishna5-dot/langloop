const fs = require('fs');
const path = require('path');

const languages = [
    { id: 'cpp', name: 'C++', icon: '🚀' },
    { id: 'csharp', name: 'C#', icon: '#️⃣' },
    { id: 'c', name: 'C', icon: 'Ⓒ' },
    { id: 'go', name: 'Go', icon: '🐹' },
    { id: 'rust', name: 'Rust', icon: '🦀' },
    { id: 'swift', name: 'Swift', icon: '🐦' },
    { id: 'kotlin', name: 'Kotlin', icon: '🎯' },
    { id: 'php', name: 'PHP', icon: '🐘' },
    { id: 'ruby', name: 'Ruby', icon: '💎' },
    { id: 'typescript', name: 'TypeScript', icon: '📘' },
    { id: 'scala', name: 'Scala', icon: '🔴' },
    { id: 'perl', name: 'Perl', icon: '🐪' },
    { id: 'lua', name: 'Lua', icon: '🌙' },
    { id: 'r', name: 'R', icon: '📊' },
    { id: 'matlab', name: 'MATLAB', icon: '🔢' },
    { id: 'assembly', name: 'Assembly', icon: '⚙️' },
    { id: 'sql', name: 'SQL', icon: '🗃️' },
    { id: 'nosql', name: 'NoSQL', icon: '🚫' },
    { id: 'mongodb', name: 'MongoDB', icon: '🍃' },
    { id: 'postgresql', name: 'PostgreSQL', icon: '🐘' },
    { id: 'redis', name: 'Redis', icon: '🔴' },
    { id: 'docker', name: 'Docker', icon: '🐳' },
    { id: 'kubernetes', name: 'Kubernetes', icon: '☸️' },
    { id: 'aws', name: 'AWS', icon: '☁️' },
    { id: 'azure', name: 'Azure', icon: '☁️' },
    { id: 'gcp', name: 'Google Cloud', icon: '☁️' },
    { id: 'android', name: 'Android', icon: '🤖' },
    { id: 'ios', name: 'iOS', icon: '🍎' },
    { id: 'react', name: 'React', icon: '⚛️' },
    { id: 'angular', name: 'Angular', icon: '🅰️' },
    { id: 'vue', name: 'Vue.js', icon: '🟢' },
    { id: 'nodejs', name: 'Node.js', icon: '🌿' },
    { id: 'django', name: 'Django', icon: '🎸' },
    { id: 'flask', name: 'Flask', icon: '🌶️' },
    { id: 'springBoot', name: 'Spring Boot', icon: '🍃' },
    { id: 'unity', name: 'Unity', icon: '🎮' },
    { id: 'unrealEngine', name: 'Unreal Engine', icon: '🎮' },
    { id: 'git', name: 'Git', icon: '🐙' },
    { id: 'linux', name: 'Linux', icon: '🐧' },
    { id: 'devops', name: 'DevOps', icon: '♾️' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: '🔒' },
    { id: 'blockchain', name: 'Blockchain', icon: '🔗' },
    { id: 'deepLearning', name: 'Deep Learning', icon: '🧠' },
    { id: 'nlp', name: 'NLP', icon: '🗣️' }
];

const baseDir = path.join(__dirname, 'languages');

if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir);
}

// Languages to skip (manually maintained)
const SKIP_LANGUAGES = ['python', 'cpp'];

languages.forEach(lang => {
    // Check if we should skip this language
    if (SKIP_LANGUAGES.includes(lang.id)) {
        console.log(`Skipping ${lang.name} (Custom page exists)`);
        return;
    }

    // Handle special folder names
    const folderName = lang.id === 'csharp' ? 'c-sharp' : lang.id;

    // Normalize folder name: springBoot -> spring-boot
    const cleanFolderName = folderName.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');

    const langDir = path.join(baseDir, cleanFolderName);

    if (!fs.existsSync(langDir)) {
        fs.mkdirSync(langDir, { recursive: true });
    }

    // Single File HTML Content with Embedded CSS and JS
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${lang.name} - Learning Resources</title>
    <link rel="stylesheet" href="../../styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        /* Premium Page Styles - Embedded */
        :root {
            --primary-color: #667eea;
            --secondary-color: #764ba2;
            --accent-color: #ffd43b;
            --bg-gradient: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            --card-bg: rgba(255, 255, 255, 0.95);
            --text-dark: #2d3748;
            --text-light: #718096;
            --border-radius: 12px;
            --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            --shadow-hover: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); /* Default Blue/Dark Theme */
            min-height: 100vh;
            padding: 2rem;
            color: var(--text-dark);
        }

        .container { max-width: 1200px; margin: 0 auto; }

        /* Header */
        .page-header {
            text-align: center;
            margin-bottom: 3rem;
            color: white;
            position: relative;
            padding: 20px;
        }

        .back-btn {
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            padding: 10px 20px;
            background: rgba(255, 255, 255, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 8px;
            color: white;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
            z-index: 10;
            display: flex;
            align-items: center;
            gap: 8px;
            backdrop-filter: blur(5px);
        }

        .back-btn:hover {
            background: rgba(255, 255, 255, 0.25);
            transform: translateY(-50%) scale(1.05);
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .page-header h1 {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
            padding: 0 100px;
            position: relative;
            z-index: 1;
            line-height: 1.2;
        }

        .subtitle { font-size: 1.2rem; opacity: 0.9; }

        /* Tabs */
        .tabs-container {
            background: var(--card-bg);
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            overflow: hidden;
        }

        .tabs-nav {
            display: flex;
            background: linear-gradient(to right, #f7fafc, #edf2f7);
            border-bottom: 2px solid #e2e8f0;
        }

        .tab-btn {
            flex: 1;
            padding: 1.25rem 1.5rem;
            background: transparent;
            border: none;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 600;
            color: var(--text-light);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
            position: relative;
        }

        .tab-btn::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            right: 0;
            height: 2px;
            background: var(--primary-color);
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        .tab-btn:hover, .tab-btn.active { color: var(--primary-color); }
        .tab-btn.active::after { transform: scaleX(1); }
        
        .tab-icon { width: 20px; height: 20px; }

        /* Content */
        .tabs-content { padding: 2rem; }
        .tab-pane { display: none; animation: fadeIn 0.4s ease; }
        .tab-pane.active { display: block; }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* YouTube Cards */
        .youtube-channels {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
        }

        .channel-card {
            background: white;
            border-radius: var(--border-radius);
            padding: 1.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }

        .channel-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-hover);
            border-color: var(--primary-color);
        }

        /* Search & Helpers */
        .search-container {
            background: white;
            border-radius: var(--border-radius);
            padding: 2rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
        }
        
        .search-box { display: flex; gap: 1rem; }
        .search-box input {
            flex: 1; padding: 1rem 1.5rem; border: 2px solid #e2e8f0;
            border-radius: 8px; font-size: 1rem;
        }
        .btn-primary {
            padding: 1rem 2rem;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white; border: none; border-radius: 8px;
            font-weight: 600; cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="container">
        <header class="page-header">
            <button class="back-btn">← Back</button>
            <h1>${lang.icon} ${lang.name} Learning Resources</h1>
            <p class="subtitle">Master ${lang.name} with curated resources</p>
        </header>

        <div class="tabs-container">
            <div class="tabs-nav">
                <button class="tab-btn active" data-tab="youtube">YouTube Channels</button>
                <button class="tab-btn" data-tab="updates">Updates & History</button>
                <button class="tab-btn" data-tab="notes">Notes & PDF</button>
            </div>

            <div class="tabs-content">
                <div class="tab-pane active" id="youtube">
                    <div class="youtube-channels" id="channelsList">
                        <!-- Populated by JS -->
                    </div>
                </div>

                <div class="tab-pane" id="updates">
                    <div class="updates-section">
                        <h3>📰 Latest ${lang.name} News</h3>
                        <p>Stay updated with the latest in ${lang.name}. (Content coming soon)</p>
                    </div>
                </div>

                <div class="tab-pane" id="notes">
                    <div class="notes-section">
                        <div class="search-container">
                             <h3>🔍 Search for ${lang.name} Notes</h3>
                             <div class="search-box">
                                    <input type="text" id="searchQuery" placeholder="Enter topic...">
                                    <button id="searchBtn" class="btn-primary">Search</button>
                             </div>
                             <div id="searchResults" style="margin-top: 20px;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Back Button Logic
            const backBtn = document.querySelector('.back-btn');
            if (backBtn) {
                backBtn.addEventListener('click', () => {
                   window.location.href = '../../index.html';
                });
            }

            // Tab Switching
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

            // Mock Data for YouTube
            const channelsList = document.getElementById('channelsList');
            channelsList.innerHTML = \`
                <div class="channel-card">
                    <h4>Recommended Channel</h4>
                    <p>Great tutorials for ${lang.name} beginners.</p>
                    <a href="https://www.youtube.com/results?search_query=best+${lang.name}+tutorials" target="_blank" style="color: #667eea; font-weight: bold; text-decoration: none;">Search on YouTube →</a>
                </div>
                <div class="channel-card">
                    <h4>Advanced ${lang.name}</h4>
                    <p>Deep dive into ${lang.name} concepts.</p>
                    <a href="https://www.youtube.com/results?search_query=advanced+${lang.name}" target="_blank" style="color: #667eea; font-weight: bold; text-decoration: none;">Search on YouTube →</a>
                </div>
            \`;

            // Mock Search
            const searchBtn = document.getElementById('searchBtn');
            searchBtn.addEventListener('click', () => {
                const query = document.getElementById('searchQuery').value;
                const results = document.getElementById('searchResults');
                if(query) {
                    results.innerHTML = \`<p>Searching for <strong>\${query}</strong> in ${lang.name} resources...</p>\`;
                    setTimeout(() => {
                        results.innerHTML = \`<p>Found 3 resources for <strong>\${query}</strong> (Placeholder)</p>\`;
                    }, 500);
                }
            });
        });
    </script>
</body>
</html>`;

    // Write only the HTML file
    fs.writeFileSync(path.join(langDir, `${cleanFolderName}.html`), htmlContent);

    console.log(`Generated ${cleanFolderName}`);
});
