function togglePaymentOption(card, event) {
    // Prevent the event from propagating to the parent card when clicking inside input fields or buttons
    if (event.target.closest('.paymentInput') || event.target.closest('.submitButton')) {
        event.stopPropagation();
        return; // Exit the function early if it's an input or button
    }

    // Close all other cards
    const allCards = document.querySelectorAll('.paymentCard');
    allCards.forEach(c => {
        if (c !== card) {
            c.classList.remove('active');
        }
    });

    // Toggle the clicked card's active state
    card.classList.toggle('active');
}

function sendReceipt() {
    // Get the email address entered by the user
    const email = document.getElementById('emailInput').value;
    
    // Check if the email is not empty
    if (email) {
        // Display the dynamic message
        alert(`A receipt has been sent to ${email}`);

        // Redirect to the customer dashboard (menuDashboard.html) after 2 seconds
        setTimeout(function() {
            window.location.href = "menuDashboard.html"; // Redirect to the customer dashboard
        }, 2000); // 2-second delay to allow user to see the receipt message
    } else {
        // Display a message if the email is empty
        alert('Please enter a valid email address.');
    }
}
