/**
 * Judges Section JavaScript
 * Implements functionality for the Judges section
 */

export default function initJudges() {
  // Load the judges section HTML
  const loadJudgesSection = async () => {
    try {
      const response = await fetch('sections/judges.html');
      const html = await response.text();
      document.getElementById('judges').innerHTML = html;
      
      // Initialize animations after content is loaded
      initJudgesAnimations();
    } catch (error) {
      console.error('Error loading judges section:', error);
    }
  };
  
  // Initialize judges section animations
  const initJudgesAnimations = () => {
    const judgeCards = document.querySelectorAll('.judge-info-card');
    
    if ('IntersectionObserver' in window && judgeCards.length > 0) {
      const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Add staggered delay to card animations
            setTimeout(() => {
              entry.target.classList.add('fade-in');
            }, index * 150);
            
            cardObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      
      judgeCards.forEach(card => {
        cardObserver.observe(card);
      });
    }
    
    // Add fade-in animation for section title
    const sectionHeader = document.querySelector('.judges-section .section-header');
    if (sectionHeader && 'IntersectionObserver' in window) {
      const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            headerObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      headerObserver.observe(sectionHeader);
    }
  };
  
  // Initialize
  loadJudgesSection();
}