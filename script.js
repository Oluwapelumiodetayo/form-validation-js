alert("JS is connected");

const form = document.getElementById("registrationForm");

const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const age = document.getElementById("age");

/* BONUS: real-time age validation */
age.addEventListener("input", function () {
  // Use a number comparison directly
  if (Number(age.value) < 18) {
    age.style.border = "2px solid red";
  } else {
    age.style.border = "2px solid green";
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the values from the input fields
  const nameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;
  const ageValue = Number(age.value);

  // 1. Full Name Validation
  if (nameValue === "" || nameValue.split(" ").length < 2) {
    alert("Full Name must contain at least two words");
    return;
  }

  // 2. Email Validation
  const emailPattern = /^\S+@\S+\.\S+$/;
  if (!emailPattern.test(emailValue)) {
    alert("Please enter a valid email address");
    return; // <<< FIXED: Added return here
  }

  // 3. Password Strength Validation
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  if (!passwordPattern.test(passwordValue)) {
    alert(
      "Password must be at least 8 characters and include an uppercase letter, a number, and a special character"
    );
    return; // <<< FIXED: Added return here
  }

  // 4. Password Match Validation
  if (passwordValue !== confirmPasswordValue) { // <<< FIXED: Used passwordValue and confirmPasswordValue
    alert("Passwords do not match");
    return;
  }

  // 5. Age Validation
  if (ageValue < 18) {
    alert("You must be at least 18 years old");
    return;
  }
  
  // 6. Final Success
  alert("Registration successful!");
  form.reset();
});