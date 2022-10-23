let randomNumber1 = Math.floor(Math.random() * 6) + 1; //buat angka random

let randomDiceImg = "images/dice" + randomNumber1 + ".png"; //buat format

let image1 = document.querySelectorAll("img")[0]; // mengambil seluruh variable image ke 0 atau 1

image1.setAttribute("src", randomDiceImg); //Merubah dengan setAttribute

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImg2 = "images/dice" + randomNumber2 + ".png";
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImg2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!!";
}
