const form = document.getElementById('myForm');
const submitBtn = document.getElementById('submitBtn');
const termsCheckbox = document.getElementById('terms');
const formFields = form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');

// Function to check if all fields are filled
function areFieldsFilled() {
  return Array.from(formFields).every(field => field.value.trim() !== '');
}

// Function to toggle the submit button based on field completion and terms acceptance
function toggleSubmitButton() {
  submitBtn.disabled = !(areFieldsFilled() && termsCheckbox.checked);
}

// Event listeners for input fields to check completion
formFields.forEach(field => {
  field.addEventListener('input', toggleSubmitButton);
});

// Event listener for the terms checkbox
termsCheckbox.addEventListener('change', toggleSubmitButton);

// Final form submission event
form.addEventListener('submit', function (event) {
  // Prevent submission if any field is incomplete
  if (!areFieldsFilled() || !termsCheckbox.checked) {
    event.preventDefault();
    alert("Please complete all fields and accept the terms and conditions.");
  }
});
