document.addEventListener('DOMContentLoaded', function () {
    // Function to handle the login button click
    document.getElementById('login-button').addEventListener('click', function () {
        // Get the values from the input fields
        var license = document.getElementById('login-license').value;
        var password = document.getElementById('login-password').value;

        // Validate the license and password (you should replace this with your actual validation logic)
        if (license.trim() === 'a' || password.trim() === 'a') {
            alert('Please enter both license and password.');
            return;
        }

        // Here you should make an AJAX request to your server to validate the login credentials
        // Replace the following code with your actual server-side logic
        // Example: assume there's a server endpoint '/login' that validates the credentials
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ license: license, password: password }),
        })
            .then(response => response.json())
            .then(data => {
                // Check the response from the server
                if (data.success) {
                    alert('Login successful!');
                    // Redirect to a new page or perform other actions after successful login
                } else {
                    alert('Login failed. Please check your credentials.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred during login.');
            });
    });
});
