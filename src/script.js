document.addEventListener('DOMContentLoaded', function() {
    const decreaseBtn = document.getElementById('decrease-font');
    const increaseBtn = document.getElementById('increase-font');
    const fontTypeSelect = document.getElementById('font-type');
    const lightThemeBtn = document.getElementById('light-theme');
    const darkThemeBtn = document.getElementById('dark-theme');
    const toggleSkills = document.getElementById('toggle-skills');
    const skillsList = document.getElementById('skills-list');  // Define the skills list element

    let currentFontSize = parseInt(localStorage.getItem('fontSize')) || 16;

    // Font size adjustment
    function updateFontSize(size) {
        document.documentElement.style.fontSize = `${size}px`;
        localStorage.setItem('fontSize', size);
    }

    if (decreaseBtn && increaseBtn) {
        decreaseBtn.addEventListener('click', function() {
            if (currentFontSize > 12) {
                currentFontSize -= 2;
                updateFontSize(currentFontSize);
            }
        });

        increaseBtn.addEventListener('click', function() {
            if (currentFontSize < 24) {
                currentFontSize += 2;
                updateFontSize(currentFontSize);
            }
        });
    }

    // Font type adjustment
    fontTypeSelect.addEventListener('change', function() {
        const selectedFont = this.value;
        document.documentElement.style.setProperty('--font-family', selectedFont);
        localStorage.setItem('fontType', selectedFont);
    });

    // Theme switching
    function setTheme(theme) {
        document.body.className = theme + '-theme';
        localStorage.setItem('theme', theme);
    }

    lightThemeBtn.addEventListener('click', () => setTheme('light'));
    darkThemeBtn.addEventListener('click', () => setTheme('dark'));

    // Apply the theme from localStorage on page load
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // Skills toggle
    if (toggleSkills && skillsList) {
        toggleSkills.addEventListener('click', function() {
            const isExpanded = toggleSkills.getAttribute('aria-expanded') === 'true';
            toggleSkills.setAttribute('aria-expanded', !isExpanded);
            skillsList.hidden = isExpanded;
            toggleSkills.querySelector('.toggle-icon').style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
        });
    }

    // Image Gallery Lightbox
    if (galleryImages.length && lightbox && lightboxImg && closeLightbox) {
        galleryImages.forEach(img => {
            img.addEventListener('click', function() {
                lightboxImg.src = this.src;
                lightboxImg.alt = this.alt;
                lightboxCaption.innerHTML = this.alt;
                lightbox.style.display = "block";
            });
        });

        closeLightbox.addEventListener('click', function() {
            lightbox.style.display = "none";
        });

        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.style.display = "none";
            }
        });
    }

    // Scroll Progress Indicator
    const scrollProgress = document.getElementById('scroll-progress');

    function updateScrollProgress() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        scrollProgress.style.width = scrollPercentage + '%';
    }

    window.addEventListener('scroll', updateScrollProgress);
    window.addEventListener('resize', updateScrollProgress);

    // Initial call to set scroll progress on page load
    updateScrollProgress();

    // Initialize settings from localStorage
    updateFontSize(currentFontSize);
    document.documentElement.style.setProperty('--font-family', localStorage.getItem('fontType') || 'sans-serif');
    fontTypeSelect.value = localStorage.getItem('fontType') || 'sans-serif';
});
