// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all FAQ items
      faqItems.forEach(faq => faq.classList.remove('active'));

      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
});

// Form Submission
const inquiryForm = document.getElementById('inquiryForm');
const formSuccess = document.getElementById('formSuccess');

if (inquiryForm) {
  inquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // In a real implementation, you would send the form data to a backend
    // For now, we'll just show a success message

    const formData = new FormData(inquiryForm);
    const data = Object.fromEntries(formData.entries());

    console.log('Form submission:', data);

    // Hide form and show success message
    inquiryForm.style.display = 'none';
    formSuccess.style.display = 'block';

    // Scroll to success message
    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}
