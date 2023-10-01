// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
let paragraphEl = document.getElementById("error")
console.log(paragraphEl)

function purchase(){
    console.log("Purchase button clicked")
    paragraphEl.textContent = "Something went wrong, please try again"
}



