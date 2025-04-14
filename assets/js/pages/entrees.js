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

// Getting the modification text input and add button
const modBox = document.getElementById('modBox');
const modAddBtn = document.querySelector('.modAddBtn');

// Creating or getting a container for displaying the added modifications.
let modificationsList = document.getElementById('modificationsList');
if (!modificationsList) {
    modificationsList = document.createElement('div');
    modificationsList.id = 'modificationsList';
    modificationsList.classList.add('modList')
    document.querySelector('.addMods').appendChild(modificationsList);
}

// Using an array to track modification strings
let modifications = [];

// Helper functions

// helper function to clear the main modal fields and modifications
function clearModalFields() {
    itemName.value = '';
    itemImage.value = '';
    itemPrice.value = '';
    itemDescription.value = '';
    modBox.value = '';
    modifications = [];
    modificationsList.innerHTML = '';
}

// Rendering the modifications list
function renderModifications() {
    // Clearing container first
    modificationsList.innerHTML = '';
    modifications.forEach((modText, index) => {
        // Creating a container div for this modification
        const modItem = document.createElement('div');
        modItem.classList.add('modItem');

        // Creating a span to display the modification text
        const modSpan = document.createElement('span');
        modSpan.textContent = modText;

        // Create an "Edit" button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('modEditBtn');
        editBtn.addEventListener('click', () => {
            // Populating the modification input with this mod's text
            modBox.value = modText;
            // Removing this modification (so it can be updated)
            modifications.splice(index, 1);
            renderModifications();
            // Making sure the input remains visible if below max count.
            document.querySelector('.modAndBtn').style.display = 'flex';
        });

        // Create a "Delete" button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('modDeleteBtn')
        deleteBtn.addEventListener('click', () => {
            // Removing this modification from the array
            modifications.splice(index, 1);
            renderModifications();
            // Showing the add-mod input if modifications drop below 3
            if (modifications.length < 3) {
                document.querySelector('.modAndBtn').style.display = 'flex';
            }
        });

        // Appending the span and buttons into the modification item
        modItem.appendChild(modSpan);
        const btnContainer = document.createElement('div');
        btnContainer.appendChild(editBtn);
        btnContainer.appendChild(deleteBtn);
        modItem.appendChild(btnContainer);

        modificationsList.appendChild(modItem);
    });

    // Hiding the add-mod input if already at 3 modifications
    if (modifications.length >= 3) 
    {
        document.querySelector('.modAndBtn').style.display = 'none';
    } 
    else 
    {
        document.querySelector('.modAndBtn').style.display = 'flex';
    }
}

// Event listeners

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

// Modifications add button
modAddBtn.addEventListener('click', () => {
    const modText = modBox.value.trim();
    // Doing nothing if empty or if limit (3) reached
    if (modText === '') return;
    if (modifications.length >= 3) {
        // This should never trigger but is here as a precaution
        alert('You can only add up to three modifications.');
        return;
    }
    // Adding the modification and clearing the input
    modifications.push(modText);
    modBox.value = '';
    renderModifications();
});

submitBtn.addEventListener('click', () => {

    // Validating required fields
    if (itemName.value.trim() === '') {
        alert('Please enter the name of the entree');
        return;
    }
    if (itemPrice.value.trim() === '') {
        alert('Please enter the price for the entree');
        return;
    }
    
    // Determining image source
    let imageSrc = '';
    if (itemImage.files && itemImage.files[0]) {
        imageSrc = URL.createObjectURL(itemImage.files[0]);
    } else {
        // Default image path (adjust as needed)
        imageSrc = '../../assets/img/defaultImage.png';
    }
    
    // If any modifications have been added, build HTML checkboxes
    let modificationsHtml = '';
    if (modifications.length > 0) {
        modificationsHtml = modifications.map((mod, index) => {
            return `
                <input type="checkbox" id="mod-${index}" name="modifications" value="${mod}">
                <label for="mod-${index}">${mod}</label>
            `;
        }).join('');
    } else {
        modificationsHtml = '+ Modifications';
    }
    
    // Create new entry element
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
                ${ itemDescription.value ? itemDescription.value : '' }
            </div>
            <div class="mods">
                <div class="modTitle">
                    Add Modifications:
                </div>
                <div class="actualMods">
                    ${ modificationsHtml }
                </div>
            </div>
        </div>
    `;
    
    // Insert new entry element before the "addEntry" button
    addEntryDiv.parentElement.insertBefore(entryDiv, addEntryDiv);
    
    // Clear all fields and modifications, then close the modal
    clearModalFields();
    modalOverlay.classList.add('hidden');
});
