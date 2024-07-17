
window.addEventListener('load', function() {
    var loadingScreen = document.querySelector('.loading-screen');
    var websiteContent = document.getElementById('website-content');

  
    setTimeout(function() {
        loadingScreen.style.display = 'none'; 
        websiteContent.style.display = 'block'; 
    }, 700); 
});
