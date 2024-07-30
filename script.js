document.addEventListener('DOMContentLoaded', () => {
    function loadPage(page) {
        fetch(`${page}.html`)
            .then(response => response.text())
            .then(data => {
                const content = document.getElementById('content');
                content.classList.add('fade-out');
                setTimeout(() => {
                    content.innerHTML = data;
                    content.classList.remove('fade-out');
                    content.classList.add('fade-in');
                    setTimeout(() => {
                        content.classList.remove('fade-in');
                    }, 1000);
                }, 1000); // Increased timeout to match the CSS transition duration
            });
    }

    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.substring(1);
        loadPage(hash);
    });

    // Load initial page
    if (window.location.hash) {
        loadPage(window.location.hash.substring(1));
    } else {
        window.location.hash = '#about';
    }
});
