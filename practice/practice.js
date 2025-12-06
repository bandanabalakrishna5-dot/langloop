// Practice Compiler Logic with 60+ Languages

// Helper to generate basic Hello World templates
const createTemplate = (name, code) => ({ name, placeholder: code });

const languageTemplates = {
    // Popular
    javascript: createTemplate("JavaScript", `console.log("Hello, World!");\n// Write your JS code here`),
    python: createTemplate("Python", `def main():\n    print("Hello, World!")\n\nif __name__ == "__main__":\n    main()`),
    java: createTemplate("Java", `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`),
    cpp: createTemplate("C++", `#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}`),
    c: createTemplate("C", `#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}`),
    csharp: createTemplate("C#", `using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello, World!");\n    }\n}`),

    // Web
    html: createTemplate("HTML", `<!DOCTYPE html>\n<html>\n<body>\n    <h1>Hello, World!</h1>\n</body>\n</html>`),
    css: createTemplate("CSS", `body {\n    background-color: #f0f0f0;\n}\nh1 {\n    color: blue;\n}`),
    typescript: createTemplate("TypeScript", `const message: string = "Hello, World!";\nconsole.log(message);`),
    php: createTemplate("PHP", `<?php\n    echo "Hello, World!";\n?>`),
    ruby: createTemplate("Ruby", `puts "Hello, World!"`),
    go: createTemplate("Go", `package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}`),
    rust: createTemplate("Rust", `fn main() {\n    println!("Hello, World!");\n}`),
    swift: createTemplate("Swift", `import Swift\nprint("Hello, World!")`),
    kotlin: createTemplate("Kotlin", `fun main() {\n    println("Hello, World!")\n}`),

    // Scripting & Data
    r: createTemplate("R", `print("Hello, World!")`),
    perl: createTemplate("Perl", `print "Hello, World!\\n";`),
    lua: createTemplate("Lua", `print("Hello, World!")`),
    bash: createTemplate("Bash", `echo "Hello, World!"`),
    powershell: createTemplate("PowerShell", `Write-Host "Hello, World!"`),
    sql: createTemplate("SQL", `SELECT 'Hello, World!' AS Message;`),

    // Functional
    haskell: createTemplate("Haskell", `main = putStrLn "Hello, World!"`),
    scala: createTemplate("Scala", `object Main extends App {\n    println("Hello, World!")\n}`),
    elixir: createTemplate("Elixir", `IO.puts "Hello, World!"`),
    clojure: createTemplate("Clojure", `(println "Hello, World!")`),
    fsharp: createTemplate("F#", `printfn "Hello, World!"`),
    ocaml: createTemplate("OCaml", `print_endline "Hello, World!";;`),
    erlang: createTemplate("Erlang", `-module(hello).\n-export([hello_world/0]).\n\nhello_world() -> io:fwrite("Hello, World!\\n").`),

    // Systems & Legacy
    assembly: createTemplate("Assembly", `section .data\n    msg db 'Hello, World!', 0xA\n    len equ $ - msg\nsection .text\n    global _start\n_start:\n    mov edx, len\n    mov ecx, msg\n    mov ebx, 1\n    mov eax, 4\n    int 0x80\n    mov eax, 1\n    int 0x80`),
    fortran: createTemplate("Fortran", `program hello\n    print *, "Hello, World!"\nend program hello`),
    cobol: createTemplate("COBOL", `       IDENTIFICATION DIVISION.\n       PROGRAM-ID. HELLO-WORLD.\n       PROCEDURE DIVISION.\n           DISPLAY 'Hello, World!'.\n           STOP RUN.`),
    pascal: createTemplate("Pascal", `program Hello;\nbegin\n  writeln ('Hello, World!');\nend.`),
    ada: createTemplate("Ada", `with Ada.Text_IO; use Ada.Text_IO;\nprocedure Hello is\nbegin\n    Put_Line ("Hello, World!");\nend Hello;`),

    // Mobile & Others
    dart: createTemplate("Dart", `void main() {\n  print('Hello, World!');\n}`),
    objectivec: createTemplate("Objective-C", `#import <Foundation/Foundation.h>\n\nint main(int argc, const char * argv[]) {\n    @autoreleasepool {\n        NSLog(@"Hello, World!");\n    }\n    return 0;\n}`),
    groovy: createTemplate("Groovy", `println "Hello, World!"`),
    julia: createTemplate("Julia", `println("Hello, World!")`),
    vba: createTemplate("VBA", `Sub Hello()\n    MsgBox "Hello, World!"\nEnd Sub`),

    // More Languages to reach 60+
    scheme: createTemplate("Scheme", `(display "Hello, World!")\n(newline)`),
    prolog: createTemplate("Prolog", `:- initialization(main).\nmain :- write('Hello, World!'), nl, halt.`),
    lisp: createTemplate("Lisp", `(print "Hello, World!")`),
    vbnet: createTemplate("VB.NET", `Module Module1\n    Sub Main()\n        Console.WriteLine("Hello, World!")\n    End Sub\nEnd Module`),
    coffeescript: createTemplate("CoffeeScript", `console.log "Hello, World!"`),
    matlab: createTemplate("MATLAB", `disp('Hello, World!')`),
    d: createTemplate("D", `import std.stdio;\n\nvoid main() {\n    writeln("Hello, World!");\n}`),
    sas: createTemplate("SAS", `data _null_;\n    put 'Hello, World!';\nrun;`),
    scratch: createTemplate("Scratch", `say "Hello, World!"`),
    abap: createTemplate("ABAP", `WRITE 'Hello, World!'.`),
    apex: createTemplate("Apex", `System.debug('Hello, World!');`),
    elm: createTemplate("Elm", `import Html exposing (text)\n\nmain = text "Hello, World!"`),
    crystal: createTemplate("Crystal", `puts "Hello, World!"`),
    nim: createTemplate("Nim", `echo "Hello, World!"`),
    reason: createTemplate("Reason", `print_endline("Hello, World!");`),
    solidity: createTemplate("Solidity", `pragma solidity ^0.8.0;\n\ncontract HelloWorld {\n    function sayHello() public pure returns (string memory) {\n        return "Hello, World!";\n    }\n}`),
    verilog: createTemplate("Verilog", `module hello;\n    initial begin\n        $display("Hello, World!");\n        $finish;\n    end\nendmodule`),
    vhdl: createTemplate("VHDL", `use std.textio.all;\n\nentity hello is\nend hello;\n\narchitecture behavior of hello is\nbegin\n    process\n        variable l : line;\n    begin\n        write(l, String'("Hello, World!"));\n        writeline(output, l);\n        wait;\n    end process;\nend behavior;`),
    tcl: createTemplate("Tcl", `puts "Hello, World!"`),
    racket: createTemplate("Racket", `#lang racket\n"Hello, World!"`),
    sml: createTemplate("Standard ML", `print "Hello, World!\\n";`),
    smalltalk: createTemplate("Smalltalk", `Transcript show: 'Hello, World!'; cr.`)
};

