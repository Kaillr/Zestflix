// Add scroll event listener to window
window.addEventListener('scroll', () => {
    // Get the header element
    const header = document.getElementById('headerSolid');
    // Toggle 'show' class based on page Y offset
    header.classList.toggle('show', window.pageYOffset > 0);
});
