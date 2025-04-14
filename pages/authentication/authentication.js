// This allows users to toggle between forms
function toggleForms() 
{
    document.getElementById('loginForm').classList.toggle('hidden');
    document.getElementById('signupForm').classList.toggle('hidden');
}

// Sign up validation (custom errors)
function validateSignupForm() 
{
    let valid = true;

    // All variables retrieved
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("signupEmail");
    const password = document.getElementById("signupPassword");

    const businessName = document.getElementById("businessName");
    const businessAddress1 = document.getElementById("businessAddress1");
    const businessAddress2 = document.getElementById("businessAddress2");
    const city = document.getElementById("city");
    const stateProvince = document.getElementById("state");
    const zip = document.getElementById("zip");
    const country = document.getElementById("country");
    const phoneNumber = document.getElementById("phoneNumber");
  

    // Error variables retrieved
    const firstNameError = document.getElementById("firstNameError");
    const lastNameError = document.getElementById("lastNameError");
    const emailError = document.getElementById("signupEmailError");
    const passwordError = document.getElementById("signupPasswordError");

    const businessNameError = document.getElementById("businessNameError");
    const businessAddress1Error = document.getElementById("businessAddress1Error");
    const cityError = document.getElementById("cityError");
    const stateProvinceError = document.getElementById("stateError");
    const zipError = document.getElementById("zipError");
    const countryError = document.getElementById("countryError");
    const phoneNumberError = document.getElementById("phoneNumberError");

    const summaryError = document.getElementById("signupErrorSummary");

    // Set text content
    firstNameError.textContent = "";
    lastNameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    businessNameError.textContent = "";
    businessAddress1Error.textContent = "";
    cityError.textContent = "";
    stateProvinceError.textContent = "";
    zipError.textContent = "";
    countryError.textContent = "";
    phoneNumberError.textContent = "";

    // Removing any input errors before check
    firstName.classList.remove("inputError");
    lastName.classList.remove("inputError");
    email.classList.remove("inputError");
    password.classList.remove("inputError");
    businessName.classList.remove("inputError");
    businessAddress1.classList.remove("inputError");
    businessAddress2.classList.remove("inputError");
    city.classList.remove("inputError");
    stateProvince.classList.remove("inputError");
    zip.classList.remove("inputError");
    country.classList.remove("inputError");
    phoneNumber.classList.remove("inputError");

    // ERROR CHECKING

    // First name errors: empty
    if (firstName.value.trim() === "") 
    {
        firstNameError.textContent = "First name is required.";
        firstName.classList.add("inputError");
        valid = false;
    }

    // Last Name errors: empty
    if (lastName.value.trim() === "") 
    {
        lastNameError.textContent = "Last name is required.";
        lastName.classList.add("inputError");
        valid = false;
    }

    // Email errors: empty, wrong format
    if (email.value.trim() === "") 
    {
        emailError.textContent = "Email address is required.";
        email.classList.add("inputError");
        valid = false;
    } else if (!isEmailValid(email.value.trim())) {
        emailError.textContent = "Please enter an email that follows the format: example@domain.com.";
        email.classList.add("inputError");
        valid = false;
    }

    // Password: empty, password requirements
    if (password.value.trim() === "") 
    {
        passwordError.textContent = "Password is required.";
        password.classList.add("inputError");
        valid = false;
    } else if (!isPasswordStrong(password.value.trim())) {
        passwordError.textContent = "Password must be at least 8 characters, with an uppercase letter, number, and symbol.";
        password.classList.add("inputError");
        valid = false;
    }

    // Business Name errors: empty
    if (businessName.value.trim() === "") 
    {
        businessNameError.textContent = "Business name is required.";
        businessName.classList.add("inputError");
        valid = false;
    }

    // Address 1 errors: empty
    if (businessAddress1.value.trim() === "") 
    {
        businessAddress1Error.textContent = "Address line 1 is required.";
        businessAddress1.classList.add("inputError");
        valid = false;
    }

    // City errors: empty
    if (city.value.trim() === "") 
    {
        cityError.textContent = "City is required.";
        city.classList.add("inputError");
        valid = false;
    }

    // State/Province errors: empty
    if (stateProvince.value.trim() === "") 
    {
        stateProvinceError.textContent = "State/Province is required.";
        stateProvince.classList.add("inputError");
        valid = false;
    }

    // ZIP errors: empty, not numeric format
    if (zip.value.trim() === "") 
    {
        zipError.textContent = "ZIP code is required.";
        zip.classList.add("inputError");
        valid = false;
    } else if (!isZipValid(zip.value.trim())) {
        zipError.textContent = "Zip code must be composed of only numbers (0-9)";
        zip.classList.add("inputError");
        valid = false;
    }

    // Country errors: empty
    if (country.value.trim() === "") 
    {
        countryError.textContent = "Country is required.";
        country.classList.add("inputError");
        valid = false;
    }

    // Phone errors: empty, not numeric format
    if (phoneNumber.value.trim() === "") 
    {
        phoneNumberError.textContent = "Phone number is required.";
        phoneNumber.classList.add("inputError");
        valid = false;
    } else if (!isPhoneValid(phoneNumber.value.trim())) {
        phoneNumberError.textContent = "Phone number must be composed of 10 numbers.";
        phoneNumber.classList.add("inputError");
        valid = false;
    }

    // If errors exist, show summary message
    if (!valid) 
    {
        summaryError.textContent = "Please fix the errors above before submitting.";
    }

    return valid;
}
  
// Login validation (cusotm errors)
function validateLoginForm() 
{
    let valid = true;
  
    // Getting values
    const email = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");
  
    // Error values
    const emailError = document.getElementById("loginEmailError");
    const passwordError = document.getElementById("loginPasswordError");
    const summaryError = document.getElementById("loginSummaryError");
    emailError.textContent = "";
    passwordError.textContent = "";
    summaryError.textContent = "";
  
    // Removing any styling
    email.classList.remove("inputError");
    password.classList.remove("inputError");
  
    // Email error: Invalid form or empty
    if (email.value.trim() === "")
    {
      emailError.textContent = "Email address is required.";
      email.classList.add("inputError");
      valid = false;
    } else if (!isEmailValid(email.value.trim())) {
        emailError.textContent = "Please enter an email that follows the format: example@domain.com.";
        email.classList.add("inputError");
        valid = false;
    }
  
    // Password error; empty
    if (password.value.trim() === "") 
    {
      passwordError.textContent = "Password is required.";
      password.classList.add("inputError");
      valid = false;
    }
  
    if (!valid) 
    {
      summaryError.textContent = "Please fix the errors above before submitting.";
    }
  
    return valid;
}
  
// Helper Functions
function isEmailValid(email) 
{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function isPasswordStrong(password) 
{
    return (
        password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[^A-Za-z0-9]/.test(password)
    );
}

function isAlphabetic(text) 
{
    return /^[A-Za-z]+$/.test(text);
}

function isZipValid(zip) 
{
    return /^\d{5}(-\d{4})?$/.test(zip);
}

function isPhoneValid(phone) 
{
    return /^\+?[0-9\-()\s]{7,15}$/.test(phone);
}