/**
 * Categories Section JavaScript
 * Enhanced version with smooth transitions and improved interactions
 */

// Import the shared HubSpot form initialization function
import { initHubSpotForm } from './hubspot-form.js';

export default function initCategories() {
  // Load the categories section HTML
  const loadCategoriesSection = async () => {
    try {
      const response = await fetch('sections/categories.html');
      const html = await response.text();
      document.getElementById('categories').innerHTML = html;
      
      // Initialize category tabs after content is loaded
      initCategoryTabs();
      initNominationModal();
      initAnimations();
    } catch (error) {
      console.error('Error loading categories section:', error);
    }
  };
  
  // Initialize category tab functionality
  const initCategoryTabs = () => {
    const categoryItems = document.querySelectorAll('.category-item');
    const categoryIconImg = document.getElementById('category-icon-img');
    const categoryText = document.getElementById('category-text');
    const categoryNote = document.getElementById('category-note');
    const nominateContainer = document.getElementById('nominate-container');
    
    if (!categoryItems.length) return;
    
    // Handle tab clicks
    categoryItems.forEach(item => {
      item.addEventListener('click', () => {
        // If already active, do nothing
        if (item.classList.contains('active')) return;
        
        // Update active tab
        categoryItems.forEach(tab => tab.classList.remove('active'));
        
        // Add a small delay for better visual effect
        setTimeout(() => {
          item.classList.add('active');
          
          // Get the category data
          const categoryId = item.getAttribute('data-category');
          const iconSrc = item.getAttribute('data-icon');
          const description = item.getAttribute('data-description');
          const note = item.getAttribute('data-note');
          const showNominate = item.getAttribute('data-nominate') === 'true';
          
          // Fade out content first
          if (categoryText) categoryText.style.opacity = '0';
          if (categoryIconImg) categoryIconImg.style.opacity = '0';
          if (nominateContainer) nominateContainer.style.opacity = '0';
          if (categoryNote) categoryNote.style.opacity = '0';
          
          // Update content after short delay
          setTimeout(() => {
            // Update icon and description
            if (categoryIconImg && iconSrc) {
              categoryIconImg.src = `assets/images/${iconSrc}`;
              categoryIconImg.alt = `${item.querySelector('h3').textContent} Icon`;
              categoryIconImg.style.opacity = '1';
            }
            
            if (categoryText && description) {
              categoryText.textContent = description;
              categoryText.style.opacity = '1';
            }
            
            // Show/hide note
            if (categoryNote) {
              if (note && note.trim() !== '') {
                categoryNote.textContent = note;
                categoryNote.style.display = 'block';
                setTimeout(() => categoryNote.style.opacity = '1', 50);
              } else {
                categoryNote.style.display = 'none';
                categoryNote.style.opacity = '0';
              }
            }
            
            // Show/hide nominate button
            if (nominateContainer) {
              if (showNominate) {
                nominateContainer.style.display = 'block';
                setTimeout(() => nominateContainer.style.opacity = '1', 50);
              } else {
                nominateContainer.style.display = 'none';
              }
            }
          }, 200);
        }, 50);
      });
    });
    
    // Set initial state - find active category and trigger display
    const activeCategory = document.querySelector('.category-item.active');
    if (activeCategory) {
      // Get the category data from the active tab
      const categoryId = activeCategory.getAttribute('data-category');
      const iconSrc = activeCategory.getAttribute('data-icon');
      const description = activeCategory.getAttribute('data-description');
      const note = activeCategory.getAttribute('data-note');
      const showNominate = activeCategory.getAttribute('data-nominate') === 'true';
      
      // Update icon and description
      if (categoryIconImg && iconSrc) {
        categoryIconImg.src = `assets/images/${iconSrc}`;
        categoryIconImg.alt = `${activeCategory.querySelector('h3').textContent} Icon`;
      }
      
      if (categoryText && description) {
        categoryText.textContent = description;
      }
      
      // Show/hide note
      if (categoryNote) {
        if (note && note.trim() !== '') {
          categoryNote.textContent = note;
          categoryNote.style.display = 'block';
        } else {
          categoryNote.style.display = 'none';
        }
      }
      
      // Show/hide nominate button
      if (nominateContainer) {
        nominateContainer.style.display = showNominate ? 'block' : 'none';
      }
    }
  };
  
  // Initialize animations
  const initAnimations = () => {
    // Add hover effects to category items
    const categoryItems = document.querySelectorAll('.category-item');
    
    categoryItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        if (!item.classList.contains('active')) {
          // Add subtle hover effect
          item.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        }
      });
      
      item.addEventListener('mouseleave', () => {
        if (!item.classList.contains('active')) {
          item.style.backgroundColor = 'transparent';
        }
      });
    });
    
    // Add shimmer effect to nomination button on hover
    const nominateBtn = document.querySelector('.nominate-btn');
    if (nominateBtn) {
      nominateBtn.addEventListener('mouseenter', () => {
        const shimmer = nominateBtn.querySelector('.shimmer');
        if (!shimmer) {
          const shimmerEl = document.createElement('span');
          shimmerEl.classList.add('shimmer');
          nominateBtn.appendChild(shimmerEl);
        }
      });
    }
  };
  
  // Initialize nomination modal/popup
  const initNominationModal = () => {
    const nominateButtons = document.querySelectorAll('.nominate-btn');
    
    if (nominateButtons.length === 0) return;
    
    // Update all nomination buttons to use the main nomination modal
    nominateButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get the current active category
        const activeCategory = document.querySelector('.category-item.active');
        let categoryName = "";
        
        if (activeCategory) {
          categoryName = activeCategory.querySelector('h3').textContent;
        }
        
        // Show the main nomination modal instead of the category-specific one
        const mainModal = document.querySelector('.nomination-modal');
        if (mainModal) {
          // Update modal title to include category if relevant
          const modalTitle = mainModal.querySelector('h2');
          if (modalTitle && categoryName) {
            modalTitle.textContent = `Nominate Now: ${categoryName}`;
          } else if (modalTitle) {
            modalTitle.textContent = "Nominate Now";
          }
          
          // Trigger the main modal
          mainModal.classList.add('active');
          document.body.style.overflow = 'hidden'; // Prevent scrolling
          
          // Initialize HubSpot form
          initHubSpotForm();
        }
      });
    });
  };
  
  // Initialize
  loadCategoriesSection();
}