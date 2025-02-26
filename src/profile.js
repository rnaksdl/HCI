document.addEventListener('DOMContentLoaded', () => {
    // Image upload functionality
    const uploadBtn = document.getElementById('upload-btn');
    const fileUpload = document.getElementById('file-upload');
    const profileImage = document.getElementById('profile-image');
    
    uploadBtn.addEventListener('click', () => {
        fileUpload.click();
    });
    
    fileUpload.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            
            reader.onload = (event) => {
                profileImage.src = event.target.result;
            };
            
            reader.readAsDataURL(e.target.files[0]);
        }
    });
    
    // Form submission handler
    const profileForm = document.querySelector('.profile-form');
    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real application, this would send data to the server
        const formData = new FormData(profileForm);
        const profileData = Object.fromEntries(formData.entries());
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'alert alert-success';
        successMessage.textContent = 'Profile updated successfully!';
        profileForm.appendChild(successMessage);
        
        // Remove message after 3 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
    });
    
    // Settings form submission
    const settingsForm = document.querySelector('.settings-form');
    settingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Password validation (basic example)
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        if (newPassword !== confirmPassword) {
            const errorMessage = document.createElement('div');
            errorMessage.className = 'alert alert-error';
            errorMessage.textContent = 'Passwords do not match!';
            settingsForm.appendChild(errorMessage);
            
            setTimeout(() => {
                errorMessage.remove();
            }, 3000);
            return;
        }
        
        // Success message
        const successMessage = document.createElement('div');
        successMessage.className = 'alert alert-success';
        successMessage.textContent = 'Password updated successfully!';
        settingsForm.appendChild(successMessage);
        
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
        
        // Clear password fields
        document.getElementById('current-password').value = '';
        document.getElementById('new-password').value = '';
        document.getElementById('confirm-password').value = '';
    });
});