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

    // New Languages
    cppCard: 'langues/cpp/cpp.html',
    csharpCard: 'langues/c-sharp/c-sharp.html', // folder name normalized
    cCard: 'langues/c/c.html',
    goCard: 'langues/go/go.html',
    rustCard: 'langues/rust/rust.html',
    swiftCard: 'langues/swift/swift.html',
    kotlinCard: 'langues/kotlin/kotlin.html',
    phpCard: 'langues/php/php.html',
    rubyCard: 'langues/ruby/ruby.html',
    typescriptCard: 'langues/typescript/typescript.html',
    scalaCard: 'langues/scala/scala.html',
    perlCard: 'langues/perl/perl.html',
    luaCard: 'langues/lua/lua.html',
    rCard: 'langues/r/r.html',
    matlabCard: 'langues/matlab/matlab.html',
    assemblyCard: 'langues/assembly/assembly.html',
    sqlCard: 'langues/sql/sql.html',
    nosqlCard: 'langues/nosql/nosql.html',
    mongodbCard: 'langues/mongodb/mongodb.html',
    postgresqlCard: 'langues/postgresql/postgresql.html',
    redisCard: 'langues/redis/redis.html',
    dockerCard: 'langues/docker/docker.html',
    kubernetesCard: 'langues/kubernetes/kubernetes.html',
    awsCard: 'langues/aws/aws.html',
    azureCard: 'langues/azure/azure.html',
    gcpCard: 'langues/google-cloud/google-cloud.html', // normalized form
    androidCard: 'langues/android/android.html',
    iosCard: 'langues/ios/ios.html',
    reactCard: 'langues/react/react.html',
    angularCard: 'langues/angular/angular.html',
    vueCard: 'langues/vue.js/vue.js.html', // Check normalizer
    nodejsCard: 'langues/node.js/node.js.html', // Check normalizer
    djangoCard: 'langues/django/django.html',
    flaskCard: 'langues/flask/flask.html',
    springBootCard: 'langues/spring-boot/spring-boot.html',
    unityCard: 'langues/unity/unity.html',
    unrealEngineCard: 'langues/unreal-engine/unreal-engine.html',
    gitCard: 'langues/git/git.html',
    linuxCard: 'langues/linux/linux.html',
    devopsCard: 'langues/devops/devops.html',
    cybersecurityCard: 'langues/cybersecurity/cybersecurity.html',
    blockchainCard: 'langues/blockchain/blockchain.html',
    deepLearningCard: 'langues/deep-learning/deep-learning.html',
    nlpCard: 'langues/nlp/nlp.html',

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