document.addEventListener('DOMContentLoaded', () => {
    const practiceSearch = document.getElementById('practiceSearch');
    const searchContainer = document.getElementById('practiceSearchContainer');
    const compilerContainer = document.getElementById('compilerContainer');
    const practiceGrid = document.getElementById('practice-grid');

    // Compiler Elements
    const compilerLangName = document.getElementById('compilerLangName');
    const codeEditor = document.getElementById('codeEditor');
    const terminalOutput = document.getElementById('terminalOutput');
    const runBtn = document.getElementById('btnRunCode');
    const backBtn = document.getElementById('btnBackToSearch');
    const lineNumbers = document.getElementById('lineNumbers');

    let currentLang = 'javascript';

    // Search Handler
    if (practiceSearch) {
        practiceSearch.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const suggestionsEl = document.getElementById('suggestions');

            if (query.length === 0) {
                suggestionsEl.classList.remove('visible');
                return;
            }

            // Filter languages
            const matches = Object.entries(languageTemplates).filter(([key, template]) => {
                return template.name.toLowerCase().includes(query) || key.includes(query);
            });

            if (matches.length > 0) {
                const html = matches.slice(0, 8).map(([key, template]) => `
                    <div class="suggestion-item" data-lang="${key}">
                        <span>${getQueryIcon(key)}</span>
                        <span>${template.name}</span>
                    </div>
                `).join('');

                suggestionsEl.innerHTML = html;
                suggestionsEl.classList.add('visible');

                // Add click events to suggestions
                document.querySelectorAll('.suggestion-item').forEach(item => {
                    item.addEventListener('click', () => {
                        const langKey = item.dataset.lang;
                        practiceSearch.value = languageTemplates[langKey].name; // Set full name
                        suggestionsEl.classList.remove('visible');
                        openCompiler(langKey);
                    });
                });
            } else {
                suggestionsEl.classList.remove('visible');
            }
        });

        // Hide suggestions on outside click
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-input-wrapper')) {
                const suggestionsEl = document.getElementById('suggestions');
                if (suggestionsEl) suggestionsEl.classList.remove('visible');
            }
        });

        practiceSearch.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = practiceSearch.value.toLowerCase().trim();
                openCompiler(query);
            }
        });
    }

    // Initialize Line Numbers
    if (codeEditor) {
        codeEditor.addEventListener('input', updateLineNumbers);
        codeEditor.addEventListener('scroll', () => {
            lineNumbers.scrollTop = codeEditor.scrollTop;
        });
    }

    // Run Code Handler
    if (runBtn) {
        runBtn.addEventListener('click', runCode);
    }

    // Back Handler
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            compilerContainer.classList.remove('active');
            searchContainer.classList.remove('hidden');
            if (practiceGrid) practiceGrid.classList.remove('compiler-active');

            practiceSearch.value = '';
            practiceSearch.focus();
        });
    }

    function openCompiler(query) {
        // Advanced Fuzzy Search
        // precise match first
        let langKey = Object.keys(languageTemplates).find(key => key === query);

        // then contains
        if (!langKey) {
            langKey = Object.keys(languageTemplates).find(key => key.includes(query) || query.includes(key));
        }

        if (!langKey) {
            // Check for c++ special case because '+' might be stripped or handled differently in regex
            if (query.includes('c++') || query.includes('cpp')) langKey = 'cpp';
            else if (query.includes('c#')) langKey = 'csharp';
            else if (query === 'js') langKey = 'javascript';
            else if (query === 'ts') langKey = 'typescript';
        }

        if (!langKey) {
            alert(`Language "${query}" not supported yet. We support 60+ languages! Try 'Java', 'Python', 'Go', 'Rust', etc.`);
            return;
        }

        currentLang = langKey;
        const template = languageTemplates[langKey];

        // Set Content
        compilerLangName.innerHTML = `<span style="font-size: 1.2rem">${getQueryIcon(langKey)}</span> ${template.name}`;
        codeEditor.value = template.placeholder;
        terminalOutput.innerHTML = '<div class="output-line" style="color: #6272a4">// Output will appear here...</div>';

        updateLineNumbers();

        // Animate Transition
        searchContainer.classList.add('hidden');
        compilerContainer.classList.add('active');
        if (practiceGrid) practiceGrid.classList.add('compiler-active');
    }

    function runCode() {
        terminalOutput.innerHTML = '<div class="output-line" style="color: #f1fa8c">Compiling / Interpreting...</div>';

        setTimeout(() => {
            if (currentLang === 'javascript') {
                runJavaScript();
            } else if (currentLang === 'html') {
                terminalOutput.innerHTML = `<div class="output-line success-line">HTML Rendered (Preview functionality would go here)</div>`;
            } else {
                simulateExecution(currentLang);
            }
        }, 800);
    }

    function runJavaScript() {
        try {
            const logs = [];
            const originalLog = console.log;
            console.log = (...args) => {
                logs.push(args.map(a => String(a)).join(' '));
                originalLog.apply(console, args);
            };

            const userCode = codeEditor.value;
            // Basic eval for client-side demo
            const result = eval(userCode);

            console.log = originalLog;

            let outputHtml = '';
            logs.forEach(log => {
                outputHtml += `<div class="output-line">${escapeHtml(log)}</div>`;
            });

            if (result !== undefined && logs.length === 0) {
                outputHtml += `<div class="output-line success-line">Result: ${escapeHtml(String(result))}</div>`;
            } else if (logs.length === 0) {
                outputHtml += `<div class="output-line success-line">Executed successfully</div>`;
            }

            terminalOutput.innerHTML = outputHtml;

        } catch (err) {
            terminalOutput.innerHTML = `<div class="output-line error-line">Error: ${err.message}</div>`;
        }
    }

    function simulateExecution(lang) {
        let output = "";
        const code = codeEditor.value;
        const name = languageTemplates[lang].name;

        // Simple mock of logic
        if (code.includes('Hello') || code.includes('write') || code.includes('print')) {
            output = "Hello, World!";
        } else {
            output = `Program executed successfully in ${name} environment.`;
        }

        terminalOutput.innerHTML = `
            <div class="output-line" style="color: #6272a4">${name} Build System v1.0.0</div>
            <div class="output-line success-line">Build Success (0.42s)</div>
            <br>
            <div class="output-line">${output}</div>
        `;
    }

    function updateLineNumbers() {
        if (!codeEditor || !lineNumbers) return;
        const lines = codeEditor.value.split('\n').length;
        lineNumbers.innerHTML = Array(lines).fill(0).map((_, i) => i + 1).join('<br>');
    }

    function escapeHtml(text) {
        if (!text) return text;
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function getQueryIcon(langKey) {
        const iconMap = {
            java: '☕', python: '🐍', javascript: '📜', cpp: '⚙️', c: 'C', csharp: '#',
            html: '🌐', css: '🎨', typescript: 'TS', php: '🐘', ruby: '💎', go: '🐹',
            rust: '🦀', swift: '🐦', kotlin: 'K', sql: '🗃️', bash: '💻', powershell: '📺',
            r: 'R', apple: '🍎', android: '🤖', database: '💾', docker: '🐳',
        };

        // Return mapped icon or generic computer
        return iconMap[langKey] || '💻';
    }
});
