// Getting DOM elements
const addEntryBtn = document.querySelector('.addEntry');
const modalOverlay = document.querySelector('.modalOverlay');
const closeModalBtn = document.querySelector('.closeModal');
const submitBtn = document.querySelector('.modalSubmitBtn');

const itemName = document.getElementById('itemName');
const itemImage = document.getElementById('itemImage')
const itemPrice = document.getElementById('itemPrice');
const itemDescription = document.getElementById('itemDescription');

// Getting container where new entries will be added
// inserting new entries before the "addEntry" element in our case
const addEntryDiv = document.querySelector('.addEntry');

// Helper function to clear all modal fields
function clearModalFields() {
    itemName.value = '';
    itemImage.value = '';
    itemPrice.value = '';
    itemDescription.value = '';
  }

// Opening modal when addEntryBtn button is clicked
addEntryBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('hidden');
});

// Closing modal when closeModalBtn button is clicked
closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('hidden');
    clearModalFields();
});

// Closing modal when they click outside of modal window
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.add('hidden');
        clearModalFields();
    }
});

// Submit new entry when the user presses the submit button
submitBtn.addEventListener('click', () => {
    // Validate the required fields
    if (itemName.value.trim() === '' || itemPrice.value.trim() === '') {
        alert('Please fill out all required fields.');
        return;
    }
    
    // Determine image source:
    // Use a URL.createObjectURL if an image file is selected; otherwise use a default image.
    let imageSrc = '';
    if (itemImage.files && itemImage.files[0]) {
        imageSrc = URL.createObjectURL(itemImage.files[0]);
    } else {
        // Update this path to a default image if desired
        imageSrc = '../../assets/img/killerBurger.png';
    }
    
    // Create a new entry element that replicates the structure of your existing entries.
    const entryDiv = document.createElement('div');
    entryDiv.classList.add('entry');
    
    entryDiv.innerHTML = `
        <div class="entryImage">
            <img src="${imageSrc}" alt="${itemName.value}">
        </div>
        <div class="nameAndPrice">
            <div class="mainName">
                <b>${itemName.value}</b>
            </div>
            <div class="price">
                $${parseFloat(itemPrice.value).toFixed(2)}
            </div>
        </div>
        <div class="descAndMods">
            <div class="description">
                ${itemDescription.value ? itemDescription.value : ''}
            </div>
            <div class="mods">
                + Modifications
            </div>
        </div>
    `;
    
    // Insert the new entry element before the "addEntry" div so that it appears
    // after any existing entries.
    addEntryDiv.parentElement.insertBefore(entryDiv, addEntryDiv);
    
    // Clear all modal fields and close the modal window
    clearModalFields();
    modalOverlay.classList.add('hidden');
});
