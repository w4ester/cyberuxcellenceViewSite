/**
 * Why Nominate Section JavaScript
 * Handles loading the why nominate section HTML and initializing animations
 */

export default function initWhy() {
  // Load the why nominate section HTML
  const loadWhySection = async () => {
    try {
      const response = await fetch('sections/why.html');
      const html = await response.text();
      document.getElementById('why-nominate').innerHTML = html;
      
      // Initialize animations after content is loaded
      initBenefitAnimations();
      
      // No hover effects as requested
    } catch (error) {
      console.error('Error loading why nominate section:', error);
    }
  };
  
  // Initialize benefit card animations using Intersection Observer
  const initBenefitAnimations = () => {
    const benefitCards = document.querySelectorAll('.benefit-card');
    
    if ('IntersectionObserver' in window && benefitCards.length > 0) {
      const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Add staggered delay to card animations for a cascade effect
            setTimeout(() => {
              entry.target.classList.add('fade-in');
            }, index * 150);
            
            // Once the animation is applied, stop observing this element
            cardObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 }); // Trigger when 20% of the element is visible
      
      // Start observing each benefit card
      benefitCards.forEach(card => {
        cardObserver.observe(card);
      });
    } else {
      // Fallback for browsers that don't support Intersection Observer
      benefitCards.forEach(card => {
        card.classList.add('fade-in');
      });
    }
  };
  
  // Initialize the section
  loadWhySection();
}