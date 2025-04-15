/**
 * About Section JavaScript
 * Handles about section functionality
 */

export default function initAbout() {
  // Load the about section HTML
  const loadAboutSection = async () => {
    try {
      const response = await fetch('sections/about.html');
      const html = await response.text();
      document.getElementById('about').innerHTML = html;
      
      // Initialize animations after content is loaded
      initAnimations();
    } catch (error) {
      console.error('Error loading about section:', error);
    }
  };
  
  // Add fade-in animations when scrolling to section
  const initAnimations = () => {
    // Check if Intersection Observer is supported
    if ('IntersectionObserver' in window) {
      const aboutContent = document.querySelector('.about-content');
      const keyPoints = document.querySelector('.key-points');
      const checkmarkItems = document.querySelectorAll('.checkmark-list li');
      
      if (!aboutContent || !keyPoints) return;
      
      // Create observer for the about content
      const contentObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated', 'fade-in');
            contentObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      
      // Create observer for the key points
      const keyPointsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated', 'fade-in');
            
            // Animate each checkmark item with delay
            if (checkmarkItems.length) {
              checkmarkItems.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add('animated', 'slide-in');
                }, 200 * (index + 1));
              });
            }
            
            keyPointsObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      
      // Start observing
      contentObserver.observe(aboutContent);
      keyPointsObserver.observe(keyPoints);
    }
  };

  // Add CSS classes for animations
  const addAnimationStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes slideIn {
        from { transform: translateX(-20px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      
      .animated {
        opacity: 0;
      }
      
      .fade-in {
        animation: fadeIn 0.8s forwards;
      }
      
      .slide-in {
        animation: slideIn 0.5s forwards;
      }
    `;
    document.head.appendChild(style);
  };

  // Initialize about section
  addAnimationStyles();
  loadAboutSection();
}