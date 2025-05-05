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
    
    // Load purchased movies from localStorage
    const purchasedMovies = JSON.parse(localStorage.getItem('purchasedMovies')) || [];
    const movieGrid = document.querySelector('.movie-grid');
    
    if (purchasedMovies.length === 0) {
        movieGrid.innerHTML = '<div class="empty-library">Your library is empty. Purchase some movies to see them here!</div>';
    } else {
        // Add each purchased movie to the grid
        purchasedMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
            movieCard.innerHTML = `
                <div class="movie-image" style="background-image: url('${movie.image}')">
                    <div class="movie-overlay">
                        <div class="movie-description">
                            <p>${movie.description}</p>
                        </div>
                        <button class="watch-button" onclick="window.location.href='watch.html?movie=${encodeURIComponent(movie.title)}'">WATCH</button>
                    </div>
                </div>
                <div class="movie-title">${movie.title}</div>
            `;
            movieGrid.appendChild(movieCard);
        });
    }
    
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
});