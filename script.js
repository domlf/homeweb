document.addEventListener("DOMContentLoaded", function() {
    let loadingBar = document.getElementById('loadingBar');
    let mainContent = document.querySelector('main');

    // Simulate loading progress
    let width = 0;
    let interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            loadingBar.style.width = '100%';

            // Show main content after loading is complete
            mainContent.style.display = 'block';
        } else {
            width += 30;
            loadingBar.style.width = width + '%';
        }
    }, 300);
});

anime({
    targets: '.wave',
    translateX: ['0', '-50%'],
    easing: 'linear',
    duration: 3000,
    loop: true,
  });

  const resizeOps = () => {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
  };

  resizeOps();
  window.addEventListener("resize", resizeOps);
  