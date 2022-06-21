// This App is a basic webapp for games for tracking your life total

let lifeEl = document.getElementById("life-el")

// let plusButton = document.getElementById("plus-btn")
// let subtractButton = document.getElemtentById("minus-btn")

let lifeTotal = 20


//adding 1 life to the life total
function addLife(){
   lifeTotal += 1
   lifeEl.textContent = lifeTotal
}

//subtracting 1 life form the life total
function minuslife(){
   lifeTotal -= 1
   lifeEl.textContent = lifeTotal
}
