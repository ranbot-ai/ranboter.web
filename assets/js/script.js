// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }

        lastScrollTop = scrollTop;
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .step, .section-header');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Button click handlers
    const primaryButtons = document.querySelectorAll('.primary-button, .cta-button');
    primaryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

            // Simulate Chrome Web Store redirect
            console.log('Redirecting to Chrome Web Store...');
            window.open('https://chromewebstore.google.com/detail/ranboter/nmdmfikkicpdphdnjgnhogdmeclobfjg', '_blank');
        });
    });

    // Demo button handler
    const demoButtons = document.querySelectorAll('.secondary-button');
    demoButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Simulate demo modal or video
            showDemoModal();
        });
    });

    // Download button handlers
    const downloadButtons = document.querySelectorAll('.download-button');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const browserType = this.classList.contains('chrome') ? 'Chrome' : 'Firefox';
            console.log(`Download for ${browserType} clicked`);

            if (browserType === 'Chrome') {
                // Simulate Chrome Web Store redirect
                console.log('Redirecting to Chrome Web Store...');
                window.open('https://chromewebstore.google.com/detail/ranboter/nmdmfikkicpdphdnjgnhogdmeclobfjg', '_blank');
            } else {
                // Show coming soon message for Firefox
                showComingSoonModal();
            }
        });
    });

    // Typing animation for the chat demo
    function startTypingAnimation() {
        const typingIndicator = document.querySelector('.typing-indicator');
        if (typingIndicator) {
            setTimeout(() => {
                const botMessage = document.createElement('div');
                botMessage.className = 'message bot';
                botMessage.innerHTML = '<p>Here are the key points from this article: 1) AI integration in browsers, 2) Enhanced productivity features, 3) Privacy-focused design.</p>';

                const chatMessages = document.querySelector('.chat-messages');
                chatMessages.replaceChild(botMessage, typingIndicator.parentElement);
            }, 3000);
        }
    }

    // Start typing animation after page load
    setTimeout(startTypingAnimation, 2000);

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroVisual = document.querySelector('.hero-visual');
        if (heroVisual) {
            const rate = scrolled * -0.5;
            heroVisual.style.transform = `translateY(${rate}px)`;
        }
    });

    // Feature cards hover effect
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Demo modal functionality
function showDemoModal() {
    const modal = document.createElement('div');
    modal.className = 'demo-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>RanBOT Demo</h3>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <div class="demo-video-placeholder">
                    <div class="play-button">▶</div>
                    <p>Interactive Demo Video</p>
                    <small>See RanBOT in action</small>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Add modal styles
    const modalStyles = `
        .demo-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            animation: fadeIn 0.3s ease forwards;
        }

        .modal-content {
            background: white;
            border-radius: 16px;
            padding: 32px;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 24px;
        }

        .close-modal {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #5f6368;
        }

        .demo-video-placeholder {
            background: #f8f9fa;
            border-radius: 12px;
            padding: 60px 20px;
            text-align: center;
            border: 2px dashed #e8eaed;
        }

        .play-button {
            width: 80px;
            height: 80px;
            background: #1a73e8;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            margin: 0 auto 16px;
            cursor: pointer;
            transition: transform 0.2s ease;
        }

        .play-button:hover {
            transform: scale(1.1);
        }

        @keyframes fadeIn {
            to { opacity: 1; }
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = modalStyles;
    document.head.appendChild(styleSheet);

    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        modal.remove();
        styleSheet.remove();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            styleSheet.remove();
        }
    });
}

// Coming soon modal for Firefox
function showComingSoonModal() {
    const modal = document.createElement('div');
    modal.className = 'coming-soon-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Coming Soon!</h3>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <div class="coming-soon-content">
                    <div class="firefox-icon">🦊</div>
                    <h4>Firefox Extension in Development</h4>
                    <p>We're working hard to bring RanBOT to Firefox. Sign up to be notified when it's ready!</p>
                    <div class="notify-form">
                        <input type="email" placeholder="Enter your email" class="email-input">
                        <button class="notify-button">Notify Me</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Add modal styles
    const modalStyles = `
        .coming-soon-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            animation: fadeIn 0.3s ease forwards;
        }

        .coming-soon-content {
            text-align: center;
        }

        .firefox-icon {
            font-size: 64px;
            margin-bottom: 16px;
        }

        .notify-form {
            display: flex;
            gap: 12px;
            margin-top: 24px;
            max-width: 300px;
            margin-left: auto;
            margin-right: auto;
        }

        .email-input {
            flex: 1;
            padding: 12px 16px;
            border: 1px solid #e8eaed;
            border-radius: 8px;
            font-size: 14px;
        }

        .notify-button {
            background: #1a73e8;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 500;
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = modalStyles;
    document.head.appendChild(styleSheet);

    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        modal.remove();
        styleSheet.remove();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            styleSheet.remove();
        }
    });

    // Notify button functionality
    const notifyBtn = modal.querySelector('.notify-button');
    notifyBtn.addEventListener('click', () => {
        const email = modal.querySelector('.email-input').value;
        if (email) {
            alert('Thanks! We\'ll notify you when RanBOT for Firefox is ready.');
            modal.remove();
            styleSheet.remove();
        }
    });
}

// Add ripple effect styles
const rippleStyles = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;

const rippleStyleSheet = document.createElement('style');
rippleStyleSheet.textContent = rippleStyles;
document.head.appendChild(rippleStyleSheet);