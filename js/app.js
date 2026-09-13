// app.js - Core application logic

// Utility to get URL parameters
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Generate Navbar
function renderNavbar() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const navbarHtml = `
    <div class="container">
      <a href="index.html" class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-film"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
        Movie<span>Nove</span>
      </a>
      <div class="nav-links">
        <a href="index.html">Home</a>
        <a href="index.html#movies">Movies</a>
        ${currentUser && currentUser.role === 'admin' ? '<a href="admin-dashboard.html">Admin Dashboard</a>' : ''}
      </div>
      <div class="user-actions">
        ${currentUser ? `
          <a href="my-bookings.html" class="btn btn-outline btn-small">My Bookings</a>
          <button onclick="logout()" class="btn btn-small">Logout</button>
        ` : `
          <a href="login.html" class="btn btn-outline btn-small">Login</a>
          <a href="register.html" class="btn btn-small">Register</a>
        `}
      </div>
    </div>
  `;

  const navElement = document.getElementById('navbar');
  if (navElement) {
    navElement.innerHTML = navbarHtml;
  }
}

// Generate Footer
function renderFooter() {
  const footerHtml = `
    <div class="container">
      <div class="footer-content">
        <p>&copy; 2026 CineNova Booking System. All rights reserved.</p>
        <p class="mt-1" style="font-size: 0.8rem;">Software Engineering Project Showcase</p>
      </div>
    </div>
  `;

  const footerElement = document.getElementById('footer');
  if (footerElement) {
    footerElement.innerHTML = footerHtml;
  }
}

// Logout function
function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}

// Format Currency
function formatCurrency(amount) {
  return '$' + amount.toFixed(2);
}

// Check Authentication
function checkAuth(requireAdmin = false) {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (!currentUser) {
    window.location.href = 'login.html';
    return false;
  }

  if (requireAdmin && currentUser.role !== 'admin') {
    window.location.href = 'index.html';
    return false;
  }

  return currentUser;
}

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();
});

