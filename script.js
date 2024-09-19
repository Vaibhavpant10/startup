
//const openMenu = document.getElementById("openMenu");
//const closeMenu = document.getElementById("closeMenu");
//const mobileNav = document.getElementById('mobileNav');

//function openMenu(){
   //// mobileNav.classList.toggle('top-16')
//}


//function open(){
    
    // openMenu.classList.add('hidden');
    //mobileNav.classList.remove('hidden');
 
//}

//function close(){
    
    // openMenu.classList.remove('hidden');
    //mobileNav.classList.add('hidden');
//}

// }
// openMenu.addEventListener('click',()=>{

//     openMenu.classList.add('hidden');
//     mobileNav.classList.remove('hidden')
 
// })

// closeMenu.addEventListener('click',()=>{

//     openMenu.classList.remove('hidden');
//     mobileNav.classList.add('hidden')



// })


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







