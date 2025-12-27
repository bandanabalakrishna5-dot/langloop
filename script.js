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
  const logoutBtn = document.getElementById('logoutBtn');
  const userProfile = document.getElementById('userProfile');
  const userNameDisplay = document.getElementById('userNameDisplay');
  const userAvatar = document.getElementById('userAvatar');

  // Function to update UI based on auth state
  function updateAuthUI(user) {
    if (user) {
      // User is logged in
      openLoginBtn.style.display = 'none';
      openSignupBtn.style.display = 'none';

      if (userProfile && userNameDisplay && userAvatar) {
        userProfile.style.display = 'flex';
        const fullName = `${user.first_name || user.firstName} ${user.last_name || user.lastName}`;
        userNameDisplay.textContent = fullName;
        userAvatar.textContent = (fullName || 'U').charAt(0).toUpperCase();
      }

      if (logoutBtn) logoutBtn.style.display = 'inline-block';
    } else {
      // User is logged out
      openLoginBtn.style.display = 'inline-block';
      openSignupBtn.style.display = 'inline-block';

      if (userProfile) userProfile.style.display = 'none';
      if (logoutBtn) logoutBtn.style.display = 'none';
    }
  }

  // Check for persisted user
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    try {
      const user = JSON.parse(storedUser);
      updateAuthUI(user);
    } catch (e) {
      console.error('Failed to parse user data', e);
      localStorage.removeItem('user');
    }
  }

  // Handle Logout
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('user');
      updateAuthUI(null);
      alert('You have been logged out.');
      window.location.reload(); // Optional: reload to reset full state
    });
  }

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

  // ... (Keep existing modal switch logic)
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


  // Navigate to subject pages when cards are clicked
  const subjectCards = {
    pythonCard: 'languages/python/python.html',
    javaCard: 'languages/java/java.html',
    dataScienceCard: 'languages/data-science/data-science.html',
    javascriptCard: 'languages/javascript/javascript.html',
    htmlCssCard: 'languages/html-css/html-css.html',
    webDevCard: 'languages/web-development/web-development.html',
    dataAnalyticsCard: 'languages/data-analytics/data-analytics.html',
    machineLearningCard: 'languages/machine-learning/machine-learning.html',
    webDesignCard: 'languages/web-design/web-design.html',

    // New Languages
    cppCard: 'languages/cpp/cpp.html',
    csharpCard: 'languages/c-sharp/c-sharp.html', // folder name normalized
    cCard: 'languages/c/c.html',
    goCard: 'languages/go/go.html',
    rustCard: 'languages/rust/rust.html',
    swiftCard: 'languages/swift/swift.html',
    kotlinCard: 'languages/kotlin/kotlin.html',
    phpCard: 'languages/php/php.html',
    rubyCard: 'languages/ruby/ruby.html',
    typescriptCard: 'languages/typescript/typescript.html',
    scalaCard: 'languages/scala/scala.html',
    perlCard: 'languages/perl/perl.html',
    luaCard: 'languages/lua/lua.html',
    rCard: 'languages/r/r.html',
    matlabCard: 'languages/matlab/matlab.html',
    assemblyCard: 'languages/assembly/assembly.html',
    sqlCard: 'languages/sql/sql.html',
    nosqlCard: 'languages/nosql/nosql.html',
    mongodbCard: 'languages/mongodb/mongodb.html',
    postgresqlCard: 'languages/postgresql/postgresql.html',
    redisCard: 'languages/redis/redis.html',
    dockerCard: 'languages/docker/docker.html',
    kubernetesCard: 'languages/kubernetes/kubernetes.html',
    awsCard: 'languages/aws/aws.html',
    azureCard: 'languages/azure/azure.html',
    gcpCard: 'languages/gcp/gcp.html',
    androidCard: 'languages/android/android.html',
    iosCard: 'languages/ios/ios.html',
    reactCard: 'languages/react/react.html',
    angularCard: 'languages/angular/angular.html',
    vueCard: 'languages/vue/vue.html',
    nodejsCard: 'languages/nodejs/nodejs.html',
    djangoCard: 'languages/django/django.html',
    flaskCard: 'languages/flask/flask.html',
    springBootCard: 'languages/spring-boot/spring-boot.html',
    unityCard: 'languages/unity/unity.html',
    unrealEngineCard: 'languages/unreal-engine/unreal-engine.html',
    gitCard: 'languages/git/git.html',
    linuxCard: 'languages/linux/linux.html',
    devopsCard: 'languages/devops/devops.html',
    cybersecurityCard: 'languages/cybersecurity/cybersecurity.html',
    blockchainCard: 'languages/blockchain/blockchain.html',
    deepLearningCard: 'languages/deep-learning/deep-learning.html',
    nlpCard: 'languages/nlp/nlp.html',

    // Interview Preparation Topics
    dsaCard: 'interview-preparation/dsa/dsa.html',
    systemDesignCard: 'interview-preparation/system-design/system-design.html',
    behavioralCard: 'interview-preparation/behavioral/behavioral.html',
    codingPracticeCard: 'interview-preparation/coding-practice/coding-practice.html',
    technicalConceptsCard: 'interview-preparation/technical-concepts/technical-concepts.html',
    mockInterviewCard: 'interview-preparation/mock-interviews/mock-interviews.html',

    // Professional Skills Topics
    communicationCard: 'professional-skills/communication/communication.html',
    leadershipCard: 'professional-skills/leadership/leadership.html',
    projectManagementCard: 'professional-skills/project-management/project-management.html',
    teamworkCard: 'professional-skills/teamwork/teamwork.html',
    timeManagementCard: 'professional-skills/time-management/time-management.html',
    problemSolvingCard: 'professional-skills/problem-solving/problem-solving.html',
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
  // ... (Keep existing Logic)
  const allLanguageGrid = document.getElementById('top-subjects-grid');
  const languageCards = allLanguageGrid.querySelectorAll('.card');
  const searchInput = document.getElementById('languageSearch');
  const searchContainer = document.getElementById('languageSearchContainer');

  // Initial Limit: Show only top 8 (4 rows x 2 cols or similar)
  const INITIAL_LIMIT = 8;
  let showAllLanguages = false;
  const showMoreContainer = document.getElementById('showMoreContainer');
  const showMoreBtn = document.getElementById('showMoreLanguages');

  function updateLanguageDisplay(filter = '') {
    let visibleCount = 0;
    let totalMatches = 0;

    languageCards.forEach((card, index) => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      const matches = title.includes(filter.toLowerCase());

      if (matches) totalMatches++;

      if (filter === '') {
        // No search: Show based on showAllLanguages state
        const shouldShow = showAllLanguages || index < INITIAL_LIMIT;

        if (shouldShow) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      } else {
        // Search active: Show all matches
        if (matches) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      }
    });

    // Handle "Show More" button visibility
    if (filter === '') {
      // Only show button if there are more items to show than the limit
      if (languageCards.length > INITIAL_LIMIT) {
        showMoreContainer.style.display = 'block';
        showMoreBtn.textContent = showAllLanguages ? 'Show Less' : 'Show More';
      } else {
        showMoreContainer.style.display = 'none';
      }
    } else {
      // Hide button during search
      showMoreContainer.style.display = 'none';
    }
  }

  // Show More Button Click Handler
  if (showMoreBtn) {
    showMoreBtn.addEventListener('click', () => {
      showAllLanguages = !showAllLanguages;
      updateLanguageDisplay();

      // Optional: Scroll to top of grid when collapsing
      if (!showAllLanguages) {
        document.getElementById('top-subjects-grid').scrollIntoView({ behavior: 'smooth' });
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

  // Toggle Search Bar and Show More Button Visibility based on active tab
  function updateTabSpecificVisibility(tabName) {
    if (tabName === 'top-subjects') {
      searchContainer.classList.remove('hidden');
      // Re-run the display logic to decide if button should show (based on current search/limit)
      updateLanguageDisplay(searchInput ? searchInput.value : '');
    } else {
      searchContainer.classList.add('hidden');
      // Explicitly hide Show More button on other tabs
      if (showMoreContainer) {
        showMoreContainer.style.display = 'none';
      }
    }
  }

  // Hook into existing tab click listener
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const selectedTab = tab.getAttribute('data-tab');
      updateTabSpecificVisibility(selectedTab);
    });
  });

  // Initial state check
  updateTabSpecificVisibility('top-subjects');

  // Handle Signup form submission
  if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(signupForm);
      const data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('signupEmail'),
        password: formData.get('signupPassword')
      };

      try {
        const response = await fetch('/api/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
          alert('Signup successful! Please login.');
          showLoginLink.click(); // Switch to login form
        } else {
          alert('Signup failed: ' + result.error);
        }
      } catch (error) {
        console.error('Error during signup:', error);
        alert('An error occurred during signup.');
      }
    });
  }

  // Handle Login form submission
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(loginForm);
      const data = {
        email: formData.get('email'),
        password: formData.get('password')
      };

      try {
        const response = await fetch('/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
          alert('Login successful! Welcome back, ' + result.data.first_name);
          loginModal.style.display = 'none';

          // Persist user
          localStorage.setItem('user', JSON.stringify(result.data));

          // Update UI
          updateAuthUI(result.data);

        } else {
          alert('Login failed: ' + result.error);
        }
      } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred during login.');
      }
    });
  }

});
