// ===============================
// Feature 1: Light/Dark Mode Toggle
// ===============================
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// ===============================
// Feature 2: Counter Game
// ===============================
let counter = 0;
const counterValue = document.getElementById('counterValue');

document.getElementById('increaseBtn').addEventListener('click', () => {
  counter++;
  counterValue.textContent = counter;
});

document.getElementById('decreaseBtn').addEventListener('click', () => {
  counter--;
  counterValue.textContent = counter;
});

// ===============================
// Feature 3: Collapsible FAQ
// ===============================
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle('hidden');
  });
});

// ===============================
// Feature 4: Custom Form Validation
// ===============================
document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Stop form from submitting

  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let password = document.getElementById('password').value.trim();
  let valid = true;

  // Name validation
  if(name === "") {
    document.getElementById('nameError').textContent = "Name is required";
    valid = false;
  } else {
    document.getElementById('nameError').textContent = "";
  }

  // Email validation
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(!email.match(emailPattern)) {
    document.getElementById('emailError').textContent = "Enter a valid email";
    valid = false;
  } else {
    document.getElementById('emailError').textContent = "";
  }

  // Password validation
  if(password.length < 6) {
    document.getElementById('passwordError').textContent = "Password must be at least 6 characters";
    valid = false;
  } else {
    document.getElementById('passwordError').textContent = "";
  }

  // If all validations pass
  if(valid) {
    alert("Form submitted successfully!");
    this.reset();
  }
});
