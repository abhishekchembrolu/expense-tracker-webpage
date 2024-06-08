document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
    const errorMessage = document.getElementById("error-message");

    console.log("Username entered:", username);
    console.log("Email entered:", email);
    console.log("Password entered:", password);
    console.log("Confirm Password entered:", confirmPassword);

    // Validate registration details
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        errorMessage.textContent = "All fields are required.";
        console.log("Error: All fields are required.");
    } else if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        console.log("Error: Passwords do not match.");
    } else {
        // Successful registration
        errorMessage.textContent = ""; // Clear error message
        console.log("Registration successful. Redirecting to expense.html");
        // Redirect to expense page
        window.location.href = "expense.html"; // Redirect to expense page
    }
});
