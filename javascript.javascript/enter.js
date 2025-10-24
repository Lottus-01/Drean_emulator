// REGISTER LOGIC
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
    const func = document.getElementById("function").value.trim();

    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }

    const userData = { name, email, phone, password, function: func };
    localStorage.setItem("memoriUser", JSON.stringify(userData));

    alert("Account created successfully!");
    registerForm.reset();
    window.location.href = "login.html";
  });
}

// LOGIN LOGIC
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const savedUser = JSON.parse(localStorage.getItem("memoriUser"));

    if (!savedUser) {
      alert("No registered account found. Please create one first!");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      alert(`Welcome back, ${savedUser.name}!`);
      loginForm.reset();
    } else {
      alert("Incorrect email or password!");
    }
  });
}
