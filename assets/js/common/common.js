document.addEventListener('DOMContentLoaded', function() {
  // Set active nav item based on current page
  function setActiveNavItem() {
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-item');
    
    // Default to analytics if we're at the root
    if (currentPath === '/' || currentPath.endsWith('index.html')) {
      setActive('analytics');
      return;
    }
    
    // Check which section we're in
    if (currentPath.includes('/analytics/')) {
      setActive('analytics');
    } else if (currentPath.includes('/menu/')) {
      setActive('menu');
    } else if (currentPath.includes('/orders/')) {
      setActive('orders');
    } else if (currentPath.includes('/profile/')) {
      setActive('profile');
    }
    
    function setActive(page) {
      navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href && href.includes(page)) {
          item.classList.add('active');
          item.setAttribute('aria-current', 'page');
        } else {
          item.classList.remove('active');
          item.removeAttribute('aria-current');
        }
      });
    }
  }
  
  // Initialize
  setActiveNavItem();
});