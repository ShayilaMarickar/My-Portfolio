// Get the theme toggle button
const themeToggle = document.getElementById('theme-toggle');


themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        themeToggle.textContent = '🌙'; 
    } else {
        themeToggle.textContent = '☀️'; 
    }
    
    // REMOVE localStorage for now - just for testing
    // localStorage.setItem('theme', ...);
});