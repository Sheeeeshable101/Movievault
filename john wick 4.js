// Movie Page Specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Buy/Rent button functionality
    const buyRentBtn = document.querySelector('.buy-rent-btn');
    if (buyRentBtn) {
        buyRentBtn.addEventListener('click', function() {
            // Add your purchase/rental logic here
            alert('Purchase/Rental option would open here');
            
            // Example: Redirect to checkout page
            // window.location.href = 'checkout.html?movie=john-wick-4';
        });
    }

    // Related movie cards animation
    const relatedCards = document.querySelectorAll('.related-movie-card');
    relatedCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'transform 0.3s ease';
        });
        
        // Click animation
        card.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                window.location.href = 'movie.html';
            }, 300);
        });
    });
});