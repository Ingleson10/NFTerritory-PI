const wheart =  [
    {icone : `<i class='bx bx-heart'></i>`}
    ,{icone:`<i class='bx bxs-heart' style = 'color:#f55151;'></i>`}]

let counter = 0

function mudarHeart(indice){
    counter++
   if(counter > 1){
       counter = 0
   }
   const allCards = document.querySelector(".cards").children
   for(let i = 0 ; i< allCards.length ; i++){
    allCards[i].setAttribute('id', `${indice}` )
 }
 let button = allCards[indice].children[2].children[1].children[1]
 let contador = allCards[indice].children[2].children[1].children[0]
 let likes = Number(contador.textContent)
 button.innerHTML = wheart[counter].icone
   if(counter == 0){
     contador.innerHTML = `<li> ${likes -1} </li>`
 } else{
    contador.innerHTML = `<li> ${likes +1} </li>`
 }
 
}
async function noTroll (callback){
 return await callback
}

