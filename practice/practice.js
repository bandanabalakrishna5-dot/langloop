// Practice Feature Logic

document.addEventListener('DOMContentLoaded', () => {
    const practiceSearchInput = document.getElementById('practiceSearch');
    const suggestionsBox = document.getElementById('suggestions');
    const compilerContainer = document.getElementById('compilerContainer');
    const practiceSearchContainer = document.getElementById('practiceSearchContainer');
    const backBtn = document.getElementById('btnBackToSearch');
    const runBtn = document.getElementById('btnRunCode');
    const codeEditor = document.getElementById('codeEditor');
    const terminalOutput = document.getElementById('terminalOutput');
    const langBadge = document.getElementById('compilerLangName');
    const lineNumbers = document.getElementById('lineNumbers');

    // List of supported languages for the mock compiler
    const languages = [
        'Python', 'JavaScript', 'Java', 'C++', 'C', 'C#', 'Ruby', 'Go', 'Swift', 'PHP'
    ];

    // Mock code templates
    const templates = {
        'Python': 'print("Hello, World!")',
        'JavaScript': 'console.log("Hello, World!");',
        'Java': 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
        'C++': '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!";\n    return 0;\n}',
        'C': '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!");\n    return 0;\n}',
        'C#': 'using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello, World!");\n    }\n}',
        'Ruby': 'puts "Hello, World!"',
        'Go': 'package main\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}',
        'Swift': 'print("Hello, World!")',
        'PHP': '<?php\n  echo "Hello, World!";\n?>'
    };

    // 1. Search Functionality
    if (practiceSearchInput) {
        practiceSearchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            suggestionsBox.innerHTML = '';
            if (query.length === 0) {
                suggestionsBox.style.display = 'none';
                return;
            }

            const matches = languages.filter(lang => lang.toLowerCase().includes(query));

            if (matches.length > 0) {
                matches.forEach(lang => {
                    const div = document.createElement('div');
                    div.classList.add('suggestion-item');
                    div.textContent = lang;
                    div.addEventListener('click', () => {
                        openCompiler(lang);
                    });
                    suggestionsBox.appendChild(div);
                });
                suggestionsBox.style.display = 'block';
            } else {
                suggestionsBox.style.display = 'none';
            }
        });

        // Hide suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-input-wrapper')) {
                suggestionsBox.style.display = 'none';
            }
        });
    }

    // 2. Open Compiler View
    function openCompiler(language) {
        // Hide search, show compiler
        practiceSearchContainer.style.display = 'none';
        compilerContainer.style.display = 'flex';

        // Set metadata
        langBadge.textContent = language;
        codeEditor.value = templates[language] || '// Write your code here...';
        updateLineNumbers();

        // Reset terminal
        terminalOutput.innerHTML = '<div class="output-line" style="color: #6272a4">// Output will appear here...</div>';
    }

    // 3. Back Button
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            compilerContainer.style.display = 'none';
            practiceSearchContainer.style.display = 'flex';
            practiceSearchInput.value = ''; // Clear search
        });
    }

    // 4. Run Code Mock Logic
    if (runBtn) {
        runBtn.addEventListener('click', () => {
            const code = codeEditor.value;
            const lang = langBadge.textContent;

            terminalOutput.innerHTML = '<div class="output-line" style="color: #8be9fd">> Compiling...</div>';

            setTimeout(() => {
                terminalOutput.innerHTML += `<div class="output-line" style="color: #50fa7b">> Running ${lang}...</div>`;

                // Simple mock output based on lang
                let result = "Hello, World!";
                // If user changed code, maybe just echo "Executed successfully" for now as we don't have a real backend compiler here yet.
                // But if they kept template, we show expected output.

                setTimeout(() => {
                    terminalOutput.innerHTML += `<div class="output-line">${result}</div>`;
                    terminalOutput.innerHTML += `<div class="output-line" style="color: #6272a4">Process finished with exit code 0</div>`;
                }, 800);

            }, 600);
        });
    }

    // 5. Line Numbers logic
    if (codeEditor) {
        codeEditor.addEventListener('input', updateLineNumbers);
        codeEditor.addEventListener('scroll', () => {
            lineNumbers.scrollTop = codeEditor.scrollTop;
        });
    }

    function updateLineNumbers() {
        const lines = codeEditor.value.split('\n').length;
        lineNumbers.innerHTML = Array(lines).fill(0).map((_, i) => i + 1).join('<br>');
    }
});
