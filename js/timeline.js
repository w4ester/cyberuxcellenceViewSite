/**
 * Timeline Section JavaScript
 * Handles loading the timeline section HTML and initializing animations
 */

export default function initTimeline() {
  // Load the timeline section HTML
  const loadTimelineSection = async () => {
    try {
      const response = await fetch('sections/timeline.html');
      const html = await response.text();
      document.getElementById('timeline').innerHTML = html;
      
      // Initialize timeline animations after content is loaded
      initTimelineAnimations();
      initTimelineButton();
    } catch (error) {
      console.error('Error loading timeline section:', error);
    }
  };
  
  // Initialize timeline animations with Intersection Observer
  const initTimelineAnimations = () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineHeader = document.querySelector('#timeline .section-header');
    
    if ('IntersectionObserver' in window) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      }, options);
      
      // Observe header
      if (timelineHeader) {
        observer.observe(timelineHeader);
      }
      
      // Observe each timeline item with a delay for cascade effect
      timelineItems.forEach((item, index) => {
        setTimeout(() => {
          observer.observe(item);
        }, index * 100);
      });
    } else {
      // Fallback for browsers that don't support Intersection Observer
      if (timelineHeader) {
        timelineHeader.classList.add('active');
      }
      
      timelineItems.forEach(item => {
        item.classList.add('active');
      });
    }
  };
  
  // Initialize the timeline section's nomination button
  const initTimelineButton = () => {
    const nominateButton = document.querySelector('#timeline .cta-button');
    
    if (nominateButton) {
      nominateButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Show the main nomination modal
        const modal = document.querySelector('.nomination-modal');
        if (modal) {
          // Set a plain "Nominate Now" title for the timeline button
          const modalTitle = modal.querySelector('.modal-header h2');
          if (modalTitle) {
            modalTitle.textContent = "Nominate Now";
          }
          
          // Show the modal
          modal.classList.add('active');
          document.body.style.overflow = 'hidden'; // Prevent scrolling
          
          // Initialize the HubSpot form
          if (window.initHubSpotForm) {
            window.initHubSpotForm();
          } else if (typeof initHubSpotForm === 'function') {
            initHubSpotForm();
          }
        }
      });
    }
  };
  
  // Initialize the timeline section
  loadTimelineSection();
}