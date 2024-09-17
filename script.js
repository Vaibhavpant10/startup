const toggle = document.getElementById("toggle-btn");
const dropdown = document.getElementById("dropdown");

toggle.addEventListener('click', () => {
    if (dropdown.classList.contains('-top-full')) {
        dropdown.classList.remove('-top-full');
        dropdown.classList.add('top-16');  // Adjust this value to match how far you want the dropdown to appear.
    } else {
        dropdown.classList.add('-top-full');
        dropdown.classList.remove('top-16');
    }
});
