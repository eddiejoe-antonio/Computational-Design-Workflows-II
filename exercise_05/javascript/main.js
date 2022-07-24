console.log("this works!");

let btn = document.querySelector("button");
let btnGrp = document.querySelector(".button-group");
let counterResultElem = document.querySelector(".counter-result")

btn.addEventListener("click", addBtnToPage);

let counter = 0;

function addBtnToPage(){
    //console.log("adding new button");
    createNewBtn();
    increment();
    updateDisplay();
}

function createNewBtn(){
    const newBtn = document.createElement("button");
    newBtn.classList.add("latest-content");
    newBtn.innerText = "Hey";
    btnGrp.appendChild(newBtn);
}


function increment (){
    counter = counter + 1;
}

function updateDisplay(){
    counterResultElem.textContent = counter;
}