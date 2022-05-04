let originalP = 16;
let originalH = 32;

const makeBigger = () => {
   originalP += 4;
   originalH += 4;
   document.querySelector("h1").style.fontSize = `${originalH}px`;
   document.querySelector("p").style.fontSize = `${originalP}px`;
};

const makeSmaller = () => {
   originalP -= 4;
   originalH -= 4;
   document.querySelector("h1").style.fontSize = `${originalH}px`;
   document.querySelector("p").style.fontSize = `${originalP}px`;
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
