document.addEventListener('DOMContentLoaded', function() {
    
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
        themeToggle.addEventListener('click', function() {
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
        mobileMenuBtn.addEventListener('click', function() {
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
        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('mobile-active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Tab Switching Functionality (for projects page)
    window.switchTab = function(tabName) {
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
    window.addEventListener('load', function() {
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
    window.addEventListener('scroll', debounce(function() {
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
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px) scale(1)';
        });
    });
    
    // Add intersection observer for better performance on scroll animations
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        // Observe elements that should animate on scroll
        document.querySelectorAll('.animate-on-scroll, .section-card, .project-card').forEach(el => {
            observer.observe(el);
        });
    }
    
    // Handle contact form submission (if contact form exists)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const formObject = Object.fromEntries(formData);
            
            showNotification('Message sent successfully!', 'success');
            this.reset();
        });
    }
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Toggle theme with Ctrl/Cmd + D
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            if (themeToggle) {
                themeToggle.click();
            }
        }
        
        // Close any open modals with Escape key
        if (e.key === 'Escape') {
            const openModals = document.querySelectorAll('.modal.active');
            openModals.forEach(modal => {
                modal.classList.remove('active');
            });
        }
    });
    
    // Calendly button functionality (if exists on contact page)
    const calendlyButton = document.querySelector('.calendly-button');
    if (calendlyButton) {
        calendlyButton.addEventListener('click', function(e) {
            e.preventDefault();
            // Replace with your actual Calendly link
            window.open('https://calendly.com/matthew-lambson/60min', '_blank');
        });
    }
});

// ========================================
// HOMEPAGE ANIMATION SEQUENCE
// ========================================
function initializeHomepageAnimations() {
    // Prevent animation replays
    let animationsTriggered = false;
    
    if (!animationsTriggered) {
        sessionStorage.setItem('homepage-animations-played', 'true');
        console.log('Homepage micro-animations initiated');
        
        // All animations are CSS-driven via keyframes
        // This function just logs confirmation and can be extended for JS-driven effects
        
        // Optional: Add subtle parallax effect to profile image
        addProfileParallax();
    } else {
        // Skip animations on subsequent page visits (same session)
        skipAnimations();
    }
}

function skipAnimations() {
    // Instantly show all animated elements without animation
    const animatedElements = [
        '.greeting-header',
        '.hero-subtitle',
        '.description',
        '.btn-primary',
        '.loop-step',
        '.social-icons',
        '.section-card'
    ];
    
    animatedElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.style.animation = 'none';
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    });
}

function addProfileParallax() {
    const profileImage = document.querySelector('.profile-image');
    
    if (profileImage) {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.pageYOffset;
                    const rate = scrolled * 0.3;
                    
                    if (scrolled < 800) {
                        profileImage.style.transform = `translateY(${rate}px)`;
                    }
                    
                    ticking = false;
                });
                
                ticking = true;
            }
        });
    }
}

// ========================================
// HELPER FUNCTIONS
// ========================================

// Function to update active navigation based on scroll position
function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id], .section-card[id], .bottom-sections');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
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

// Helper function to check if element is in viewport
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

// Utility function to debounce scroll events for better performance
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

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Use CSS variables for theming
    const bgColor = type === 'success' ? 'var(--red-accent)' : 'var(--red-accent)';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${bgColor};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 15px var(--red-glow);
        z-index: 9999;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add loading states for async operations
function showLoading(element) {
    element.style.opacity = '0.6';
    element.style.pointerEvents = 'none';
}

function hideLoading(element) {
    element.style.opacity = '1';
    element.style.pointerEvents = 'auto';
}