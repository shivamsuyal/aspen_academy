document.addEventListener('DOMContentLoaded', function() {
  
  // Check if GSAP is loaded
  if (typeof gsap === 'undefined') {
    console.error('GSAP not loaded! Check your header.ejs file.');
    return;
  }

  // Hero Section Timeline Animation
  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

  // Animate decorative glyphs
  tl.from('.glyph-star', {
    scale: 0,
    rotation: -180,
    duration: 1,
    ease: "back.out(1.7)"
  }, 0.2)

  .from('.glyph-wave', {
    x: 100,
    opacity: 0,
    duration: 1.2
  }, 0.3)

  .from('.glyph-arch', {
    scale: 0,
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "elastic.out(1, 0.5)"
  }, 0.4)

  .from('.glyph-question', {
    scale: 0,
    rotation: 360,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)"
  }, 0.5);

  // Animate hero images
  tl.from('.hero-images', {
    scale: 0.8,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  }, 0.3)

  .from('.hero-img-1', {
    y: -100,
    x: -50,
    opacity: 0,
    rotation: -15,
    duration: 1.5,
    ease: "power3.out"
  }, 0.5)

  .from('.hero-img-2', {
    y: 100,
    x: 50,
    opacity: 0,
    rotation: 15,
    duration: 1.5,
    ease: "power3.out"
  }, 0.6);

  // Animate title lines with stagger
  tl.from('.title-line', {
    y: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power4.out"
  }, 0.7)

  // 🎯 ANIMATED GREEN UNDERLINE - Draws from left to right
//   .to('.hero-underline', {
//     width: '100%',
//     duration: 1.5,
//     ease: "power2.inOut",
//     delay: 0.3
//   }, 1.5)

.fromTo('.underline-path', 
  {
    strokeDasharray: 1000,
    strokeDashoffset: 1000
  },
  {
    strokeDashoffset: 0,
    duration: 1.8,
    ease: "power2.inOut"
  }, 1.5)

  // Animate paragraph text
  .to('.hero-text', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  }, 2.2)

  // Animate button
  .to('.search-btn', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out"
  }, 2.5);

  // Add hover animation for button
  const btn = document.querySelector('.search-btn');
  
  if (btn) {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(btn.querySelector('svg'), {
        x: 5,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(btn.querySelector('svg'), {
        x: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  }

  // Floating animation for glyphs
  gsap.to('.glyph-star', {
    y: -20,
    rotation: 15,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to('.glyph-wave', {
    x: -15,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to('.glyph-arch', {
    y: -15,
    duration: 3.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to('.glyph-question', {
    rotation: 10,
    y: -10,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

});
