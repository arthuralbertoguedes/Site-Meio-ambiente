
let menuFixo = $('.menuSuperior')
let paragrafoAnimado = $('.paragrafoSecaoDesmatamento')
let secaoDesmatamento = $('.secaoDesmatamento')
var valor = 0,valor2 = 0,valor3 = 0, valor4=0

let paragrafo1 = document.querySelectorAll('.paragrafoSecaoDesmatamento')[0]
let paragrafo2 = document.querySelectorAll('.paragrafoSecaoDesmatamento')[1]
let paragrafo3 = document.querySelectorAll('.paragrafoSecaoDesmatamento')[2]
let paragrafo4 = document.querySelectorAll('.paragrafoSecaoDesmatamento')[3]

let valorMaximo1 = paragrafo1.innerText
let valorMaximo2 = paragrafo2.innerText
let valorMaximo3 = paragrafo3.innerText
let valorMaximo4 = paragrafo4.innerText

paragrafo1.innerText = 0
paragrafo2.innerText = 0
paragrafo3.innerText = 0
paragrafo4.innerText = 0

$(document).scroll((e)=>{
    if($(document).scrollTop()>60){
        menuFixo.addClass('animationMenu')
        menuFixo.addClass('bg-white')
    }
    else{
        menuFixo.removeClass('animationMenu')
    }

    if($(document).scrollTop()>paragrafoAnimado.offset().top*2/3){
        
        

        let func1 = setInterval(function(){
            paragrafo1.innerText = valor
            
            valor +=190
            if(valor>valorMaximo1){
                clearInterval(func1)
                paragrafo1.innerText = valorMaximo1
            }},
        100)
        let func2 = setInterval(function(){
            paragrafo2.innerText = valor2
            valor2 +=45
            if(valor2>valorMaximo2){
                clearInterval(func2)
                paragrafo2.innerText = valorMaximo2
            }},
        200)

        let func3 = setInterval(function(){
            paragrafo3.innerText = valor3
            valor3 +=35
            if(valor3>valorMaximo3){
                clearInterval(func3)
                paragrafo3.innerText = valorMaximo3
            }},
        200)

        let func4 = setInterval(function(){
            paragrafo4.innerText = valor4
            valor4 +=320
            if(valor4>valorMaximo4){
                clearInterval(func4)
                paragrafo4.innerText = valorMaximo4
            }},
        100)
    }
})
