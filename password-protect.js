// Simple password protection for ADHD Support website
(function() {
    const correctPassword = "adhd2026";
    const passwordPrompt = "Enter password to access this site:";
    
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