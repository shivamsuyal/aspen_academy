document.addEventListener('DOMContentLoaded', function() {
  
  // Check if GSAP is loaded
  if (typeof gsap === 'undefined') {
    console.error('GSAP not loaded! Make sure to include GSAP in your header.');
    return;
  }

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // ========== INITIAL TEXT ANIMATION ==========
  const textTl = gsap.timeline({
    defaults: { ease: 'power3.out' }
  });

  textTl
    .from('.events-title', {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out'
    })
    .to('.events-underline', {
      width: '100%',
      duration: 1,
      ease: 'power2.inOut'
    }, '-=0.5')
    .from('.events-subtitle', {
      y: 30,
      opacity: 0,
      duration: 0.8
    }, '-=0.6')
    .from('.events-description', {
      y: 30,
      opacity: 0,
      duration: 0.8
    }, '-=0.5');

  // ========== RESPONSIVE ANIMATIONS WITH matchMedia ==========
  let mm = gsap.matchMedia();

  // Desktop animations (768px and above)
  mm.add("(min-width: 768px)", () => {
    const transitionTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.events-section',
        start: 'top top',
        end: '+=100%',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        markers: false
      }
    });

    // Hide text
    transitionTl
      .to('.events-text-content', {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in'
      })
      // Show grid container
      .to('.events-grid-container', {
        opacity: 1,
        duration: 0.2,
        ease: 'power2.out'
      }, 0.2);

    // Get all grid items and shuffle them for random order (desktop only)
    const gridItems = gsap.utils.toArray('.grid-item');
    const shuffledItems = gsap.utils.shuffle([...gridItems]);

    // Animate each item appearing one by one as user scrolls
    shuffledItems.forEach((item, index) => {
      transitionTl.from(item, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: 'power2.out'
      }, index * 0.15);
    });
  });

  // Mobile animations (below 768px)
  mm.add("(max-width: 767px)", () => {
    const transitionTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.events-section',
        start: 'top top',
        end: '+=100%',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        markers: false
      }
    });

    // Hide text
    transitionTl
      .to('.events-text-content', {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in'
      })
      // Show grid container
      .to('.events-grid-container', {
        opacity: 1,
        duration: 0.2,
        ease: 'power2.out'
      }, 0.2);

    // Get all grid items in their original order (no shuffle)
    const gridItems = gsap.utils.toArray('.grid-item');

    // Animate each item appearing one by one in order
    gridItems.forEach((item, index) => {
      transitionTl.from(item, {
        opacity: 0,
        y: 50,
        duration: 0.3,
        ease: 'power2.out'
      }, index * 0.15);
    });
  });

});
