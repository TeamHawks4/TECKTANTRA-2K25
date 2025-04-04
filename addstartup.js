document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('startupForm');
    const container = document.querySelector('.container');
    const submitBtn = document.getElementById('submitBtn');

    // Create spinner overlay
    const spinnerOverlay = document.createElement('div');
    spinnerOverlay.className = 'spinner-overlay';
    spinnerOverlay.innerHTML = `
        <div class="spinner"></div>
        <p>Submitting your startup...</p>
    `;

    // Create success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <h3>🎉 Submission Successful!</h3>
        <p>Thank you for submitting your startup. We'll review your information and get back to you soon.</p>
        <button id="newSubmission">Submit Another Startup</button>
    `;

    // Form submission handler
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            return;
        }
        
        // Show loading spinner
        container.appendChild(spinnerOverlay);
        spinnerOverlay.style.display = 'flex';
        submitBtn.disabled = true;
        
        try {
            // Simulate API call (replace with actual fetch to your backend)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Hide form and show success message
            form.style.display = 'none';
            container.appendChild(successMessage);
            successMessage.style.display = 'block';
            
            // Handle new submission button
            document.getElementById('newSubmission').addEventListener('click', function() {
                form.reset();
                form.style.display = 'block';
                successMessage.style.display = 'none';
                container.removeChild(successMessage);
            });
            
        } catch (error) {
            console.error('Submission error:', error);
            alert('There was an error submitting your form. Please try again.');
        } finally {
            // Hide spinner
            spinnerOverlay.style.display = 'none';
            submitBtn.disabled = false;
        }
    });
    
    // Form validation function
    function validateForm() {
        let isValid = true;
        
        // Required fields
        const requiredFields = [
            'name', 'email', 'phone', 'startup', 
            'industry', 'description', 'year',
            'stage', 'funding', 'problem', 'market',
            'pitchdeck', 'terms', 'contact'
        ];
        
        requiredFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (!field) return;
            
            // Special handling for checkboxes
            if (field.type === 'checkbox') {
                if (!field.checked) {
                    markInvalid(field.parentElement, 'This field is required');
                    isValid = false;
                } else {
                    markValid(field.parentElement);
                }
                return;
            }
            
            // Special handling for file input
            if (field.type === 'file') {
                if (!field.files || field.files.length === 0) {
                    markInvalid(field, 'Please upload a file');
                    isValid = false;
                } else {
                    // Check file type and size
                    const file = field.files[0];
                    if (file.type !== 'application/pdf') {
                        markInvalid(field, 'Only PDF files are allowed');
                        isValid = false;
                    } else if (file.size > 10 * 1024 * 1024) {
                        markInvalid(field, 'File size must be less than 10MB');
                        isValid = false;
                    } else {
                        markValid(field);
                    }
                }
                return;
            }
            
            // Regular fields
            if (field.value.trim() === '') {
                markInvalid(field, 'This field is required');
                isValid = false;
            } else {
                markValid(field);
                
                // Email validation
                if (fieldId === 'email' && !validateEmail(field.value)) {
                    markInvalid(field, 'Please enter a valid email address');
                    isValid = false;
                }
                
                // Year validation
                if (fieldId === 'year') {
                    const year = parseInt(field.value);
                    const currentYear = new Date().getFullYear();
                    if (isNaN(year) || year < 1900 || year > currentYear) {
                        markInvalid(field, `Please enter a valid year (1900-${currentYear})`);
                        isValid = false;
                    }
                }
                
                // URL validation for optional fields
                if ((fieldId === 'website' || fieldId === 'linkedin') && field.value.trim() !== '') {
                    if (!validateUrl(field.value)) {
                        markInvalid(field, 'Please enter a valid URL');
                        isValid = false;
                    }
                }
            }
        });
        
        return isValid;
    }
    
    // Helper functions
    function markInvalid(element, message) {
        element.classList.add('error');
        
        // Remove existing error message
        let errorMessage = element.nextElementSibling;
        if (errorMessage && errorMessage.classList.contains('error-message')) {
            errorMessage.remove();
        }
        
        // Add error message
        errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = message;
        element.parentNode.insertBefore(errorMessage, element.nextSibling);
    }
    
    function markValid(element) {
        element.classList.remove('error');
        
        // Remove error message if exists
        const errorMessage = element.nextElementSibling;
        if (errorMessage && errorMessage.classList.contains('error-message')) {
            errorMessage.remove();
        }
    }
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function validateUrl(url) {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }
});