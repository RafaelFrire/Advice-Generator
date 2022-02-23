const dice = document.querySelector('#dice')
const frases = document.querySelector('#frases')
const numero= document.querySelector('#number')


dice.addEventListener('click', (evento) =>{




fetch(`https://api.adviceslip.com/advice`).then(conselhos =>{
    return conselhos.json()

}).then(item=>{
    console.log(item.slip.advice)
    frases.innerHTML = `" ${item.slip.advice} "`
    numero.innerHTML = `advice #${item.slip.id}`

})
})


