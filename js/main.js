/**
 * Serenity Insurance Brokerage
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initLoader();
    initHeader();
    initMobileMenu();
    initHeroSwiper();
    initWelcomeSwiper();
    initAOS();
    initSmoothScroll();
    initBackToTop();
    initContactForm();
    initNewsletterForm();
    initNavHighlight();
});

/**
 * Page Loader
 */
function initLoader() {
    const loader = document.getElementById('loader');

    window.addEventListener('load', function() {
        setTimeout(function() {
            loader.classList.add('hidden');
            document.body.style.overflow = 'visible';
        }, 1500);
    });
}

/**
 * Header Scroll Effect
 */
function initHeader() {
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

/**
 * Hero Swiper Carousel
 */
function initHeroSwiper() {
    new Swiper('.hero-swiper', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.hero-swiper .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.hero-swiper .swiper-button-next',
            prevEl: '.hero-swiper .swiper-button-prev',
        },
        on: {
            slideChange: function() {
                // Reset animations on slide change
                const activeSlide = this.slides[this.activeIndex];
                const content = activeSlide.querySelector('.hero-content');
                if (content) {
                    content.style.animation = 'none';
                    content.offsetHeight; // Trigger reflow
                    content.style.animation = null;
                }
            }
        }
    });
}

/**
 * Welcome Section Swiper
 */
function initWelcomeSwiper() {
    new Swiper('.welcome-swiper', {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.welcome-swiper .swiper-button-next',
            prevEl: '.welcome-swiper .swiper-button-prev',
        },
    });
}

/**
 * AOS (Animate On Scroll) Initialization
 */
function initAOS() {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
        disable: function() {
            // Disable on very slow connections
            return window.innerWidth < 768 && 'connection' in navigator && navigator.connection.saveData;
        }
    });
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Back to Top Button
 */
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Contact Form (Visual Only - Opens Email)
 */
function initContactForm() {
    const form = document.getElementById('contactForm');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        const phone = form.querySelector('#phone').value;
        const service = form.querySelector('#service').value;
        const message = form.querySelector('#message').value;

        // Build email body
        const subject = encodeURIComponent('Quote Request from ' + name);
        const body = encodeURIComponent(
            'Name: ' + name + '\n' +
            'Email: ' + email + '\n' +
            'Phone: ' + phone + '\n' +
            'Service: ' + service + '\n\n' +
            'Message:\n' + message
        );

        // Open email client
        window.location.href = 'mailto:david@serenityins.com?subject=' + subject + '&body=' + body;

        // Show success feedback
        showFormSuccess(form, 'Opening your email client...');
    });
}

/**
 * Newsletter Form
 */
function initNewsletterForm() {
    const form = document.getElementById('newsletterForm');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = form.querySelector('input[type="email"]').value;

        // Open email client with subscription request
        const subject = encodeURIComponent('Newsletter Subscription Request');
        const body = encodeURIComponent('Please add this email to your newsletter: ' + email);

        window.location.href = 'mailto:david@serenityins.com?subject=' + subject + '&body=' + body;

        // Clear form
        form.reset();

        // Show success feedback
        showFormSuccess(form, 'Thank you for subscribing!');
    });
}

/**
 * Show Form Success Message
 */
function showFormSuccess(form, message) {
    // Create success message element
    const successEl = document.createElement('div');
    successEl.className = 'form-success';
    successEl.textContent = message;
    successEl.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #10b981;
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        font-weight: 500;
        z-index: 10;
        animation: fadeIn 0.3s ease;
    `;

    // Add animation keyframes if not exists
    if (!document.getElementById('form-animations')) {
        const style = document.createElement('style');
        style.id = 'form-animations';
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
                to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            }
        `;
        document.head.appendChild(style);
    }

    // Add to form
    form.style.position = 'relative';
    form.appendChild(successEl);

    // Remove after 3 seconds
    setTimeout(function() {
        successEl.remove();
    }, 3000);
}

/**
 * Navigation Active State on Scroll
 */
function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNav() {
        const scrollPos = window.pageYOffset + 200;

        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNav);
    highlightNav(); // Initial check
}

/**
 * Intersection Observer for lazy animations
 */
function initLazyAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(function(el) {
        observer.observe(el);
    });
}

/**
 * Parallax Effect (Subtle)
 */
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach(function(el) {
            const speed = el.dataset.parallax || 0.5;
            const yPos = -(scrolled * speed);
            el.style.transform = 'translateY(' + yPos + 'px)';
        });
    });
}

/**
 * Utility: Debounce Function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = function() {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Utility: Throttle Function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(function() {
                inThrottle = false;
            }, limit);
        }
    };
}

// Handle window resize
window.addEventListener('resize', debounce(function() {
    AOS.refresh();
}, 250));

// Console welcome message
console.log('%c Serenity Insurance Brokerage ', 'background: #C41E3A; color: white; font-size: 16px; padding: 8px 16px; border-radius: 4px;');
console.log('%c Protecting what matters most ', 'color: #666; font-size: 12px;');
