const submitButton = document.querySelector('.submitButton');
const textEntry = document.querySelector('.textEntry');
const mainBody = document.querySelector('.mainBody');
const addNewGroup = document.querySelector('.addNewGroup');

submitButton.addEventListener('click', function(event) {
    // Preventing any default behavior (optional if not inside a form)
    event.preventDefault();
    console.log("Pressed")

    // Getting text from text box and trimming so we don't get whitespace
    const groupName = textEntry.value.trim();

    // Check to see if text box actually has anything in it
    if (groupName !== "") {
    // Creating a new div and assigning it the groupBox class
    const newGroupBox = document.createElement('div');
    newGroupBox.classList.add('groupBox');
    newGroupBox.textContent = groupName;

    // Inserting the new groupBox before the addNewGroup container
    mainBody.insertBefore(newGroupBox, addNewGroup);

    // Clearing the text entry for a new input
    textEntry.value = "";
    }
});