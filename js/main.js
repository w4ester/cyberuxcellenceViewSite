/**
 * Cyber UXcellence Awards - Main JavaScript
 * Initializes all sections and handles global functionality
 */

import { initCookieConsent } from './analytics.js';
import initHero from './hero.js';
import initAbout from './about.js';
import initCategories from './categories.js';
import initWhy from './why.js';
import initJudges from './judges.js';
import initTimeline from './timeline.js';
import initFaq from './faq.js';
import initSponsorship from './sponsorship.js';
import { initHubSpotForm } from './hubspot-form.js';

// Initialize mobile menu functionality
const initMobileMenu = () => {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const closeMenu = document.querySelector('.close-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuLinks = document.querySelectorAll('.mobile-links a');
  
  if (menuToggle && mobileMenu) {
    // Open menu
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
    
    // Close menu
    if (closeMenu) {
      closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = ''; // Enable scrolling
      });
    }
    
    // Close menu when clicking a link
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
};

// Initialize nomination modal popup
const initNominationModal = () => {
  // Get all nomination buttons (not just the main trigger)
  const nominateButtons = document.querySelectorAll('a[href="#nominate"], .cta-button');
  const modal = document.querySelector('.nomination-modal');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalClose = document.querySelector('.modal-close');
  
  // Track if listeners have been added to avoid duplicates
  window.nominateListenersAdded = window.nominateListenersAdded || false;
  
  if (nominateButtons.length > 0 && modal && !window.nominateListenersAdded) {
    // Open modal for any nominate button
    nominateButtons.forEach(button => {
      // Remove any existing listeners
      const newButton = button.cloneNode(true);
      button.parentNode.replaceChild(newButton, button);
      
      // Add fresh listener
      newButton.addEventListener('click', (e) => {
        // Skip processing if this is the sponsorship button with mailto: link
        if (newButton.classList.contains('sponsor-cta-button')) {
          return; // Don't process sponsorship buttons
        }
        
        // If the button is a link but not linking to #nominate, don't trigger the popup
        if (newButton.tagName === 'A' && 
            newButton.getAttribute('href') !== '#nominate' && 
            !newButton.getAttribute('href').includes('#nominate') && 
            !newButton.classList.contains('nominate-btn')) {
          return;
        }
        
        // Prevent default link behavior
        e.preventDefault();
        
        // Update modal title if relevant
        const activeCategory = document.querySelector('.category-item.active');
        if (activeCategory) {
          const categoryName = activeCategory.querySelector('h3').textContent;
          const modalTitle = modal.querySelector('.modal-header h2');
          if (modalTitle) {
            modalTitle.textContent = `Nominate Now: ${categoryName}`;
          }
        } else {
          const modalTitle = modal.querySelector('.modal-header h2');
          if (modalTitle) {
            modalTitle.textContent = "Nominate Now";
          }
        }
        
        // Show the modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        
        // Initialize the HubSpot form
        initHubSpotForm();
      });
    });
    
    // Mark that listeners have been added
    window.nominateListenersAdded = true;
    
    // Close modal when clicking overlay
    if (modalOverlay) {
      modalOverlay.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Enable scrolling
        
        // Reset the listeners flag to allow reopening
        setTimeout(() => {
          window.nominateListenersAdded = false;
          // Reinitialize nomination modal
          initNominationModal();
        }, 300);
      });
    }
    
    // Close modal when clicking close button
    if (modalClose) {
      modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Enable scrolling
        
        // Reset the listeners flag to allow reopening
        setTimeout(() => {
          window.nominateListenersAdded = false;
          // Reinitialize nomination modal
          initNominationModal();
        }, 300);
      });
    }
    
    // Close modal when pressing Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Enable scrolling
        
        // Reset the listeners flag to allow reopening
        setTimeout(() => {
          window.nominateListenersAdded = false;
          // Reinitialize nomination modal
          initNominationModal();
        }, 300);
      }
    });
  }
};

// Initialize navbar scroll effect
const initNavbarScroll = () => {
  const navbar = document.querySelector('.main-nav');
  
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
};

// Smooth scroll for navigation links
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      // Skip if it's "#nominate" (handled by modal)
      if (targetId === '#nominate' || targetId.includes('#nominate')) return;
      
      // Skip if it's just "#" or JavaScript void
      if (targetId === '#' || targetId.includes('javascript')) return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        const navbarHeight = document.querySelector('.main-nav')?.offsetHeight || 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        
        window.scrollTo({
          top: targetPosition - navbarHeight, // Account for fixed navbar
          behavior: 'smooth'
        });
      }
    });
  });
};

// Initialize all sections
const initSections = () => {
  // Initialize hero section
  initHero();
  
  // Initialize about section
  initAbout();
  
  // Initialize categories section
  initCategories();
  
  // Initialize all other sections
  initWhy();
  initJudges();
  initTimeline();
  initFaq();
  initSponsorship();
};

// Initialize analytics tracking
const initAnalytics = () => {
  // This would typically include Google Analytics or similar tracking code
  console.log('Analytics initialized');
};

// Initialize global event delegator for dynamic content
const initEventDelegation = () => {
  // Listen for clicks on the entire document
  document.addEventListener('click', (e) => {
    // Check if the clicked element is a nomination button added after initial page load
    if ((e.target.matches('a[href="#nominate"]') || 
         e.target.matches('.nominate-btn') || 
         e.target.matches('.cta-button')) && 
        !e.target._hasNominateListener &&
        !e.target.classList.contains('sponsor-cta-button')) { // Skip sponsorship buttons
      
      e.preventDefault();
      
      // Show the nomination modal
      const modal = document.querySelector('.nomination-modal');
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        
        // Initialize the HubSpot form
        initHubSpotForm();
      }
      
      // Mark this element as having a listener
      e.target._hasNominateListener = true;
    }
  });
};

// Make the HubSpot form initialization function globally available
window.initHubSpotForm = initHubSpotForm;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initNavbarScroll();
  initSmoothScroll();
  initNominationModal();
  initSections();
  initAnalytics();
  initEventDelegation();
  initCookieConsent();
  
  console.log('Cyber UXcellence Awards site initialized');
});