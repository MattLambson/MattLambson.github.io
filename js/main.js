document.addEventListener('DOMContentLoaded', function () {
    // Initialize Trace
    // initTraceAnimation(); // Removed as function is missing

    // Theme Toggle Functionality (Consolidated and Fixed)
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    if (themeToggle && themeIcon) {
        // Check for saved theme preference or default to dark
        const savedTheme = localStorage.getItem('theme') || 'dark';

        // Apply saved theme
        body.setAttribute('data-theme', savedTheme);

        // Update icon based on saved theme
        if (savedTheme === 'light') {
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }

        // Theme toggle event listener
        themeToggle.addEventListener('click', function () {
            const currentTheme = body.getAttribute('data-theme');

            if (currentTheme === 'light') {
                // Switch to dark
                body.setAttribute('data-theme', 'dark');
                themeIcon.className = 'fas fa-moon';
                localStorage.setItem('theme', 'dark');
            } else {
                // Switch to light
                body.setAttribute('data-theme', 'light');
                themeIcon.className = 'fas fa-sun';
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // Mobile Menu Functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            navMenu.classList.toggle('open');

            // Change icon
            const icon = mobileMenuBtn.querySelector('i');
            if (navMenu.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!mobileMenuBtn.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('open');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Tab Switching Functionality (for projects page)
    window.switchTab = function (tabName) {
        // Remove active class from all tab buttons and content
        document.querySelectorAll('.tab-button').forEach(button => {
            button.classList.remove('active');
        });
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        // Add active class to clicked button
        event.target.classList.add('active');

        // Show corresponding tab content
        const targetTab = document.getElementById(tabName + '-tab');
        if (targetTab) {
            targetTab.classList.add('active');
        }
    };

    // Make sure the first tab is active by default (for projects page)
    const firstTab = document.querySelector('.tab-button');
    const firstContent = document.querySelector('.tab-content');

    if (firstTab && firstContent) {
        firstTab.classList.add('active');
        firstContent.classList.add('active');
    }

    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage ||
            (currentPage === 'index.html' && linkHref.startsWith('#'))) {
            link.parentElement.classList.add('active');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update active navigation state for anchor links
                navLinks.forEach(link => {
                    link.parentElement.classList.remove('active');
                });
                this.parentElement.classList.add('active');
            }
        });
    });

    // Enhanced loading animation with theme consideration
    window.addEventListener('load', function () {
        document.body.classList.add('loaded');

        // Add smooth transitions after page load to prevent flash
        setTimeout(() => {
            if (!document.body.style.transition) {
                document.body.style.transition = 'all 0.3s ease';
            }
        }, 100);

        // Homepage animation sequence trigger
        if (document.body.classList.contains('home-page')) {
            initializeHomepageAnimations();
        }
    });

    // Enhanced scroll reveal animation
    window.addEventListener('scroll', debounce(function () {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });

        // Update active navigation based on scroll position
        updateActiveNavOnScroll();
    }, 10));

    // Enhanced project card interactions (if on projects page)
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(-5px) scale(1)';
        });
    });

    // Limit index field notes feed to 10 entries
    const indexBlogFeed = document.getElementById('indexBlogFeed');
    if (indexBlogFeed) {
        const feedLinks = indexBlogFeed.querySelectorAll('a.blog-entry-link');
        if (feedLinks.length > 10) {
            // Hide entries after the 10th one
            for (let i = 10; i < feedLinks.length; i++) {
                feedLinks[i].style.display = 'none';
            }
        }
    }
});

// ========================================
// TRACE ANIMATION (UPDATED)
// ========================================
// Trace animation removed (Replaced by Collaboration Hub)

// ========================================
// HELPER FUNCTIONS
// ========================================

function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id], .section-card[id], .bottom-sections');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.parentElement.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.parentElement.classList.add('active');
        }
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    return (
        rect.top >= -100 &&
        rect.left >= 0 &&
        rect.bottom <= windowHeight + 100 &&
        rect.right <= windowWidth
    );
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}