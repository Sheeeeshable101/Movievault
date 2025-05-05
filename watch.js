document.addEventListener('DOMContentLoaded', function() {
    // Highlight current page in sidebar
    const currentPage = window.location.pathname.split('/').pop();
    const sidebarIcons = document.querySelectorAll('.sidebar-icon');
    
    sidebarIcons.forEach(icon => {
        icon.classList.remove('active');
        
        if (currentPage === 'home.html' && icon.querySelector('.fa-home')) {
            icon.classList.add('active');
        } else if (currentPage === 'categories.html' && icon.querySelector('.fa-list')) {
            icon.classList.add('active');
        } else if (currentPage === 'library.html' && icon.querySelector('.fa-bookmark')) {
            icon.classList.add('active');
        }
    });

    // Get movie title from URL parameters if needed
    const urlParams = new URLSearchParams(window.location.search);
    const movieTitle = urlParams.get('movie');
    
    if (movieTitle) {
        document.querySelector('header h1').textContent = `WATCH: ${decodeURIComponent(movieTitle)}`;
    }
});