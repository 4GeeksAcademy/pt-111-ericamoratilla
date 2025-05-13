import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

function generateExcuses (){
let who = ["My neighbor's llama", "A hacker", "The AI", "A zombie"];
let action = ["hacked", "vaporized", "kidnapped", "turned into a meme"];
let what = ["my laptop", "the Wi-Fi", "my will to live"];
let when = ["during my Zoom meeting", "while I was updating my antivirus", "when I was feeding my Tamagotchi", "when I finally found the last Pokémon","at the peak of my Bitcoin investment"];

let randomWho = who [Math.floor(Math.random()* who.length)];
let randomAction = action [Math.floor(Math.random()* action.length)]
let randomWhat = what [Math.floor(Math.random()* what.length)]
let randomWhen = when [Math.floor(Math.random()* when.length)]

return randomWho + ' ' + randomAction + ' ' + randomWhat + ' ' + randomWhen;
}

window.onload = function() {
document.getElementById("excuse").innerText = generateExcuses ()
};
  
