window.addEventListener('load', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    const loadingText = document.querySelector('.loading-text');
    const loadingBar = document.querySelector('.loading-bar');
    
    // Add initial animation for loading text
    if (loadingText) {
        loadingText.style.opacity = '0';
        loadingText.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        // Fade in text
        setTimeout(() => {
            loadingText.style.opacity = '1';
           
        }, 100);
    }
    
    // Animate loading bar
    if (loadingBar) {
        setTimeout(() => {
            loadingBar.style.width = '100%';
        }, 100);
    }
    
    // Start exit animation
    setTimeout(function() {
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.transition = 'opacity 0.5s ease';
            
            // Remove from DOM after animation
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                document.body.classList.add('loaded');
            }, 500);
        }
    }, 1500);
});

