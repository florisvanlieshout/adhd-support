// Simple password protection for ADHD Support website
(function() {
    const correctPassword = "adhd2026"; // Change this to your preferred password
    const passwordPrompt = "Enter password to access this site:";
    
    // Check if user has already authenticated
    if (sessionStorage.getItem('authenticated') !== 'true') {
        const password = prompt(passwordPrompt);
        if (password === correctPassword) {
            sessionStorage.setItem('authenticated', 'true');
        } else {
            alert('Incorrect password. Access denied.');
            window.location.href = 'https://github.com';
        }
    }
})();