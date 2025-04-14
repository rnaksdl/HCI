// Selecting all buttons with the class "addBtn"
const addBtns = document.querySelectorAll('.addBtn');

// Looping through each button and adding a click event listener
addBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // If button is currently "ADD" change to check mark, revert otherwise
    if (btn.textContent.trim() === 'ADD') 
    {
      btn.textContent = '✔';
    } 
    else 
    {
      btn.textContent = 'ADD';
      // Reset any styling changes if necessary
    }
  });
});
