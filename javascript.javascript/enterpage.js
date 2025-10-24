document.getElementById("registerForm").addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
    const func = document.getElementById("function").value.trim();

    if(password !== confirm){
        alert("Passwords do not match!");
        return;
    }

    const userData = { name, email, phone, password, function: func };
    localStorage.setItem("memoriUser", JSON.stringify(userData));

    alert("Account created successfully!");
    document.getElementById("registerForm").reset();
});
