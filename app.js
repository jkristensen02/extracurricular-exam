"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// Function to initialize the Web App
function initApp() {
  console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
}
async function getPosts(){
  const response = await fetch("http://zofiakubisz.magdalenapietras.dk/wp-json/wp/v2/posts?_acf_format=standard")
}