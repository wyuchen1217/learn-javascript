// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out
localStorage.setItem("myCredits", "100");
let myCourses = JSON.parse(localStorage.getItem("myCredits"));
console.log(myCourses);