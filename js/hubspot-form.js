/**
 * HubSpot Form Initialization
 * This script properly initializes the HubSpot form when the modal opens
 */

// Create global variable to track form initialization
window.formInitialized = false;

// Function to initialize the HubSpot form
export function initHubSpotForm() {
  // Check if form is already initialized to prevent duplicate forms
  if (window.formInitialized) return;
  
  // Get the form container
  const formContainer = document.querySelector('.hs-form-frame');
  if (!formContainer) {
    console.error('Form container not found');
    return;
  }
  
  try {
    // Make sure hbspt is available (HubSpot forms script loaded)
    if (typeof hbspt === 'undefined') {
      console.error('HubSpot forms script not loaded');
      return;
    }
    
    // Create form using HubSpot JS API with exact parameters from the container
    hbspt.forms.create({
      region: formContainer.getAttribute('data-region') || "na1",
      portalId: formContainer.getAttribute('data-portal-id') || "2247038",
      formId: formContainer.getAttribute('data-form-id') || "36978c97-a0ec-4eb9-ac9c-2b0c484c2314",
      target: ".hs-form-frame",
      onFormSubmit: function() {
        // Handle successful submission - close modal after delay
        setTimeout(() => {
          const modal = document.querySelector('.nomination-modal');
          if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Enable scrolling
            
            // Show success message
            alert('Thank you for your nomination!');
          }
        }, 2000);
      },
      onFormReady: function() {
        console.log('HubSpot form loaded successfully');
      }
    });
    
    // Mark form as initialized
    window.formInitialized = true;
  } catch (error) {
    console.error('Error initializing HubSpot form:', error);
  }
}