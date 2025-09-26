// Navigation Utility Functions
(function() {
  /**
   * Set up mobile navigation toggle functionality
   * with proper existence checks to prevent errors
   */
  function setupMobileNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Check if toggle button and menu exist before adding event listeners
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
    }

    // Check if navLinks exist before adding event listeners
    if (navLinks && navLinks.length > 0 && navMenu) {
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
        });
      });
    }
  }

  // Initialize when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupMobileNavigation);
  } else {
    setupMobileNavigation();
  }
})();