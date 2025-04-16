function showOrders(orderType) {
    const currentOrders = document.querySelector('.currentOrders');
    const pastOrders = document.querySelector('.pastOrders');
    const currentBtn = document.querySelector('button[onclick="showOrders(\'current\')"]');
    const pastBtn = document.querySelector('button[onclick="showOrders(\'past\')"]');

    if (orderType === 'current') {
        currentOrders.style.display = 'block';
        pastOrders.style.display = 'none';
        currentBtn.classList.add('active');
        pastBtn.classList.remove('active');
    } else {
        currentOrders.style.display = 'none';
        pastOrders.style.display = 'block';
        currentBtn.classList.remove('active');
        pastBtn.classList.add('active');
    }
}

function changeStatus(button, orderId) {
    const orderBox = document.getElementById(`order-${orderId}`);
    const statusElement = orderBox.querySelector('.status');  // Directly target the status element
    const currentStatus = statusElement.innerText;

    if (currentStatus === 'Preparing') {
        statusElement.innerText = 'Ready';
        statusElement.className = 'status ready';
    } else if (currentStatus === 'Ready') {
        statusElement.innerText = 'Completed';
        statusElement.className = 'status completed';
        
        // Move the order to Past Orders when completed
        moveToPastOrders(orderBox);
    } else if (currentStatus === 'Completed') {
        statusElement.innerText = 'Preparing';
        statusElement.className = 'status preparing';
        moveToCurrentOrders(orderBox);
    }
}
function moveToPastOrders(orderBox) {
    console.log("Moving order to past orders");

    const currentOrdersSection = document.querySelector('.currentOrders .ordersContainer');
    const pastOrdersSection = document.querySelector('.pastOrders .ordersContainer');

    if (!currentOrdersSection || !pastOrdersSection) {
        console.error("Could not find current or past orders sections");
        return;
    }

    currentOrdersSection.removeChild(orderBox);
    pastOrdersSection.appendChild(orderBox);
}

function moveToCurrentOrders(orderBox) {
    console.log("Moving order to past orders");

    const currentOrdersSection = document.querySelector('.currentOrders .ordersContainer');
    const pastOrdersSection = document.querySelector('.pastOrders .ordersContainer');

    if (!currentOrdersSection || !pastOrdersSection) {
        console.error("Could not find current or past orders sections");
        return;
    }

    pastOrdersSection.removeChild(orderBox);
    currentOrdersSection.appendChild(orderBox);
}