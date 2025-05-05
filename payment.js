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

    // Get movie data from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const movieTitle = urlParams.get('title') || "Movie Title";
    const movieImage = urlParams.get('image') || "placeholder.jpg";
    const movieDescription = urlParams.get('description') || "Movie description will appear here...";
    const action = urlParams.get('action') || "buy";

    // Set movie info
    document.getElementById('payment-movie-title').textContent = movieTitle;
    document.getElementById('payment-movie-description').textContent = movieDescription;
    document.getElementById('payment-movie-poster').style.backgroundImage = `url('${movieImage}')`;

    // Set initial selected option
    if (action === 'rent') {
        document.querySelector('.option[data-type="rent"]').classList.add('selected');
        document.querySelector('.option[data-type="buy"]').classList.remove('selected');
    }

    // Payment option selection
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Form submission
    document.querySelector('.payment-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get selected option
        const selectedOption = document.querySelector('.option.selected').getAttribute('data-type');
        const price = document.querySelector('.option.selected .price').textContent;
        
        // Validate form
        const cardNumber = document.getElementById('card-number').value;
        const expiryDate = document.getElementById('expiry-date').value;
        const cvv = document.getElementById('cvv').value;
        const cardName = document.getElementById('card-name').value;
        
        if (!cardNumber || !expiryDate || !cvv || !cardName) {
            alert('Please fill in all payment details');
            return;
        }

        // In a real app, you would process payment here
        // For demo purposes, we'll simulate a successful payment
        
        // Save to purchased movies in localStorage
        if (selectedOption === 'buy') {
            let purchasedMovies = JSON.parse(localStorage.getItem('purchasedMovies')) || [];
            
            // Check if movie is already purchased
            const alreadyPurchased = purchasedMovies.some(movie => movie.title === movieTitle);
            
            if (!alreadyPurchased) {
                purchasedMovies.push({
                    title: movieTitle,
                    image: movieImage,
                    description: movieDescription
                });
                localStorage.setItem('purchasedMovies', JSON.stringify(purchasedMovies));
            }
        }
        
        // Redirect to thank you page or library
        alert(`Payment successful! Thank you for your ${selectedOption}.`);
        window.location.href = 'library.html';
    });

    // Format card number input
    document.getElementById('card-number').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '');
        if (value.length > 0) {
            value = value.match(new RegExp('.{1,4}', 'g')).join(' ');
        }
        e.target.value = value;
    });

    // Format expiry date input
    document.getElementById('expiry-date').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        e.target.value = value;
    });
});