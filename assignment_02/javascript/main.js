// Structure and global variables
console.log("we're in business");

let btn = document.querySelector("button");
let paraGroup = document.querySelector(".new-responses");
let originalFill = document.querySelector(".input-text");

// Counter Function structure and global variables
let responseContent = document.getElementById("input-text");
let characterCounter = document.getElementById("char-count");
const maxNumofChars = 100;

// Counter Function
const charactersRemaining = () => {
    let numOfEnteredChars = responseContent.value.length;
    let counter = maxNumofChars - numOfEnteredChars;
    characterCounter.textContent = counter + "/100";
    if (counter < 0){
        characterCounter.style.color = "red";
        characterCounter.style.fontWeight = "bold";
        btn.setAttribute("disabled", true);
    } else {
        characterCounter.style.color = "white";
        characterCounter.style.fontWeight = "normal";
        btn.removeAttribute("disabled");
    }
}
// Sets value of conunter to characters remaining in input field
responseContent.addEventListener("input", charactersRemaining);


// Events
btn.addEventListener("click", addParaToPage);



// Event Handler
function addParaToPage(){
    createNewPara();

    // Return input field value to original
    originalFill.value = "";
    characterCounter.textContent = "100/100";
}

// Adding new paragraph with content from input field
function createNewPara(){
    // Set up a new paragraph element for HTML and previous item
    const newPara = document.createElement("p");
    const existPara = document.getElementById("input-text");
    console.log(existPara.value);

    // Pass that element the value from the input field
    newPara.innerText = document.getElementById("input-text").value;
    newPara.classList.add("latest-response");

    // Style and append that value to the website
    newPara.style.color = "crimson";
    newPara.style.fontSize = "20px";
    newPara.style.background = "white";
    
    // Insert input value before existing inputted values
    paraGroup.appendChild(newPara);

}
