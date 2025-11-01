// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const loginModal = document.getElementById('loginModal');
  const loginModals = document.getElementById('loginModals');
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
    loginModals.style.display = 'flex';
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
   loginModals.addEventListener('click', (e) => {
    if (e.target === loginModals) {
      loginModals.style.display = 'none';
    }
  });
});

  
