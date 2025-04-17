/**
 * Hero Section JavaScript
 * Handles hero section functionality and animations
 */

export default function initHero() {
  // Load the hero section HTML
  const loadHeroSection = async () => {
    try {
      const response = await fetch('sections/hero.html');
      const html = await response.text();
      document.getElementById('hero').innerHTML = html;
      
      // Initialize animations after content is loaded
      initParallax();
      initHeroAnimation();
    } catch (error) {
      console.error('Error loading hero section:', error);
    }
  };
  
  // Commented out parallax effect as per new design requirements
  // Now the background icon stays fixed in place with CSS transform
  const initParallax = () => {
    // Parallax effect removed to keep icon static as requested
    // The background icon now stays fixed at -45 degree angle via CSS
    console.log("Parallax effect disabled - icon is now fixed in place");
  };

  // Add subtle animation to hero section
  const initHeroAnimation = () => {
    const heroContent = document.querySelector('.hero-content');
    const lines = document.querySelectorAll('.hero-content h1 .line');
    
    if (heroContent && lines.length > 0) {
      // Add fadeIn animation class after a small delay for each element
      setTimeout(() => {
        lines[0].classList.add('animated');
        
        setTimeout(() => {
          lines[1].classList.add('animated');
          
          setTimeout(() => {
            const subheading = document.querySelector('.hero-subheading');
            if (subheading) subheading.classList.add('animated');
            
            setTimeout(() => {
              const buttons = document.querySelector('.hero-buttons');
              if (buttons) buttons.classList.add('animated');
            }, 200);
          }, 200);
        }, 300);
      }, 100);
    }
  };

  // Add CSS animation styles
  const addAnimationStyles = () => {
    if (!document.getElementById('hero-animations')) {
      const styleSheet = document.createElement('style');
      styleSheet.id = 'hero-animations';
      styleSheet.textContent = `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .hero-content h1 .line,
        .hero-subheading,
        .hero-buttons {
          opacity: 0;
        }
        
        .hero-content h1 .line.animated,
        .hero-subheading.animated,
        .hero-buttons.animated {
          animation: fadeInUp 0.8s ease forwards;
        }
      `;
      document.head.appendChild(styleSheet);
    }
  };

  // Initialize hero section functionalities
  addAnimationStyles();
  loadHeroSection();
}