document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    console.log("Email entered:", email);
    console.log("Password entered:", password);

    // Validate email and password
    if (email === "" || password === "") {
        errorMessage.textContent = "Email and password are required.";
        console.log("Error: Email and password are required.");
    } else {
        // Successful login
        errorMessage.textContent = ""; // Clear error message
        console.log("Login successful. Redirecting to expense.html");
        // Redirect to expense page
        window.location.href = "expense.html"; // Redirect to expense page
    }
});
