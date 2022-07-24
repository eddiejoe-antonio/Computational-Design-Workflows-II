/*
global variables
let w = prompt("What is the width?");
let h = prompt("What is the height?");

//function definition
function calculateRoomArea (width, height){
    let area = width * height;
    alert(`the calculated area is ${area}`);
}
 
// call the function
calculateRoomArea(w, h);

let myElement = document.querySelector(".whatsup");
myElement.innerText = "Peace!";
console.log(myElement);

let div = document.querySelector(".whatsup");
whatsup.innerHTML = "<p>Hey!</p>"; 
*/

/*
// select the unorder list
const gsapp = document.querySelector(".gsapp");

//create a new HTML element
const listItem = document.createElement('li');

//add a class to the list item
listItem.classList.add('list-item');

listItem.textContent = "Monday";

//append the list item to the parent ul
gsapp.appendChild(listItem);
*/


/*
//global variables
let n = "cat";
let v = "run";
let a = "happily";
*/

// prompts
let n = prompt("Input a noun:")
let v = prompt("Input a verb:")
let a = prompt("Input an adverb, please:")

//grab the DOM element
let gsapp = document.querySelector(".gsapp");


// poem creation function
function createPoem (noun, verb, adjective){
    let paragraph = document.createElement("p");
    paragraph.classList.add(".list-item");
    paragraph.innerText = `My ${noun} started to ${verb} and I watched very ${adjective}`;
    gsapp.appendChild(paragraph);
    //let oneSentencePoem =  `My ${noun} started to ${verb} and I watched very ${adjective}`;
    //console.log(oneSentencePoem);
    //return oneSentencePoem;
}

createPoem(n, v, a);

let i;
for(i = 0; i < 10; i+=1){
    if ((i*2)/2 === 4){
        break;
    }
    console.log(i);
}