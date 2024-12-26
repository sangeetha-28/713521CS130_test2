function validateSignUpForm(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username === '' || email === '' || password === '') {
        alert('All fields are required!');
        return false;
    }

    // You can add more validation logic here (e.g., email format)

    alert('Sign Up Successful!');
    // Here you would typically send the data to the server
}

// Function to validate the login form
function validateLoginForm(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Both fields are required!');
        return false;
    }

    alert('Login Successful!');
    // Here you would typically send the data to the server
}

// Function to validate the contact form
function validateContactForm(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('All fields are required!');
        return false;
    }

    alert('Message Sent!');
    // Here you would typically send the data to the server
}

// Add event listeners to forms
document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.querySelector('form'); // Sign Up form
    const loginForm = document.querySelector('form'); // Login form
    const contactForm = document.querySelector('form'); // Contact form

    if (signUpForm) {
        signUpForm.addEventListener('submit', validateSignUpForm);
    }

    if (loginForm) {
        loginForm.addEventListener('submit', validateLoginForm);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', validateContactForm);
    }
});