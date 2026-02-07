document.addEventListener('DOMContentLoaded', function () {
    // Initialize Trace
    initTraceAnimation();

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
            navMenu.classList.toggle('mobile-active');

            // Change icon
            const icon = mobileMenuBtn.querySelector('i');
            if (navMenu.classList.contains('mobile-active')) {
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
                navMenu.classList.remove('mobile-active');
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
});

// ========================================
// TRACE ANIMATION (UPDATED)
// ========================================
function initTraceAnimation() {
    const traceOutput = document.getElementById('traceOutput');
    if (!traceOutput) return;

    // Updated Trace Sequence
    const traceLines = [
        { text: "Request: Deploy multi-agent communication system for [Prospect_Name]", delay: 500 },
        { text: "Initializing Agentic AI... model: <span class='highlight'>Model Selected</span>", delay: 800 },
        { text: "Injecting HALO Platform (CM.com) orchestration logic", delay: 1200 },
        { text: "Validating messaging routes (WhatsApp/LiveChat)... <span class='highlight'>Success</span>", delay: 1600 },
        { text: "Connecting CM.com CDP & external data platforms... <span class='highlight'>Active</span>", delay: 2000 },
        { text: "Deployment Complete: Solution Environment <span class='highlight'>Live!</span>", delay: 2400 }
    ];

    let currentLineIndex = 0;
    let traceTimeout;

    function startTrace() {
        // Clear existing content and reset index
        traceOutput.innerHTML = '';
        currentLineIndex = 0;
        typeLine();
    }

    function typeLine() {
        if (currentLineIndex >= traceLines.length) {
            // Animation complete, schedule reset
            setTimeout(startTrace, 120000); // Reset after 2 minutes (120,000 ms)
            return;
        }

        const lineData = traceLines[currentLineIndex];
        const lineEl = document.createElement('div');
        lineEl.className = 'trace-line';
        const plainText = lineEl.textContent;
        lineEl.innerHTML = '';
        lineEl.classList.add('visible');

        traceOutput.appendChild(lineEl);

        // Simple typing effect or just show full line? 
        // Let's do the typing effect from before
        let charIndex = 0;
        // Strip HTML tags for typing
        const textToType = lineData.text.replace(/<[^>]*>/g, '');

        const typeChar = () => {
            // For simplicity in this overwritten version, we might just set the text content
            // to ensure reliability, but let's try to simulate typing:
            if (charIndex < textToType.length) {
                lineEl.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, 20);
            } else {
                // Restore HTML
                if (lineData.text.includes('<span')) {
                    lineEl.innerHTML = lineData.text;
                }

                traceOutput.scrollTop = traceOutput.scrollHeight;
                currentLineIndex++;
                traceTimeout = setTimeout(typeLine, lineData.delay || 500);
            }
        };

        typeChar();
    }

    // Start the initial trace
    setTimeout(startTrace, 1000);
}

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