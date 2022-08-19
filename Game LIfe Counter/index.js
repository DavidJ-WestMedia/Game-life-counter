const LifeP = document.getElementById("life-p");
const LifeP2 = document.getElementById("life-p2");
const buttonChoice = document.querySelectorAll("button");
let lifeTotal = 20 ;


// buttonChoice.forEach(buttonC => buttonC.addEventListener("click", (e) => {
//    if (e.target.id === "plus-btn") {
//       lifeTotal += 1
//    LifeP.textContent = lifeTotal
//       lifeTotal.textContent += 1
//    } else if(e.target.id === "minus-btn"){
//       lifeTotal -= 1
//       LifeP.textContent = lifeTotal
//    }
// }))

buttonChoice.forEach(buttonC => buttonC.addEventListener("click", (e) => {
      if (e.target.id === "plus-btn") {
         lifeTotal += 1
      LifeP.textContent = lifeTotal
         lifeTotal.textContent += 1
   }  else if(e.target.id === "minus-btn"){
         lifeTotal -= 1
         LifeP.textContent = lifeTotal
         // second section
   }else if (e.target.id === "plus-btn2") {
         lifeTotal += 1
      LifeP2.textContent = lifeTotal
         lifeTotal.textContent += 1
   }  else if(e.target.id === "minus-btn2"){
         lifeTotal -= 1
         LifeP2.textContent = lifeTotal
   }
}))
