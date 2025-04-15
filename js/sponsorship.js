/**
 * Sponsorship Section JavaScript
 * Simplified version that focuses on loading the section and ensuring
 * the sponsorship button correctly uses mailto: instead of nomination modal
 */

export default function initSponsorship() {
  // Load the sponsorship section HTML
  const loadSponsorshipSection = async () => {
    try {
      const response = await fetch('sections/sponsorship.html');
      const html = await response.text();
      
      // Check if sponsorship section exists in the DOM
      const sponsorshipSection = document.getElementById('sponsorship');
      if (sponsorshipSection) {
        sponsorshipSection.innerHTML = html;
        
        // Find the sponsorship CTA button and ensure it behaves properly
        const sponsorCTAButton = document.querySelector('.sponsor-cta-button');
        if (sponsorCTAButton) {
          // Make the button properly open email rather than nomination modal
          sponsorCTAButton.addEventListener('click', (e) => {
            // Let the default mailto: behavior happen
            // and stop event propagation to prevent modal from opening
            e.stopPropagation();
          });
          
          // Remove any existing classes that might trigger the nomination modal
          sponsorCTAButton.classList.remove('cta-button');
        }
      }
    } catch (error) {
      console.error('Error loading sponsorship section:', error);
    }
  };
  
  // Initialize
  loadSponsorshipSection();
}