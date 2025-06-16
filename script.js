function updateNavbar() {
    const navLink = document.getElementById('nav-login-profile-link');

    if (!navLink) {
        return;
    }

    if (localStorage.getItem('isLoggedIn') === 'true') {
        navLink.textContent = 'Profil';
        navLink.href = 'profil.html';
    } else {
        navLink.textContent = 'Login';
        navLink.href = 'login.html';
    }
}

document.addEventListener('DOMContentLoaded', updateNavbar);