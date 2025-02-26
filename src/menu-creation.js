document.addEventListener('DOMContentLoaded', () => {
    // Folder Tree Expand/Collapse
    const folderItems = document.querySelectorAll('.folder-item');
    folderItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        const isExpanded = item.getAttribute('aria-expanded') === 'true';
        item.setAttribute('aria-expanded', !isExpanded);
        const childGroup = item.querySelector('[role="group"]');
        if (childGroup) {
          childGroup.style.display = isExpanded ? 'none' : 'block';
        }
      });
    });
  
    // Modal Handling
    const folderModal = document.getElementById('folder-modal');
    const itemModal = document.getElementById('item-modal');
    const closeModalButtons = document.querySelectorAll('.close-modal, .modal-cancel');
  
    document.getElementById('new-folder').addEventListener('click', () => {
      folderModal.classList.add('active');
    });
  
    document.getElementById('new-item').addEventListener('click', () => {
      itemModal.classList.add('active');
    });
  
    closeModalButtons.forEach((button) => {
      button.addEventListener('click', () => {
        folderModal.classList.remove('active');
        itemModal.classList.remove('active');
      });
    });
  
    // Form Submission
    document.getElementById('folder-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const folderName = document.getElementById('folder-name').value.trim();
      if (folderName) {
        alert(`Folder "${folderName}" created!`);
        folderModal.classList.remove('active');
      }
    });
  
    document.getElementById('item-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const itemName = document.getElementById('item-name').value.trim();
      const itemPrice = document.getElementById('item-price').value.trim();
      if (itemName && itemPrice) {
        alert(`Item "${itemName}" with price $${itemPrice} created!`);
        itemModal.classList.remove('active');
      }
    });
  
    // File Explorer Dynamic Updates
    const explorerItems = document.getElementById('explorer-items');
    folderItems.forEach((item) => {
      item.addEventListener('click', () => {
        const path = item.getAttribute('data-path');
        explorerItems.innerHTML = `<p>Loading items for "${path}"...</p>`;
        setTimeout(() => {
          explorerItems.innerHTML = `<p>No items found in "${path}".</p>`;
        }, 1000);
      });
    });
  });