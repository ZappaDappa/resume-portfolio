// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {

    // Get the three elements we need to interact with
    const aboutLink = document.getElementById('about-link');
    const modal = document.getElementById('about-modal');
    const closeBtn = document.querySelector('.close-btn');

    // Function to open the modal
    function openModal(e) {
        e.preventDefault(); // Stop the '#' link from jumping the page
        modal.classList.add('show');
    }

    // Function to close the modal
    function closeModal() {
        modal.classList.remove('show');
    }

    // Event Listeners
    aboutLink.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    // Also close the modal if the user clicks *outside* of the content box
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

});