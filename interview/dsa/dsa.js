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
        name: "Back To Back SWE",
        language: "english",
        description: "Technical interview preparation and algorithms",
        url: "https://www.youtube.com/@BackToBackSWE"
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
    },
    {
        name: "Pepcoding",
        language: "hindi",
        description: "Problem solving and DSA interview preparation",
        url: "https://www.youtube.com/@Pepcoding"
    }
];

// Code Examples Data
const codeExamples = [
    {
        title: "Two Sum (Hash Map)",
        complexity: "Time: O(n) | Space: O(n)",
        description: "Find two numbers that add up to a target sum using a hash map for O(n) time complexity.",
        code: `<span class="keyword">function</span> <span class="function">twoSum</span>(nums, target) {
    <span class="keyword">const</span> map = <span class="keyword">new</span> <span class="function">Map</span>();
    
    <span class="keyword">for</span> (<span class="keyword">let</span> i = <span class="number">0</span>; i < nums.length; i++) {
        <span class="keyword">const</span> complement = target - nums[i];
        
        <span class="keyword">if</span> (map.<span class="function">has</span>(complement)) {
            <span class="keyword">return</span> [map.<span class="function">get</span>(complement), i];
        }
        
        map.<span class="function">set</span>(nums[i], i);
    }
    
    <span class="keyword">return</span> [];
}`
    },
    {
        title: "Reverse Linked List",
        complexity: "Time: O(n) | Space: O(1)",
        description: "Reverse a singly linked list iteratively using three pointers.",
        code: `<span class="keyword">function</span> <span class="function">reverseList</span>(head) {
    <span class="keyword">let</span> prev = <span class="keyword">null</span>;
    <span class="keyword">let</span> current = head;
    
    <span class="keyword">while</span> (current !== <span class="keyword">null</span>) {
        <span class="keyword">let</span> nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    
    <span class="keyword">return</span> prev;
}`
    },
    {
        title: "Binary Search",
        complexity: "Time: O(log n) | Space: O(1)",
        description: "Find target element in sorted array using divide and conquer approach.",
        code: `<span class="keyword">function</span> <span class="function">binarySearch</span>(arr, target) {
    <span class="keyword">let</span> left = <span class="number">0</span>;
    <span class="keyword">let</span> right = arr.length - <span class="number">1</span>;
    
    <span class="keyword">while</span> (left <= right) {
        <span class="keyword">const</span> mid = <span class="function">Math</span>.<span class="function">floor</span>((left + right) / <span class="number">2</span>);
        
        <span class="keyword">if</span> (arr[mid] === target) {
            <span class="keyword">return</span> mid;
        } <span class="keyword">else if</span> (arr[mid] < target) {
            left = mid + <span class="number">1</span>;
        } <span class="keyword">else</span> {
            right = mid - <span class="number">1</span>;
        }
    }
    
    <span class="keyword">return</span> -<span class="number">1</span>; <span class="comment">// Not found</span>
}`
    },
    {
        title: "Valid Parentheses",
        complexity: "Time: O(n) | Space: O(n)",
        description: "Check if brackets are balanced using a stack data structure.",
        code: `<span class="keyword">function</span> <span class="function">isValid</span>(s) {
    <span class="keyword">const</span> stack = [];
    <span class="keyword">const</span> pairs = { <span class="string">'('</span>: <span class="string">')'</span>, <span class="string">'{'</span>: <span class="string">'}'</span>, <span class="string">'['</span>: <span class="string">']'</span> };
    
    <span class="keyword">for</span> (<span class="keyword">let</span> char of s) {
        <span class="keyword">if</span> (char <span class="keyword">in</span> pairs) {
            stack.<span class="function">push</span>(char);
        } <span class="keyword">else</span> {
            <span class="keyword">const</span> top = stack.<span class="function">pop</span>();
            <span class="keyword">if</span> (pairs[top] !== char) {
                <span class="keyword">return</span> <span class="keyword">false</span>;
            }
        }
    }
    
    <span class="keyword">return</span> stack.length === <span class="number">0</span>;
}`
    },
    {
        title: "Maximum Subarray (Kadane's Algorithm)",
        complexity: "Time: O(n) | Space: O(1)",
        description: "Find contiguous subarray with largest sum using dynamic programming.",
        code: `<span class="keyword">function</span> <span class="function">maxSubArray</span>(nums) {
    <span class="keyword">let</span> maxSum = nums[<span class="number">0</span>];
    <span class="keyword">let</span> currentSum = nums[<span class="number">0</span>];
    
    <span class="keyword">for</span> (<span class="keyword">let</span> i = <span class="number">1</span>; i < nums.length; i++) {
        currentSum = <span class="function">Math</span>.<span class="function">max</span>(nums[i], currentSum + nums[i]);
        maxSum = <span class="function">Math</span>.<span class="function">max</span>(maxSum, currentSum);
    }
    
    <span class="keyword">return</span> maxSum;
}`
    },
    {
        title: "Depth-First Search (DFS)",
        complexity: "Time: O(V + E) | Space: O(V)",
        description: "Traverse graph using recursion to explore all paths.",
        code: `<span class="keyword">function</span> <span class="function">dfs</span>(graph, node, visited = <span class="keyword">new</span> <span class="function">Set</span>()) {
    visited.<span class="function">add</span>(node);
    <span class="function">console</span>.<span class="function">log</span>(node); <span class="comment">// Process node</span>
    
    <span class="keyword">for</span> (<span class="keyword">let</span> neighbor of graph[node]) {
        <span class="keyword">if</span> (!visited.<span class="function">has</span>(neighbor)) {
            <span class="function">dfs</span>(graph, neighbor, visited);
        }
    }
    
    <span class="keyword">return</span> visited;
}`
    },
    {
        title: "Breadth-First Search (BFS)",
        complexity: "Time: O(V + E) | Space: O(V)",
        description: "Level-order traversal using a queue data structure.",
        code: `<span class="keyword">function</span> <span class="function">bfs</span>(graph, start) {
    <span class="keyword">const</span> visited = <span class="keyword">new</span> <span class="function">Set</span>();
    <span class="keyword">const</span> queue = [start];
    visited.<span class="function">add</span>(start);
    
    <span class="keyword">while</span> (queue.length > <span class="number">0</span>) {
        <span class="keyword">const</span> node = queue.<span class="function">shift</span>();
        <span class="function">console</span>.<span class="function">log</span>(node); <span class="comment">// Process node</span>
        
        <span class="keyword">for</span> (<span class="keyword">let</span> neighbor of graph[node]) {
            <span class="keyword">if</span> (!visited.<span class="function">has</span>(neighbor)) {
                visited.<span class="function">add</span>(neighbor);
                queue.<span class="function">push</span>(neighbor);
            }
        }
    }
    
    <span class="keyword">return</span> visited;
}`
    },
    {
        title: "Merge Two Sorted Lists",
        complexity: "Time: O(n + m) | Space: O(1)",
        description: "Merge two sorted linked lists into one sorted list.",
        code: `<span class="keyword">function</span> <span class="function">mergeTwoLists</span>(l1, l2) {
    <span class="keyword">const</span> dummy = { val: <span class="number">0</span>, next: <span class="keyword">null</span> };
    <span class="keyword">let</span> current = dummy;
    
    <span class="keyword">while</span> (l1 !== <span class="keyword">null</span> && l2 !== <span class="keyword">null</span>) {
        <span class="keyword">if</span> (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } <span class="keyword">else</span> {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    current.next = l1 !== <span class="keyword">null</span> ? l1 : l2;
    <span class="keyword">return</span> dummy.next;
}`
    }
];

