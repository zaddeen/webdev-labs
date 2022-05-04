/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

changeStyle = (newTheme) => {
   document.querySelector("body").className = newTheme;
}

document.querySelector("#default").addEventListener('click', () => {changeStyle('')});
document.querySelector("#desert").addEventListener('click', () => {changeStyle('desert')});
document.querySelector("#ocean").addEventListener('click', () => {changeStyle('ocean')});
document.querySelector("#high-contrast").addEventListener('click', () => {changeStyle('high-contrast')});