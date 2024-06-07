document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
    const errorMessage = document.getElementById("error-message");

    // Simulated registration credentials
    const validUsername = "abhishek";
    const validEmail = "abhichembrolu4865@gmail.com";
    const validPassword = "abhi2005";

    console.log("Username entered:", username);
    console.log("Email entered:", email);
    console.log("Password entered:", password);
    console.log("Confirm Password entered:", confirmPassword);

    // Validate registration details
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        errorMessage.textContent = "All fields are required.";
        console.log("Error: All fields are required.");
    } else if (username !== validUsername || email !== validEmail) {
        errorMessage.textContent = "Incorrect username or email.";
        console.log("Error: Incorrect username or email.");
    } else if (password !== validPassword) {
        errorMessage.textContent = "Incorrect password.";
        console.log("Error: Incorrect password.");
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
