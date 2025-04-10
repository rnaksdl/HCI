const addEntryBtn = document.querySelector('.addEntry');
const modalOverlay = document.querySelector('.modalOverlay');
const closeModalBtn = document.querySelector('.closeModal');

addEntryBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('hidden');
    console.log("Worked")
});

closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('hidden');
});

// Optional: close modal when clicking outside the box
modalOverlay.addEventListener('click', (e) => {
if (e.target === modalOverlay) {
    modalOverlay.classList.add('hidden');
}
});
