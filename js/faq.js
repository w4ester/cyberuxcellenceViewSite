/**
 * FAQ Section JavaScript
 * Handles loading the FAQ section and accordion functionality
 */

export default function initFaq() {
  // Load the FAQ section HTML
  const loadFaqSection = async () => {
    try {
      const response = await fetch('sections/faq.html');
      const html = await response.text();
      document.getElementById('faq').innerHTML = html;
      
      // Initialize accordion functionality after content is loaded
      initAccordion();
      initTabFilters();
    } catch (error) {
      console.error('Error loading FAQ section:', error);
    }
  };
  
  // Initialize accordion functionality
  const initAccordion = () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    if (accordionHeaders.length > 0) {
      accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
          // Get the parent accordion item
          const accordionItem = header.parentElement;
          
          // Check if this item is already active
          const isActive = accordionItem.classList.contains('active');
          
          // Close all accordion items first
          document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
          });
          
          // If the clicked item wasn't active, open it
          if (!isActive) {
            accordionItem.classList.add('active');
          }
        });
      });
    }
  };
  
  // Initialize tab filtering
  const initTabFilters = () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const faqCategories = document.querySelectorAll('.faq-category');
    
    if (tabButtons.length > 0 && faqCategories.length > 0) {
      // Show all categories by default
      showCategories('all');
      
      // Add click event to tab buttons
      tabButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Update active tab
          tabButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          
          // Show selected category
          const category = button.getAttribute('data-category');
          showCategories(category);
        });
      });
    }
  };
  
  // Show categories based on selection
  const showCategories = (category) => {
    const faqCategories = document.querySelectorAll('.faq-category');
    
    faqCategories.forEach(faqCategory => {
      // Remove previous show class
      faqCategory.classList.remove('show');
      
      // Add show class based on filter
      if (category === 'all' || faqCategory.getAttribute('data-category') === category) {
        setTimeout(() => {
          faqCategory.classList.add('show');
        }, 10); // Small delay for animation
      }
    });
    
    // Close all accordions when changing tabs
    document.querySelectorAll('.accordion-item').forEach(item => {
      item.classList.remove('active');
    });
  };
  
  // Initialize
  loadFaqSection();
}