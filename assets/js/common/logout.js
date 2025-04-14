document.addEventListener("DOMContentLoaded", function() {
    // Find the logout elements with the aria-label "Log out"
    const logoutButtons = document.querySelectorAll('[aria-label="Log out"]');

    logoutButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Prevent default action (in case the button has a link or form action)
            event.preventDefault();

            // Show a confirmation popup (could be a custom modal or a simple alert)
            if (confirm("Are you sure you want to log out?")) {
                // Perform logout actions
                logout();
            }
        });
    });
});

// Logout function
function logout() {
    window.location.href = "/pages/authentication/authentication.html";
}
