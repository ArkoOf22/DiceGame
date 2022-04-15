let rndm = Math.floor(Math.random() * 6) + 1;

let image = "dice" + rndm + ".png";

let source = "images/" + image;

var img = document.querySelectorAll("img")[0];

img.setAttribute("src", source);
let rndm2 = Math.floor(Math.random() * 6) + 1;

let image2 = "dice" + rndm2 + ".png";

let source2 = "images/" + image2;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", source2);

if (rndm > rndm2) {
    document.querySelector('h1').innerHTML = "Player1 Wins 🥰";
} else if (rndm < rndm2) {
    document.querySelector('h1').innerHTML = "PLayer 2 Wins 😣";
} else {
    document.querySelector('h1').innerHTML = "Its a draw 🥱";
}

function find() {
    window.open("https://www.linkedin.com/in/arkodeep-koley-70017478", "_blank");
}