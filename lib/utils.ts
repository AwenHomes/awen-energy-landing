/**
 * Smoothly scrolls to the contact form section
 */
export const scrollToForm = () => {
  const formElement = document.getElementById('contact-form');
  if (formElement) {
    formElement.scrollIntoView({ behavior: 'smooth' });
  }
};
