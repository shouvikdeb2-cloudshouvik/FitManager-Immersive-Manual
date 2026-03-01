document.addEventListener("DOMContentLoaded", () => {
    
    // ================================
    // PERFORMANCE CHECK - DISABLE HEAVY ANIMATIONS ON LOW-END DEVICES
    // ================================
    const isMobile = window.innerWidth <= 768;
    const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const enableHeavyAnimations = !isMobile && !isLowEndDevice && !prefersReducedMotion;
    
    // ================================
    // REGISTER GSAP PLUGINS
    // ================================
    gsap.registerPlugin(ScrollTrigger);
    
    // Optimize ScrollTrigger for performance
    ScrollTrigger.config({
        limitCallbacks: true,
        ignoreMobileResize: true
    });
    
    // ================================
    // PROFESSIONAL GSAP ANIMATIONS (CONDITIONAL)
    // ================================
    
    // Gradient Orb Floating Animation - Only on desktop
    function initGradientOrbs() {
        if (!enableHeavyAnimations) return;
        const orbs = document.querySelectorAll('.gradient-orb');
        orbs.forEach((orb, i) => {
            gsap.to(orb, {
                x: "random(-30, 30)",
                y: "random(-30, 30)",
                duration: "random(4, 8)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: i * 0.5
            });
        });
    }
    
    // Strength Progress Arc Animation - Only on desktop
    function initStrengthArc() {
        if (!enableHeavyAnimations) return;
        const progressArc = document.querySelector('.progress-arc');
        if (progressArc) {
            gsap.to(progressArc, {
                strokeDashoffset: 100,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1
                }
            });
        }
    }
    
    // Heartbeat Line Drawing - Only on desktop
    function initHeartbeat() {
        if (!enableHeavyAnimations) return;
        const heartbeatLine = document.querySelector('.heartbeat-line');
        if (heartbeatLine) {
            const length = heartbeatLine.getTotalLength();
            gsap.set(heartbeatLine, {
                strokeDasharray: length,
                strokeDashoffset: length
            });
            
            gsap.to(heartbeatLine, {
                strokeDashoffset: 0,
                duration: 2,
                ease: "power1.inOut",
                repeat: -1,
                repeatDelay: 2
            });
        }
    }
    
    // Power Icon Pulse - Only on desktop
    function initPowerIcon() {
        if (!enableHeavyAnimations) return;
        const powerIcon = document.querySelector('.power-icon');
        if (powerIcon) {
            gsap.to(powerIcon, {
                scale: 1.2,
                opacity: 0.8,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });
        }
    }
    
    // Scroll Progress Circle
    function initScrollProgress() {
        const progressFill = document.querySelector('.progress-fill');
        const progressPercent = document.querySelector('.progress-percent');
        
        if (progressFill && progressPercent) {
            ScrollTrigger.create({
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                onUpdate: (self) => {
                    const progress = self.progress;
                    const offset = 283 - (283 * progress);
                    progressFill.style.strokeDashoffset = offset;
                    progressPercent.textContent = Math.round(progress * 100) + '%';
                }
            });
        }
    }
    
    // Logo Showcase Animation
    function initLogoShowcase() {
        const logo = document.querySelector('.showcase-logo');
        const glow = document.querySelector('.logo-glow');
        
        if (logo && glow) {
            // Logo scale and fade in animation
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.logo-showcase',
                    start: 'top 80%',
                    end: 'center center',
                    scrub: 1
                }
            })
            .fromTo(logo, 
                { opacity: 0, scale: 0.3, y: 100 },
                { opacity: 1, scale: 1, y: 0, ease: 'power2.out' }
            )
            .fromTo(glow,
                { opacity: 0, scale: 0.5 },
                { opacity: 0.8, scale: 1, ease: 'power2.out' },
                '<'
            );
            
            // Logo exit animation
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.logo-showcase',
                    start: 'center center',
                    end: 'bottom top',
                    scrub: 1
                }
            })
            .to(logo, { 
                opacity: 0, 
                scale: 1.5, 
                y: -100,
                ease: 'power2.in' 
            })
            .to(glow, { 
                opacity: 0, 
                scale: 1.5,
                ease: 'power2.in' 
            }, '<');
        }
    }

    // Section Reveal Animations
    function initSectionReveals() {
        const sections = document.querySelectorAll('.section');
        
        sections.forEach(section => {
            const eyebrow = section.querySelector('.eyebrow');
            const title = section.querySelector('.section-title');
            const desc = section.querySelector('.section-desc');
            
            // Create timeline for each section
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "top 20%",
                    toggleActions: "play none none reverse"
                }
            });
            
            if (eyebrow) {
                tl.fromTo(eyebrow, 
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
                );
            }
            
            if (title) {
                tl.fromTo(title,
                    { opacity: 0, y: 30, clipPath: "inset(0 0 100% 0)" },
                    { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)", duration: 0.8, ease: "power3.out" },
                    "-=0.3"
                );
            }
            
            if (desc) {
                tl.fromTo(desc,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
                    "-=0.4"
                );
            }
        });
    }
    
    // Card Stagger Animation
    function initCardAnimations() {
        const containers = document.querySelectorAll('.interactive-container:not(.text-card)');
        
        containers.forEach((container, i) => {
            gsap.fromTo(container,
                {
                    opacity: 0,
                    y: 60,
                    scale: 0.95
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: container,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
            
            // Card hover 3D tilt
            container.addEventListener('mousemove', (e) => {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;
                
                gsap.to(container, {
                    rotateX: rotateX,
                    rotateY: rotateY,
                    transformPerspective: 1000,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            
            container.addEventListener('mouseleave', () => {
                gsap.to(container, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.5,
                    ease: "power2.out"
                });
            });
        });
    }
    
    // Text Cards Grid Animation
    function initTextCards() {
        const textCards = document.querySelectorAll('.text-card');
        
        textCards.forEach((card, i) => {
            gsap.fromTo(card,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }
    
    // FAQ Items Animation
    function initFAQItems() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach((item, i) => {
            gsap.fromTo(item,
                { opacity: 0, scale: 0.95 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }
    
    // Hero Badges Entrance
    function initHeroBadges() {
        const badges = document.querySelectorAll('.hero-badge');
        
        gsap.fromTo(badges,
            { opacity: 0, y: 20, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.5,
                stagger: 0.12,
                delay: 1.2,
                ease: "back.out(1.4)"
            }
        );
    }
    
    // Smooth Parallax on Scroll
    function initParallax() {
        // Hero content parallax
        gsap.to('.hero-content', {
            y: -80,
            opacity: 0,
            scale: 0.98,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: 0.5
            }
        });
        
        // Floating elements parallax
        gsap.to('.floating-element.left', {
            x: -60,
            opacity: 0,
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: 0.5
            }
        });
        
        gsap.to('.floating-element.right', {
            x: 60,
            opacity: 0,
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: 0.5
            }
        });
    }
    
    // Button Micro-interactions
    function initButtonEffects() {
        const buttons = document.querySelectorAll('.btn-primary, .btn-enroll');
        
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                gsap.to(btn, {
                    scale: 1.03,
                    boxShadow: "0 10px 40px rgba(249, 115, 22, 0.3)",
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    scale: 1,
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });
    }
    
    // Navbar Scroll Effect Enhancement
    function initNavbarEffect() {
        const navbar = document.querySelector('.navbar');
        
        ScrollTrigger.create({
            trigger: "body",
            start: "top -80",
            onEnter: () => {
                gsap.to(navbar, {
                    backgroundColor: "rgba(5, 8, 20, 0.95)",
                    backdropFilter: "blur(20px)",
                    duration: 0.3
                });
            },
            onLeaveBack: () => {
                gsap.to(navbar, {
                    backgroundColor: "rgba(5, 8, 20, 0.3)",
                    backdropFilter: "blur(16px)",
                    duration: 0.3
                });
            }
        });
    }
    
    // Initialize All GSAP Animations
    initGradientOrbs();
    initStrengthArc();
    initHeartbeat();
    initPowerIcon();
    initScrollProgress();
    initLogoShowcase();
    initSectionReveals();
    initCardAnimations();
    initTextCards();
    initFAQItems();
    initHeroBadges();
    initParallax();
    initButtonEffects();
    initNavbarEffect();
    
    // ================================
    // INITIALIZE ANIMATIONS
    // ================================
    function initAnimations() {
        // Text reveal animation for hero title
        const textReveal = document.querySelector(".text-reveal");
        if (textReveal) {
            const text = textReveal.textContent;
            textReveal.innerHTML = "";
            text.split("").forEach((char, i) => {
                const span = document.createElement("span");
                span.className = "char";
                span.textContent = char === " " ? "\u00A0" : char;
                span.style.transitionDelay = `${i * 0.05}s`;
                textReveal.appendChild(span);
            });
            setTimeout(() => textReveal.classList.add("revealed"), 100);
        }

        // Hero entrance animation
        const tlHero = gsap.timeline();
        tlHero.from(".subtitle-wrap", { y: -20, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2 })
              .from(".hero-desc", { y: 30, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.5")
              .from(".btn-primary", { scale: 0.9, opacity: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=0.6")
              .from(".floating-element", { opacity: 0, duration: 1, stagger: 0.3 }, "-=0.5");
    }
    
    // Run animations immediately
    initAnimations();

    // ================================
    // LENIS SMOOTH SCROLLING - DISABLED ON MOBILE FOR PERFORMANCE
    // ================================
    let lenis = null;
    if (!isMobile) {
        lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true,
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.5,
        });

        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
    }

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({ toggleActions: "play reverse play reverse" });

    // ================================
    // CUSTOM CURSOR - DESKTOP ONLY
    // ================================
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");
    const customCursor = document.querySelector(".custom-cursor");
    
    // Only enable custom cursor on desktop with fine pointer and good performance
    if (enableHeavyAnimations && window.matchMedia("(pointer: fine)").matches && cursorDot && cursorOutline) {
        let mouseX = 0, mouseY = 0;
        let outlineX = 0, outlineY = 0;
        
        document.addEventListener("mousemove", (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = mouseX + "px";
            cursorDot.style.top = mouseY + "px";
        });
        
        function animateOutline() {
            outlineX += (mouseX - outlineX) * 0.15;
            outlineY += (mouseY - outlineY) * 0.15;
            cursorOutline.style.left = outlineX + "px";
            cursorOutline.style.top = outlineY + "px";
            requestAnimationFrame(animateOutline);
        }
        animateOutline();
        
        // Hover effects
        const hoverElements = document.querySelectorAll("a, button, .interactive-image, .indicator");
        hoverElements.forEach(el => {
            el.addEventListener("mouseenter", () => customCursor.classList.add("cursor-hover"));
            el.addEventListener("mouseleave", () => customCursor.classList.remove("cursor-hover"));
        });
    } else if (customCursor) {
        customCursor.style.display = "none";
    }

    // ================================
    // PARTICLES - REDUCED FOR PERFORMANCE
    // ================================
    const particlesContainer = document.getElementById("particles");
    if (particlesContainer && enableHeavyAnimations) {
        // Reduced from 50 to 15 particles for better performance
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement("div");
            particle.className = "particle";
            particle.style.left = Math.random() * 100 + "%";
            particle.style.top = Math.random() * 100 + "%";
            particle.style.animationDelay = Math.random() * 5 + "s";
            particle.style.opacity = Math.random() * 0.5 + 0.2;
            
            gsap.to(particle, {
                y: -window.innerHeight,
                x: (Math.random() - 0.5) * 200,
                duration: Math.random() * 10 + 10,
                repeat: -1,
                ease: "none",
                delay: Math.random() * 5
            });
            
            particlesContainer.appendChild(particle);
        }
    } else if (particlesContainer) {
        // Hide particles on mobile/low-end devices
        particlesContainer.style.display = 'none';
    }

    // ================================
    // SECTION INDICATORS
    // ================================
    const indicators = document.querySelectorAll(".indicator");
    const allSections = document.querySelectorAll(".hero, .section");
    const readingProgress = document.querySelector(".reading-progress");
    const currentSectionEl = document.querySelector(".current-section");
    const sectionCountEl = document.querySelector(".section-count");
    
    const sectionNames = {
        "hero": "Home",
        "getting-started": "Getting Started",
        "activation": "Activation",
        "dashboard": "Dashboard",
        "members": "Members",
        "payments": "Payments",
        "reminders": "Reminders",
        "reports": "Reports",
        "admin": "Admin & Ref"
    };

    // Section Info Panel Data
    const sectionInfo = {
        "hero": {
            icon: "fa-solid fa-home",
            title: "Welcome",
            text: "Explore the FitManager User Guide for managing your gym efficiently.",
            tip: "Scroll down to begin"
        },
        "getting-started": {
            icon: "fa-solid fa-rocket",
            title: "Getting Started",
            text: "Install FitManager and perform your first-time setup in just a few steps.",
            tip: "Default password: admin"
        },
        "activation": {
            icon: "fa-solid fa-key",
            title: "Activation",
            text: "Activate your license to unlock all features. 30-day trial available.",
            tip: "Keep your key safe!"
        },
        "dashboard": {
            icon: "fa-solid fa-chart-pie",
            title: "Dashboard",
            text: "Monitor your gym at a glance with real-time stats and alerts.",
            tip: "Click cards for details"
        },
        "members": {
            icon: "fa-solid fa-users",
            title: "Members",
            text: "Add, edit, and manage all your gym members with ease.",
            tip: "Use filters to search"
        },
        "payments": {
            icon: "fa-solid fa-credit-card",
            title: "Payments",
            text: "Record payments, track dues, and manage billing efficiently.",
            tip: "Print receipts easily"
        },
        "reminders": {
            icon: "fa-solid fa-bell",
            title: "Reminders",
            text: "Send SMS and notifications for expiring memberships.",
            tip: "Automate your reminders"
        },
        "reports": {
            icon: "fa-solid fa-file-lines",
            title: "Reports",
            text: "Generate detailed reports on revenue, members, and more.",
            tip: "Export to PDF/Excel"
        },
        "admin": {
            icon: "fa-solid fa-gear",
            title: "Admin & Settings",
            text: "Configure billing rules, freeze policies, and backup your data.",
            tip: "Backup regularly!"
        }
    };

    // Section Info Panel Element
    const sectionInfoPanel = document.getElementById("sectionInfoPanel");

    function updateSectionInfoPanel(sectionId) {
        if (!sectionInfoPanel) return;
        
        const info = sectionInfo[sectionId] || sectionInfo["hero"];
        const iconEl = sectionInfoPanel.querySelector(".info-icon i");
        const titleEl = sectionInfoPanel.querySelector(".info-title");
        const textEl = sectionInfoPanel.querySelector(".info-text");
        const tipEl = sectionInfoPanel.querySelector(".info-tip span");
        
        if (iconEl) iconEl.className = info.icon;
        if (titleEl) titleEl.textContent = info.title;
        if (textEl) textEl.textContent = info.text;
        if (tipEl) tipEl.textContent = info.tip;
    }

    function updateIndicators() {
        let currentIndex = 0;
        
        allSections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentIndex = index;
            }
        });
        
        indicators.forEach((ind, i) => {
            ind.classList.toggle("active", i === currentIndex);
        });
        
        const currentSection = allSections[currentIndex];
        if (currentSection && currentSectionEl && sectionCountEl) {
            const sectionId = currentSection.id || "hero";
            currentSectionEl.textContent = sectionNames[sectionId] || "Home";
            sectionCountEl.textContent = `${currentIndex + 1} / ${allSections.length}`;
            
            // Update section info panel
            updateSectionInfoPanel(sectionId);
            
            // Show panel when scrolled past hero, hide on hero
            if (sectionInfoPanel) {
                if (window.scrollY > 200) {
                    sectionInfoPanel.classList.add("visible");
                } else {
                    sectionInfoPanel.classList.remove("visible");
                }
            }
        }
    }
    
    indicators.forEach(indicator => {
        indicator.addEventListener("click", (e) => {
            e.preventDefault();
            const sectionId = indicator.dataset.section;
            const target = document.getElementById(sectionId);
            if (target) {
                lenis.scrollTo(target, { offset: sectionId === "hero" ? 0 : -80 });
            }
        });
    });

    // ================================
    // MAGNETIC BUTTONS
    // ================================
    const magneticBtns = document.querySelectorAll(".magnetic-btn");
    
    magneticBtns.forEach(btn => {
        btn.addEventListener("mousemove", (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(btn, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        btn.addEventListener("mouseleave", () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.5)"
            });
        });
    });

    // ================================
    // BUTTON RIPPLE EFFECT
    // ================================
    document.querySelectorAll(".btn-primary, .btn-enroll").forEach(btn => {
        btn.addEventListener("click", function(e) {
            const rect = this.getBoundingClientRect();
            const ripple = document.createElement("span");
            ripple.className = "ripple";
            ripple.style.left = (e.clientX - rect.left) + "px";
            ripple.style.top = (e.clientY - rect.top) + "px";
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // ================================
    // IMAGE LIGHTBOX
    // ================================
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = lightbox?.querySelector(".lightbox-image");
    const lightboxCaption = lightbox?.querySelector(".lightbox-caption");
    const lightboxCounter = lightbox?.querySelector(".lightbox-counter");
    const lightboxClose = lightbox?.querySelector(".lightbox-close");
    const lightboxPrev = lightbox?.querySelector(".lightbox-prev");
    const lightboxNext = lightbox?.querySelector(".lightbox-next");
    const images = document.querySelectorAll(".interactive-image");
    let currentImageIndex = 0;
    
    function openLightbox(index) {
        currentImageIndex = index;
        const img = images[index];
        const caption = img.closest(".interactive-container")?.querySelector(".image-caption")?.textContent || "";
        
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightboxCaption.textContent = caption;
        lightboxCounter.textContent = `${index + 1} / ${images.length}`;
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
        lenis.stop();
    }
    
    function closeLightbox() {
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
        lenis.start();
    }
    
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        openLightbox(currentImageIndex);
    }
    
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        openLightbox(currentImageIndex);
    }
    
    images.forEach((img, index) => {
        img.addEventListener("click", () => openLightbox(index));
    });
    
    if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener("click", prevImage);
    if (lightboxNext) lightboxNext.addEventListener("click", nextImage);
    
    lightbox?.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // ================================
    // KEYBOARD NAVIGATION
    // ================================
    const keyboardHints = document.querySelector(".keyboard-hints");
    let keyboardHintsTimeout;
    
    document.addEventListener("keydown", (e) => {
        // Show keyboard hints briefly
        if (keyboardHints && !lightbox?.classList.contains("active")) {
            keyboardHints.classList.add("visible");
            clearTimeout(keyboardHintsTimeout);
            keyboardHintsTimeout = setTimeout(() => {
                keyboardHints.classList.remove("visible");
            }, 3000);
        }
        
        // Lightbox controls
        if (lightbox?.classList.contains("active")) {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
            return;
        }
        
        // Section navigation
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
            let currentIndex = 0;
            
            allSections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom > 100) {
                    currentIndex = index;
                }
            });
            
            let targetIndex = e.key === "ArrowDown" 
                ? Math.min(currentIndex + 1, allSections.length - 1)
                : Math.max(currentIndex - 1, 0);
            
            const target = allSections[targetIndex];
            if (target) {
                lenis.scrollTo(target, { offset: target.id === "hero" ? 0 : -80 });
            }
        }
    });

    // ================================
    // PRINT FUNCTIONALITY
    // ================================
    const fabPrint = document.querySelector(".fab-print");
    
    if (fabPrint) {
        fabPrint.addEventListener("click", () => {
            window.print();
        });
    }

    // ================================
    // SCROLL REVEAL ANIMATIONS
    // ================================
    const sections = document.querySelectorAll(".section");
    
    sections.forEach(section => {
        const eyebrow = section.querySelector(".eyebrow");
        const title = section.querySelector(".section-title");
        const desc = section.querySelector(".section-desc");

        // Animate section header elements
        if (eyebrow) {
            gsap.fromTo(eyebrow, 
                { y: 30, opacity: 0, filter: "blur(10px)" },
                {
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        end: "top 20%",
                        toggleActions: "play reverse play reverse"
                    },
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 0.8,
                    ease: "power2.out"
                }
            );
        }

        if (title) {
            gsap.fromTo(title, 
                { y: 50, opacity: 0, scale: 0.95, filter: "blur(8px)" },
                {
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "top 15%",
                        toggleActions: "play reverse play reverse"
                    },
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 1,
                    delay: 0.1,
                    ease: "power3.out"
                }
            );
        }

        if (desc) {
            gsap.fromTo(desc, 
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: section,
                        start: "top 75%",
                        end: "top 15%",
                        toggleActions: "play reverse play reverse"
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.2,
                    ease: "power2.out"
                }
            );
        }
    });

    // ================================
    // CARD ANIMATION SYSTEM
    // ================================
    // Exclude text-cards from sticky behavior
    const allCards = gsap.utils.toArray(".interactive-container:not(.text-card)");
    const textCards = gsap.utils.toArray(".text-card");
    
    allCards.forEach((card, i) => {
        const nextCard = allCards[i + 1];
        
        // ENTRANCE: Card slides up and fades in when it enters viewport
        gsap.fromTo(card, 
            { 
                y: 80, 
                opacity: 0, 
                scale: 0.95
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    end: "top 60%",
                    toggleActions: "play none none reverse",
                    // Card stays at opacity 1 and scale 1 after animation completes
                }
            }
        );

        // EXIT: Only when next card pushes this one out
        if (nextCard) {
            gsap.to(card, {
                scale: 0.92,
                opacity: 0,
                y: -50,
                filter: "blur(3px)",
                scrollTrigger: {
                    trigger: nextCard,
                    start: "top 70%",
                    end: "top 20%",
                    scrub: 0.5
                }
            });
        }
    });

    // Text cards - simple fade in without sticky/exit behavior
    textCards.forEach((card, i) => {
        gsap.fromTo(card, 
            { 
                y: 40, 
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: i * 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // 5. Enhanced Parallax for hero and cinematic background elements
    gsap.to(".stars", {
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom top",
            scrub: 0.5
        },
        y: "30%",
        opacity: 0.1
    });

    // Hero content parallax on scroll
    gsap.to(".hero-content", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.3
        },
        y: -100,
        opacity: 0,
        scale: 0.95,
        filter: "blur(10px)"
    });

    // Glowing orb depth effect
    gsap.to(".glowing-orb", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.5
        },
        y: "20%",
        scale: 1.2,
        opacity: 0.5
    });

    // Floating elements drift away
    gsap.to(".floating-element.left", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.4
        },
        x: -100,
        opacity: 0
    });

    gsap.to(".floating-element.right", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.4
        },
        x: 100,
        opacity: 0
    });

    // 6. 3D Tilt Effect and Dynamic Glow on Cards using GSAP
    const allInteractiveCards = gsap.utils.toArray(".interactive-container");
    allInteractiveCards.forEach(card => {
        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);

            gsap.to(card, {
                rotationX: rotateX,
                rotationY: rotateY,
                transformPerspective: 1000,
                duration: 0.4,
                ease: "power2.out"
            });
        });

        card.addEventListener("mouseleave", () => {
            gsap.to(card, {
                rotationX: 0,
                rotationY: 0,
                duration: 0.4,
                ease: "power2.out"
            });
        });
    });

    // 6. Smooth Scrolling for Internal Links using Lenis
    const navLinks = document.querySelectorAll(".nav-links a");
    const fabTop = document.querySelector(".fab-top");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                lenis.scrollTo(targetSection, { offset: -80 });
            }

            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

    fabTop.addEventListener("click", function(e) {
        e.preventDefault();
        lenis.scrollTo(0);
    });

    // Scroll spy for navigation, indicators, FAB visibility, and reading progress
    window.addEventListener("scroll", () => {
        let current = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });

        // Update section indicators
        updateIndicators();
        
        // Update reading progress
        if (readingProgress) {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            readingProgress.style.setProperty("--progress", progress + "%");
        }

        // FAB toggle (both top and print)
        if (window.scrollY > 500) {
            fabTop.classList.add("visible");
            if (fabPrint) fabPrint.classList.add("visible");
        } else {
            fabTop.classList.remove("visible");
            if (fabPrint) fabPrint.classList.remove("visible");
        }
    });

    // 8. Navbar cinematic effect on scroll
    const navbar = document.querySelector(".navbar");
    ScrollTrigger.create({
        trigger: "body",
        start: "top -100",
        onEnter: () => navbar.classList.add("scrolled"),
        onLeaveBack: () => navbar.classList.remove("scrolled")
    });

    // 9. Section divider glow effects
    const sectionContainers = document.querySelectorAll(".section-container");
    sectionContainers.forEach(container => {
        gsap.fromTo(container, 
            { "--glow-opacity": 0 },
            {
                "--glow-opacity": 1,
                scrollTrigger: {
                    trigger: container,
                    start: "top 70%",
                    end: "top 30%",
                    scrub: 0.5
                }
            }
        );
    });

    // 10. Smooth progress indicator
    gsap.to(".progress-bar", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.3
        }
    });

    // 11. Mobile Menu Toggle
    const mobileToggle = document.querySelector(".mobile-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a");
    const mobileToggleIcon = mobileToggle?.querySelector("i");

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener("click", () => {
            const isActive = mobileMenu.classList.toggle("active");
            mobileToggle.classList.toggle("active");
            document.body.style.overflow = isActive ? "hidden" : "";
            
            // Change icon
            if (mobileToggleIcon) {
                mobileToggleIcon.className = isActive ? "fa-solid fa-xmark" : "fa-solid fa-bars";
            }
        });

        // Close menu when clicking a link
        mobileNavLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const targetId = link.getAttribute("href").substring(1);
                const targetSection = document.getElementById(targetId);
                
                mobileToggle.classList.remove("active");
                mobileMenu.classList.remove("active");
                document.body.style.overflow = "";
                
                if (mobileToggleIcon) {
                    mobileToggleIcon.className = "fa-solid fa-bars";
                }
                
                if (targetSection) {
                    setTimeout(() => {
                        lenis.scrollTo(targetSection, { offset: -80 });
                    }, 300);
                }
            });
        });

        // Close menu on escape key
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
                mobileToggle.classList.remove("active");
                mobileMenu.classList.remove("active");
                document.body.style.overflow = "";
                if (mobileToggleIcon) {
                    mobileToggleIcon.className = "fa-solid fa-bars";
                }
            }
        });
    }

    // 12. Responsive: Adjust animations on resize
    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 250);
    });
});
