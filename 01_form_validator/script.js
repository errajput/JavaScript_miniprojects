document.getElementById("myform").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  let isValid = true;
  if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
    document.getElementById("emailError").textContent = "Invalid email!";
    isValid = false;
  }

  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Please enter a valid password!";
    isValid = false;
  }

  if (isValid) {
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password); // 🔒 In real projects, don't store passwords like this!

    alert("Form submitted and data saved to localStorage!");
    document.getElementById("myform").reset(); // clear the form
  }
});
