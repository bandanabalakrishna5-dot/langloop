// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Tab switching functionality - REQUIRED for main page tabs to work
  const tabs = document.querySelectorAll('.tab');
  const grids = {
    'top-subjects': document.getElementById('top-subjects-grid'),
    'interview-prep': document.getElementById('interview-prep-grid'),
    'professional-skills': document.getElementById('professional-skills-grid')
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
    javascriptCard: 'langues/javascript.html',
    htmlCssCard: 'langues/html-css/html-css.html',
    webDevCard: 'langues/web-development.html',
    dataAnalyticsCard: 'langues/data-analytics/data-analytics.html',
    machineLearningCard: 'langues/machine-learning.html',
    webDesignCard: 'langues/web-design.html',
    interviewprepartion: 'langues/interview-prepartion/interview-prepartion.html',
  };

  Object.keys(subjectCards).forEach(cardId => {
    const card = document.getElementById(cardId);
    if (card) {
      card.addEventListener('click', () => {
        window.location.href = subjectCards[cardId];
      });
    }
  });
});
