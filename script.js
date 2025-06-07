document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeSwitch = document.getElementById('theme-switch');
    const themeLabel = document.querySelector('.theme-label');
    
    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        themeSwitch.checked = true;
        themeLabel.textContent = '🌞';
    }

    themeSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark');
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
        themeLabel.textContent = document.body.classList.contains('dark') ? '🌞' : '🌙';
    });

    // Contact Form Submission (only on index.html)
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (name && email && message) {
                alert('Thank you for your message! I will get back to you soon.');
                form.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }

    // Smooth Scroll for Nav Links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
            // Allow navigation to projects.html without preventing default
        });
    });
});