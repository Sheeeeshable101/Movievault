document.addEventListener('DOMContentLoaded', function() {
    const signInButton = document.getElementById('signInButton');
    
    signInButton.addEventListener('click', function() {
        // Add button click animation
        this.classList.add('clicked');
        
        // Navigate to next page after animation
        setTimeout(() => {
            window.location.href = 'login.html'; // Change to your next page
        }, 500);
    });
});