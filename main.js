document.addEventListener('DOMContentLoaded', function () {
    // Custom cursor logic
    const cursor = document.querySelector('.custom-cursor');
    window.addEventListener('mousemove', e => {
        cursor.style.top = e.clientY + 'px';
        cursor.style.left = e.clientX + 'px';
    });

    document.querySelectorAll('a, button, .hover-glow').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('expand'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('expand'));
    });

    // Scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Animate progress bars
                if (entry.target.classList.contains('skills-section')) {
                    document.querySelectorAll('.progress-fill').forEach(bar => {
                        bar.style.width = bar.dataset.width + '%';
                    });
                }
                // Animate stat numbers
                if (entry.target.classList.contains('about-section')) {
                    document.querySelectorAll('.stat-number').forEach(num => {
                        const target = +num.dataset.target;
                        let current = 0;
                        const increment = target / 100;
                        const interval = setInterval(() => {
                            current += increment;
                            num.textContent = Math.ceil(current);
                            if (current >= target) {
                                num.textContent = target;
                                clearInterval(interval);
                            }
                        }, 20);
                    });
                }
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Scroll progress bar
    const scrollProgressBar = document.querySelector('.progress-scroll');
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        scrollProgressBar.style.width = scrollPercentage + '%';
    });

    // Modal functionality
    const modal = document.getElementById('contactModal');
    window.openModal = function () {
        modal.style.display = 'block';
    }
    window.closeModal = function () {
        modal.style.display = 'none';
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Smooth scroll for navigation
    window.scrollToSection = function (id) {
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        });
    }

    // Particle system generation
    const particleContainer = document.getElementById('particleSystem');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle-enhanced');
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = 10 + Math.random() * 10 + 's';
        particleContainer.appendChild(particle);
    }

    // Matrix background generation
    const matrixContainer = document.getElementById('matrixBg');
    const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*()*&^%';
    for (let i = 0; i < 30; i++) {
        const column = document.createElement('div');
        column.classList.add('matrix-column');
        column.style.left = i * 3.3 + '%';
        column.style.animationDelay = Math.random() * 10 + 's';
        let text = '';
        for (let j = 0; j < 50; j++) {
            text += matrixChars.charAt(Math.floor(Math.random() * matrixChars.length)) + '<br>';
        }
        column.innerHTML = text;
        matrixContainer.appendChild(column);
    }

    // Decoration dots generation
    const dotsContainer = document.getElementById('decorationDots');
    for (let i = 0; i < 100; i++) {
        const dot = document.createElement('div');
        dot.classList.add('deco-dot');
        dot.style.left = Math.random() * 100 + '%';
        dot.style.top = Math.random() * 100 + '%';
        dot.style.animationDelay = Math.random() * 3 + 's';
        dotsContainer.appendChild(dot);
    }

    // Music controls (mock)
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const soundWave = document.querySelector('.sound-wave');
    playBtn.addEventListener('click', () => {
        soundWave.style.animationPlayState = 'running';
        document.querySelectorAll('.wave-bar').forEach(bar => bar.style.animationPlayState = 'running');
        console.log('Music playing (mock)');
    });
    pauseBtn.addEventListener('click', () => {
        soundWave.style.animationPlayState = 'paused';
        document.querySelectorAll('.wave-bar').forEach(bar => bar.style.animationPlayState = 'paused');
        console.log('Music paused (mock)');
    });
});