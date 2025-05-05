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
    
    // Add smooth transitions for movie cards
    const movieCards = document.querySelectorAll('.movie-card');
    
    movieCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'transform 0.3s ease';
        });
    });

    // Add hover effects for category buttons
    const categoryButtons = document.querySelectorAll('.category-button');
    
    categoryButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
});