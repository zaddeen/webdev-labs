/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

dyslexiaModeActive = false;

document.querySelector("#dyslexia-toggle").addEventListener('click', () => {toggleDyslexiaMode()})

toggleDyslexiaMode = () => {
  dyslexiaModeActive = !dyslexiaModeActive
  dyslexiaModeActive ? document.querySelector(".container").className = "container dyslexia-mode" 
                     : document.querySelector(".container").className = "container"
}