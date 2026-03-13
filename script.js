gsap.registerPlugin(ScrollTrigger);

// ====================
// HOMEPAGE ANIMATIONS
// ====================

// Hero
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    gsap.from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.8, delay: 0.2 });
    gsap.from('.hero-title', { opacity: 0, y: 60, duration: 1.2, delay: 0.4, ease: 'power3.out' });
    gsap.from('.hero-desc', { opacity: 0, y: 30, duration: 0.8, delay: 0.8 });
}

// Horizontal scroll
const track = document.getElementById('hTrack');
if (track) {
    const cards = track.querySelectorAll('.h-card');
    const totalScroll = track.scrollWidth - window.innerWidth;

    const hTween = gsap.to(track, {
        x: () => -totalScroll,
        ease: 'none',
        scrollTrigger: {
            trigger: '.horizontal-wrapper',
            start: 'top top',
            end: () => '+=' + totalScroll,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
                gsap.set('#hProgress', { scaleX: self.progress, width: '100%' });
            }
        }
    });

    // Section label fade
    ScrollTrigger.create({
        trigger: '.horizontal-wrapper',
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => gsap.to('#sectionLabel', { opacity: 0.4, duration: 0.5 }),
        onLeave: () => gsap.to('#sectionLabel', { opacity: 0, duration: 0.5 }),
        onEnterBack: () => gsap.to('#sectionLabel', { opacity: 0.4, duration: 0.5 }),
        onLeaveBack: () => gsap.to('#sectionLabel', { opacity: 0, duration: 0.5 }),
    });

    // Card content staggered reveal
    cards.forEach((card) => {
        const content = card.querySelector('.h-card-content');
        gsap.from(content.children, {
            scrollTrigger: {
                trigger: card,
                containerAnimation: hTween,
                start: 'left 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            stagger: 0.08,
            duration: 0.6,
            ease: 'power3.out'
        });
    });
}

// About section
const aboutHeading = document.querySelector('.about-heading');
if (aboutHeading) {
    gsap.from('.about-heading', {
        scrollTrigger: { trigger: '.about-section', start: 'top 60%' },
        opacity: 0, x: -50, duration: 1, ease: 'power3.out'
    });
    gsap.from('.about-body', {
        scrollTrigger: { trigger: '.about-section', start: 'top 60%' },
        opacity: 0, x: 50, duration: 1, delay: 0.2, ease: 'power3.out'
    });
}

// ====================
// PROJECT PAGE ANIMATIONS
// ====================

const heroContent = document.querySelector('.project-hero-content');
if (heroContent) {
    gsap.from('.project-hero-category', {
        opacity: 0, y: 20, duration: 0.8, delay: 0.3, ease: 'power3.out'
    });
    gsap.from('.project-hero-title', {
        opacity: 0, y: 40, duration: 1, delay: 0.5, ease: 'power3.out'
    });
    gsap.from('.project-hero-tagline', {
        opacity: 0, y: 30, duration: 0.8, delay: 0.8, ease: 'power3.out'
    });

    document.querySelectorAll('.project-section').forEach(section => {
        gsap.from(section.children, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out'
        });
    });
}
