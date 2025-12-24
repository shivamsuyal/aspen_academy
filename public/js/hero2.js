document.addEventListener('DOMContentLoaded', function() {
  
  // Check if GSAP is loaded
  if (typeof gsap === 'undefined') {
    console.error('GSAP not loaded!');
    return;
  }

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Animate left content on initial load
  const contentTl = gsap.timeline();

  contentTl
    .from('.paramount-title-1', {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .from('.paramount-title-2', {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.7')
    .from('.paramount-text', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.5')
    .from('.paramount-subheading', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.5')
    .from('.paramount-btn', {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, '-=0.3')
    .from('.paramount-url', {
      opacity: 0,
      duration: 0.5
    }, '-=0.2');

  // Initial positions - All cards start clustered in center
  gsap.set('.polaroid-1', {
    x: 150,
    y: 150,
    rotation: 0,
    scale: 0.6,
    opacity: 0
  });

  gsap.set('.polaroid-2', {
    x: 50,
    y: 120,
    rotation: 0,
    scale: 0.6,
    opacity: 0
  });

  gsap.set('.polaroid-3', {
    x: 80,
    y: 100,
    rotation: 0,
    scale: 0.6,
    opacity: 0
  });

  // Hide decorative elements initially
  gsap.set(['.teal-box', '.teal-box-2', '.star-decoration', '.arch-decoration'], {
    scale: 0,
    opacity: 0
  });

  // Create ScrollTrigger timeline for cards moving to arranged positions
  const cardsTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.polaroid-stack-container',
      start: 'top 70%',
      end: 'top 30%',
      scrub: 1.5,
      markers: false, // Set to true to debug
    }
  });

  // Animate decorative elements first
  cardsTl
    .to('.teal-box', {
      scale: 1,
      opacity: 1,
      rotation: -15,
      duration: 0.3,
      ease: 'back.out(1.5)'
    }, 0)
    .to('.star-decoration', {
      scale: 1,
      opacity: 1,
      rotation: 180,
      duration: 0.3,
      ease: 'back.out(1.7)'
    }, 0.1);

  // Animate cards to their diagonal arranged positions
  cardsTl
    .to('.polaroid-1', {
      x: 0,
      y: 0,
      rotation: 8,
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: 'back.out(1.5)'
    }, 0.2)
    .to('.polaroid-2', {
      x: 0,
      y: 0,
      rotation: -5,
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: 'back.out(1.5)'
    }, 0.35)
    .to('.polaroid-3', {
      x: 0,
      y: 0,
      rotation: 12,
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: 'back.out(1.5)'
    }, 0.5)
    .to('.teal-box-2', {
      scale: 1,
      opacity: 1,
      rotation: 8,
      duration: 0.3,
      ease: 'back.out(1.5)'
    }, 0.6)
    .to('.arch-decoration', {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: 'back.out(1.5)'
    }, 0.65);

  // Floating animation for cards after they settle
//   gsap.to('.polaroid-1', {
//     y: -12,
//     rotation: 10,
//     duration: 2.5,
//     repeat: -1,
//     yoyo: true,
//     ease: 'sine.inOut',
//     delay: 1
//   });

//   gsap.to('.polaroid-2', {
//     y: -18,
//     rotation: -3,
//     duration: 3,
//     repeat: -1,
//     yoyo: true,
//     ease: 'sine.inOut',
//     delay: 1.2
//   });

//   gsap.to('.polaroid-3', {
//     y: -15,
//     rotation: 14,
//     duration: 2.8,
//     repeat: -1,
//     yoyo: true,
//     ease: 'sine.inOut',
//     delay: 0.8
//   });

  // Floating decorations
  gsap.to('.star-decoration', {
    y: -10,
    rotation: 200,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });

  gsap.to('.arch-decoration', {
    y: -8,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });

  // Button hover effect
  const btn = document.querySelector('.paramount-btn');
  if (btn) {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        scale: 1.05,
        boxShadow: '0 10px 30px rgba(20, 184, 166, 0.4)',
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        scale: 1,
        boxShadow: '0 0 0 rgba(20, 184, 166, 0)',
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  }

  // Card hover effects
  document.querySelectorAll('.polaroid-card').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        scale: 1.08,
        zIndex: 100,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
        onComplete: () => {
          // Reset z-index after animation
          card.style.zIndex = '';
        }
      });
    });
  });

});
