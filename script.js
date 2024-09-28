
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




//   // Array of video sources
//   const videoSources = [
//     'images/startup.mp4',   // First video source
//     'images/startup2.mp4',    // Second video source
//     'images/startup3.mp4'     // Third video source
//   ];

//   const videoElement = document.getElementById('hero-video');
//   let currentVideoIndex = 0;

//   // Function to play the next video
//   const playNextVideo = () => {
//     // Set the video source
//     videoElement.src = videoSources[currentVideoIndex];

//     // Set custom styles for specific videos (video2 and video3)
//     if (currentVideoIndex === 1) {
//       // Set custom width and height for video2
//       videoElement.style.width = '100%'; // Example width
//       videoElement.style.height = '400px'; // Example height
//     } else if (currentVideoIndex === 2) {
//       // Set custom width and height for video3
//       videoElement.style.width = '100%'; // Example width
//       videoElement.style.height = '300px'; // Example height
//     } else {
//       // Reset to full width and height for the first video or others
//       videoElement.style.width = '100%'; 
//       videoElement.style.height = '100%';
//     }

//     // Play the video
//     videoElement.play();

//     // Move to the next video index
//     currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
//   };

//   // Listen for the 'ended' event and call the function to play the next video
//   videoElement.addEventListener('ended', playNextVideo);

//   // Start by playing the first video
//   playNextVideo();






  // Array of video sources
  const videoSources = [
    
    'images/startup2.mp4',   // First video source
    'images/startup3.mp4'   // First video source
    
  ];

  const videoElement = document.getElementById('hero-video');
  let currentVideoIndex = 0;

  // Function to play the next video
  const playNextVideo = () => {
    // Set the video source
    videoElement.src = videoSources[currentVideoIndex];

    // Set custom styles for specific videos (video2 and video3)
    if (currentVideoIndex === 1) {
      // Set custom width and height for video2
      videoElement.style.width = '800px'; // Example width
      videoElement.style.height = '400px';
      videoElement.style.objectFit = 'cover';
    //   videoElement.style.mixBlendMode = 'color-burn';
       // Example height
    } else if (currentVideoIndex === 2) {
      // Set custom width and height for video3
      videoElement.style.width = '800px'; // Example width
      videoElement.style.height = '300px';
      videoElement.style.objectFit = 'cover'; // Example height
    //   videoElement.style.mixBlendMode = 'color-burn';
    } else {
      // Reset to full width and height for the first video or others
      videoElement.style.width = '100%'; 
      videoElement.style.height = '100%';
      videoElement.style.objectFit = 'cover';
    //   videoElement.style.mixBlendMode = 'color-burn';
    }

    // Ensure video fits inside the container
    videoElement.style.maxWidth = '100%';  // Ensure it doesn't overflow the div horizontally
    videoElement.style.maxHeight = '100%'; // Ensure it doesn't overflow the div vertically
    videoElement.style.objectFit = 'cover'; // Keep the aspect ratio, but fill the container
    videoElement.style.mixBlendMode = 'color-burn';

    // Play the video
    videoElement.play();

    // Move to the next video index
    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
  };

  // Listen for the 'ended' event and call the function to play the next video
  videoElement.addEventListener('ended', playNextVideo);

  // Start by playing the first video
  playNextVideo();










