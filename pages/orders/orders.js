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