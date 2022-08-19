const LifeP = document.getElementById("life-p");
const buttonChoice = document.querySelectorAll("button");
let lifeTotal = 20 ;


 buttonChoice.forEach(buttonC => buttonC.addEventListener("click", (e) => {
    if (e.target.id === "plus-btn") {
       lifeTotal += 1
    LifeP.textContent = lifeTotal
       lifeTotal.textContent += 1
    } else if(e.target.id === "minus-btn"){
       lifeTotal -= 1
       LifeP.textContent = lifeTotal
    }
 }))
