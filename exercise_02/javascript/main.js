console.log("this works");

// define variables
let nouns = ["heart", "rainbow", "ocean"];
let verbs = ["look", "make", "continue"];
let adjectives = ["good", "different", "possible"];



let noun = nouns[Math.floor(Math.random() * nouns.length)];
let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
let verb = verbs[Math.floor(Math.random() * verbs.length)];

console.log(
    `My ${noun} feels ${adjective} when I ${verb} a rainbow in the sky.]`
)

document.getElementById("yourName")
