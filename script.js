// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Tab switching functionality - REQUIRED for main page tabs to work
  const tabs = document.querySelectorAll('.tab');
  const grids = {
    'top-subjects': document.getElementById('top-subjects-grid'),
    'interview-prep': document.getElementById('interview-prep-grid'),
    'professional-skills': document.getElementById('professional-skills-grid'),
    'roadmap': document.getElementById('roadmap-grid'),
    'practice': document.getElementById('practice-grid')
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      // Add active class to clicked tab
      tab.classList.add('active');

      // Hide all grids
      Object.values(grids).forEach(grid => {
        if (grid) grid.style.display = 'none';
      });

      // Show the selected grid
      const selectedTab = tab.getAttribute('data-tab');
      if (grids[selectedTab]) {
        grids[selectedTab].style.display = 'grid';
      }
    });
  });

  // Modal elements
  const loginModal = document.getElementById('loginModal');
  const loginForm = document.querySelector('.login-form');
  const signupForm = document.querySelector('.signup-form');
  const showSignupLink = document.getElementById('showSignup');
  const showLoginLink = document.getElementById('showLogin');
  const openLoginBtn = document.getElementById('openLogin');
  const openSignupBtn = document.getElementById('openSignup');

  // Show modal with login form
  openLoginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
    loginForm.style.display = 'flex';
    signupForm.style.display = 'none';
  });

  // Show modal with signup form
  openSignupBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
    loginForm.style.display = 'none';
    signupForm.style.display = 'flex';
  });

  // Inside modal - switch to Signup
  if (showSignupLink) {
    showSignupLink.addEventListener('click', (e) => {
      e.preventDefault();
      loginForm.style.display = 'none';
      signupForm.style.display = 'flex';
    });
  }

  // Inside modal - switch to Login
  if (showLoginLink) {
    showLoginLink.addEventListener('click', (e) => {
      e.preventDefault();
      signupForm.style.display = 'none';
      loginForm.style.display = 'flex';
    });
  }

  // Optional: Close modal if clicked outside box
  loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
      loginModal.style.display = 'none';
    }
  });

  loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
      loginModal.style.display = 'none';
    }
  });

  // Navigate to subject pages when cards are clicked
  const subjectCards = {
    pythonCard: 'langues/python/python.html',
    javaCard: 'langues/java/java.html',
    dataScienceCard: 'langues/data-science/data-science.html',
    javascriptCard: 'langues/javascript/javascript.html',
    htmlCssCard: 'langues/html-css/html-css.html',
    webDevCard: 'langues/web-development/web-development.html',
    dataAnalyticsCard: 'langues/data-analytics/data-analytics.html',
    machineLearningCard: 'langues/machine-learning/machine-learning.html',
    webDesignCard: 'langues/web-design/web-design.html',
    // Interview Preparation Topics
    dsaCard: 'interview/dsa/dsa.html',
    systemDesignCard: 'interview-prepartion/system-design/system-design.html',
    behavioralCard: 'interview-prepartion/behavioral/behavioral.html',
    codingPracticeCard: 'interview-prepartion/coding-practice/coding-practice.html',
    technicalConceptsCard: 'interview-prepartion/technical-concepts/technical-concepts.html',
    mockInterviewCard: 'interview-prepartion/mock-interviews/mock-interviews.html',
  };

  Object.keys(subjectCards).forEach(cardId => {
    const card = document.getElementById(cardId);
    if (card) {
      card.addEventListener('click', () => {
        window.location.href = subjectCards[cardId];
      });
    }
  });

  // Language Search and Limit Logic
  const allLanguageGrid = document.getElementById('top-subjects-grid');
  const languageCards = allLanguageGrid.querySelectorAll('.card');
  const searchInput = document.getElementById('languageSearch');
  const searchContainer = document.getElementById('languageSearchContainer');

  // Initial Limit: Show only top 6
  function updateLanguageDisplay(filter = '') {
    languageCards.forEach((card, index) => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      const matches = title.includes(filter.toLowerCase());

      if (filter === '') {
        // No search: Show only first 4
        if (index < 4) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      } else {
        // Search active: Show all matches
        if (matches) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      }
    });
  }

  // Initialize display
  updateLanguageDisplay();

  // Search Event Listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      updateLanguageDisplay(e.target.value);
    });
  }

  // Toggle Search Bar Visibility based on active tab
  function toggleSearchBar(tabName) {
    if (tabName === 'top-subjects') {
      searchContainer.classList.remove('hidden');
    } else {
      searchContainer.classList.add('hidden');
    }
  }

  // Hook into existing tab click listener to toggle search bar
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const selectedTab = tab.getAttribute('data-tab');
      toggleSearchBar(selectedTab);
    });
  });

  // Initial state check
  toggleSearchBar('top-subjects');

});