// Practice Platforms Data
const practicePlatforms = [
    {
        icon: "💻",
        name: "LeetCode",
        description: "3000+ problems with company-specific questions. Most popular for FAANG interview prep.",
        link: "https://leetcode.com/"
    },
    {
        icon: "🏆",
        name: "HackerRank",
        description: "Comprehensive challenges across multiple domains. Great for beginners to advanced.",
        link: "https://www.hackerrank.com/"
    },
    {
        icon: "⚔️",
        name: "CodeForces",
        description: "Competitive programming platform with regular contests and rating system.",
        link: "https://codeforces.com/"
    },
    {
        icon: "📊",
        name: "CodeChef",
        description: "Monthly contests and practice problems for competitive programming.",
        link: "https://www.codechef.com/"
    },
    {
        icon: "📚",
        name: "GeeksforGeeks",
        description: "Practice problems with detailed explanations and tutorials.",
        link: "https://practice.geeksforgeeks.org/"
    },
    {
        icon: "🎯",
        name: "InterviewBit",
        description: "Structured interview preparation with guided learning paths.",
        link: "https://www.interviewbit.com/"
    }
];

// Resources Data
const resources = [
    {
        icon: "📖",
        title: "Must-Read Books",
        items: [
            "Cracking the Coding Interview - Gayle Laakmann McDowell",
            "Introduction to Algorithms (CLRS)",
            "Algorithm Design Manual - Steven Skiena",
            "Elements of Programming Interviews"
        ]
    },
    {
        icon: "🎓",
        title: "Online Courses",
        items: [
            "AlgoExpert - 160+ questions with video explanations",
            "NeetCode 150 - Essential LeetCode problems",
            "Coursera - Algorithms Specialization (Stanford)",
            "MIT OpenCourseWare - Introduction to Algorithms"
        ]
    },
    {
        icon: "💡",
        title: "Interview Tips",
        items: [
            "Always clarify requirements and constraints first",
            "Think out loud - explain your reasoning process",
            "Start with brute force, then optimize",
            "Test your code with examples and edge cases",
            "Always analyze time and space complexity",
            "Practice 1-2 problems daily consistently"
        ]
    },
    {
        icon: "🔑",
        title: "Common Patterns",
        items: [
            "Two Pointers - Array/String manipulation",
            "Sliding Window - Subarray/substring problems",
            "Fast & Slow Pointers - Cycle detection",
            "Binary Search - Sorted array problems",
            "DFS/BFS - Tree and graph traversals",
            "Dynamic Programming - Optimization problems"
        ]
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

    // Initialize content
    displayChannels('all');
    displayCodeExamples();
    displayPracticePlatforms();
    displayResources();

    // Language filter (only for YouTube tab)
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
        channelsList.innerHTML = '<p style="text-align: center; color: white;">No channels found for this language.</p>';
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

// Display Code Examples
function displayCodeExamples() {
    const codeExamplesContainer = document.getElementById('codeExamples');
    codeExamplesContainer.innerHTML = codeExamples.map(example => `
        <div class="code-card">
            <h3>${example.title}</h3>
            <p class="complexity">${example.complexity}</p>
            <p class="description">${example.description}</p>
            <div class="code-block">
                <pre><code>${example.code}</code></pre>
            </div>
        </div>
    `).join('');
}

// Display Practice Platforms
function displayPracticePlatforms() {
    const practiceList = document.getElementById('practiceList');
    practiceList.innerHTML = practicePlatforms.map(platform => `
        <div class="platform-card">
            <span class="platform-icon">${platform.icon}</span>
            <h3>${platform.name}</h3>
            <p>${platform.description}</p>
            <a href="${platform.link}" target="_blank" class="platform-link">Visit Platform</a>
        </div>
    `).join('');
}

// Display Resources
function displayResources() {
    const resourcesList = document.getElementById('resourcesList');
    resourcesList.innerHTML = resources.map(resource => `
        <div class="resource-card">
            <h3><span class="resource-icon">${resource.icon}</span>${resource.title}</h3>
            <ul>
                ${resource.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}
