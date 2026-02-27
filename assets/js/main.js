/**
 * Main JavaScript - Tiny & Robust
 * Features: Smooth scroll, active nav, mobile toggle
 */

(function() {
    'use strict';
    
    // ============================================
    // 1. SMOOTH SCROLLING
    // ============================================
    
    const smoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Skip empty hashes
                if (href === '#' || href === '#!') return;
                
                const target = document.querySelector(href);
                if (!target) return;
                
                e.preventDefault();
                
                // Close mobile nav if open
                const nav = document.querySelector('.nav-links, .nav__list');
                if (nav) nav.classList.remove('active');
                
                // Smooth scroll to target
                const headerOffset = 80; // Adjust for sticky header
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            });
        });
    };
    
    // ============================================
    // 2. ACTIVE NAV HIGHLIGHT ON SCROLL
    // ============================================
    
    const highlightActiveNav = () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav a[href^="#"]');
        
        if (!sections.length || !navLinks.length) return;
        
        let scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    
    // Throttle function for performance
    const throttle = (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    };
    
    // ============================================
    // 3. MOBILE NAV TOGGLE
    // ============================================
    
    const mobileNavToggle = () => {
        // Check if mobile toggle button exists
        let toggleBtn = document.querySelector('.nav-toggle');
        const navLinks = document.querySelector('.nav-links, .nav__list');
        
        if (!navLinks) return;
        
        // Create toggle button if it doesn't exist
        if (!toggleBtn) {
            const nav = document.querySelector('.site-nav') || document.querySelector('.header__container');
            if (!nav) return;
            
            toggleBtn = document.createElement('button');
            toggleBtn.className = 'nav-toggle';
            toggleBtn.setAttribute('aria-label', 'Toggle navigation');
            toggleBtn.innerHTML = `
                <span class="nav-toggle-icon"></span>
                <span class="nav-toggle-icon"></span>
                <span class="nav-toggle-icon"></span>
            `;
            
            // Insert before nav links
            nav.insertBefore(toggleBtn, navLinks);
        }
        
        // Toggle functionality
        toggleBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            toggleBtn.classList.toggle('active');
            toggleBtn.setAttribute(
                'aria-expanded',
                toggleBtn.classList.contains('active')
            );
        });
        
        // Close nav when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('nav') && !e.target.closest('.header') && !e.target.closest('.site-header')) {
                navLinks.classList.remove('active');
                toggleBtn.classList.remove('active');
            }
        });
        
        // Close nav on window resize (desktop view)
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (window.innerWidth > 768) {
                    navLinks.classList.remove('active');
                    toggleBtn.classList.remove('active');
                }
            }, 250);
        });
    };
    
    
    // ============================================
    // 5. CONTACT FORM HANDLER
    // ============================================
    
    const setupContactForm = () => {
        const form = document.getElementById('contact-form');
        if (!form) return;
        
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('.form-submit');
            const messageDiv = document.getElementById('form-message');
            
            try {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
                
                const formData = new FormData(form);
                const response = await fetch(form.action, {
                    method: form.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    messageDiv.textContent = '✓ Message sent! We\'ll be in touch soon.';
                    messageDiv.className = 'form-message form-message--success';
                    form.reset();
                    submitBtn.textContent = 'Send Message';
                } else {
                    throw new Error('Server responded with status ' + response.status);
                }
            } catch (error) {
                messageDiv.textContent = '✗ Failed to send message. Please try emailing us directly.';
                messageDiv.className = 'form-message form-message--error';
                submitBtn.textContent = 'Send Message';
            } finally {
                submitBtn.disabled = false;
            }
        });
    };
    
    // ============================================
    // 6. INITIALIZE
    // ============================================
    
    const init = () => {
        // Initialize features
        smoothScroll();
        mobileNavToggle();
        setupContactForm();
        
        // Attach scroll listener with throttling
        window.addEventListener('scroll', throttle(highlightActiveNav, 100));
        
        // Initial highlight
        highlightActiveNav();
    };
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();
