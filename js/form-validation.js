// Form Validation Script
(function() {
  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Configure validation for all forms
    configureContactForm('contactForm');
    configureContactForm('contactPageForm');
    configureNewsletterForm();
  });

  // Configure contact form validation
  function configureContactForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', function(event) {
      // Prevent default submission
      event.preventDefault();
      
      // Clear previous errors
      clearErrors(form);
      
      // Validate form
      const isValid = validateContactForm(form);
      
      // If valid, submit form (for demo purposes we'll just show a success message)
      if (isValid) {
        showSuccessMessage(form);
        // In a real implementation, you would submit the form here
        // form.submit();
      }
    });

    // Add real-time validation on input
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('input', function() {
        validateField(this);
      });
    });
  }

  // Configure newsletter form validation
  function configureNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    if (!form) return;

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      clearErrors(form);
      
      const emailInput = form.querySelector('input[type="email"]');
      if (validateEmail(emailInput.value)) {
        showSuccessMessage(form);
        // In a real implementation: form.submit();
      } else {
        showError(emailInput, 'Please enter a valid email address');
      }
    });
  }

  // Validate contact form
  function validateContactForm(form) {
    let isValid = true;
    
    // Validate name
    const nameInput = form.querySelector('input[name="name"]');
    if (nameInput && !validateName(nameInput.value)) {
      showError(nameInput, 'Please enter your full name');
      isValid = false;
    }
    
    // Validate phone (if present)
    const phoneInput = form.querySelector('input[name="phone"]');
    if (phoneInput && !validatePhone(phoneInput.value)) {
      showError(phoneInput, 'Please enter a valid phone number (10-15 digits)');
      isValid = false;
    }
    
    // Validate email
    const emailInput = form.querySelector('input[name="email"]');
    if (emailInput && !validateEmail(emailInput.value)) {
      showError(emailInput, 'Please enter a valid email address');
      isValid = false;
    }
    
    // Validate subject (if present)
    const subjectInput = form.querySelector('input[name="subject"]');
    if (subjectInput && !validateSubject(subjectInput.value)) {
      showError(subjectInput, 'Please enter a subject');
      isValid = false;
    }
    
    // Validate message
    const messageInput = form.querySelector('textarea[name="message"]');
    if (messageInput && !validateMessage(messageInput.value)) {
      showError(messageInput, 'Message must be at least 20 characters long');
      isValid = false;
    }
    
    return isValid;
  }

  // Individual field validators
  function validateName(name) {
    return name.trim().length >= 2 && /^[a-zA-Z\s\-']+$/.test(name.trim());
  }

  function validatePhone(phone) {
    // Remove non-digit characters
    const digits = phone.replace(/\D/g, '');
    return digits.length >= 10 && digits.length <= 15;
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  }

  function validateSubject(subject) {
    return subject.trim().length >= 3;
  }

  function validateMessage(message) {
    return message.trim().length >= 20;
  }

  // Validate a single field
  function validateField(field) {
    // Clear previous error
    const errorElement = field.parentElement.querySelector('.error-message');
    if (errorElement) {
      errorElement.remove();
    }
    
    // Add success styling if field is valid
    if (field.checkValidity() && 
        ((field.name === 'name' && validateName(field.value)) ||
         (field.name === 'phone' && validatePhone(field.value)) ||
         (field.name === 'email' && validateEmail(field.value)) ||
         (field.name === 'subject' && validateSubject(field.value)) ||
         (field.name === 'message' && validateMessage(field.value)))) {
      field.classList.add('input-valid');
      field.classList.remove('input-invalid');
    } else {
      field.classList.remove('input-valid');
    }
  }

  // Show error message
  function showError(input, message) {
    // Add error styling
    input.classList.add('input-invalid');
    input.classList.remove('input-valid');
    
    // Create error message element
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    
    // Insert after input
    input.parentElement.appendChild(errorElement);
    
    // Scroll to error
    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Focus on the field
    input.focus();
  }

  // Clear all errors from a form
  function clearErrors(form) {
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
    
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.classList.remove('input-invalid');
      input.classList.remove('input-valid');
    });
  }

  // Show success message
  function showSuccessMessage(form) {
    // Create success message container
    const successContainer = document.createElement('div');
    successContainer.className = 'form-success';
    successContainer.innerHTML = `
      <div class="success-icon">✓</div>
      <div class="success-text">
        <h3>Thank you!</h3>
        <p>Your message has been sent successfully.</p>
      </div>
    `;
    
    // Store reference to original content
    const originalContent = form.innerHTML;
    
    // Replace form content with success message
    form.innerHTML = '';
    form.appendChild(successContainer);
    
    // Add animation class after a small delay
    setTimeout(() => {
      successContainer.classList.add('success-visible');
    }, 10);
    
    // For demo purposes, reset form after 5 seconds
    setTimeout(() => {
      form.innerHTML = originalContent;
      clearErrors(form);
      configureContactForm(form.id); // Re-configure validation
    }, 5000);
  }

  // Add CSS styles dynamically
  function addValidationStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .input-valid {
        border-color: #22c55e !important;
        background-color: rgba(34, 197, 94, 0.05);
      }
      
      .input-invalid {
        border-color: #ef4444 !important;
        background-color: rgba(239, 68, 68, 0.05);
      }
      
      .error-message {
        color: #ef4444;
        font-size: 0.875rem;
        margin-top: 0.25rem;
        font-weight: 500;
      }
      
      .form-success {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        text-align: center;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
      }
      
      .form-success.success-visible {
        opacity: 1;
        transform: translateY(0);
      }
      
      .success-icon {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background-color: #22c55e;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      
      .success-text h3 {
        color: #16a34a;
        margin-bottom: 0.5rem;
        font-size: 1.25rem;
      }
      
      .success-text p {
        color: #475569;
        margin: 0;
      }
    `;
    document.head.appendChild(style);
  }
  
  // Add validation styles when the script loads
  addValidationStyles();
})();