function increaseFontSize(){
  document.querySelector(".main").setAttribute("style", "font-size: 25px;")
}
function decreaseFontSize(){
    document.querySelector(".main").setAttribute("style", "font-size: 15px;")
  }

document.querySelector(".increase").onclick = increaseFontSize ;
document.querySelector(".decrease").onclick = decreaseFontSize ;
