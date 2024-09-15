// Dummy credentials for login (you can replace this with actual authentication logic)
const validUsername = 'Pavan';
const validPassword = '12345';

// Handle login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');
    
    // Check if the credentials are correct
    if (username === validUsername && password === validPassword) {
        // Store login status in localStorage
        localStorage.setItem('isLoggedIn', true);
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
        errorMsg.textContent = 'Invalid username or password.';
        errorMsg.style.display = 'block'; // Show error message
    }
});
