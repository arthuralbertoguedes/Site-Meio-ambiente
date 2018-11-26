class FotografiaController{
    constructor(){
        
        this._arrayFotos = []

            $('.divFotos').each((index,elemento)=>{
                if(index==0 || index==2){
                    this._arrayFotos.push(new FotografiaModel(elemento,['clima']))
                }
                else if(index==1){
                    this._arrayFotos.push(new FotografiaModel(elemento,['especies','premiadas']))
                }
                else if(index==3){
                    this._arrayFotos.push(new FotografiaModel(elemento,['especies']))    
                }
                else{
                    this._arrayFotos.push(new FotografiaModel(elemento,['premiadas']))    
                }
            
            })
        
        this.animateButtons()
    }

    animateButtons(){

        let botoes = $('.botaoEfeitos')
    
        $(botoes[0]).css("background-color","#1E7E34")
        $(botoes[0]).css("color","white")
    
        var clicado = $(botoes[0])
    
        botoes.hover((e)=>{
            $(e.target).addClass('bg-success')
            $(e.target).addClass('text-light')
            $(e.target).css("transition","0.7s")
        },function(e){
                $(e.target).removeClass('bg-success')
                $(e.target).removeClass('text-light')
            
        })
        botoes.click(e=>{
            clicado.css("background-color","#DDDDDD")  
            clicado.css("color","black")
    
            $(e.target).css("background-color","#1E7E34")  
            $(e.target).css("color","white")
    
            clicado=$(e.target)
            
            if(e.target.name=='todos'){
                this._arrayFotos.forEach((valor,index)=>{
                    valor.foto.style.display = "none"
                    valor.foto.style.display="block"
                    valor.foto.style.animation = "aparecer 2s"
                })
            }
            else if(e.target.name=='clima'){
                this._arrayFotos.forEach((valor,index)=>{
                    valor.foto.style.animation = "aparecer 2s"
                    valor.foto.style.display = "none"
                    if(valor.tipo.indexOf('clima')>-1)
                        valor.foto.style.display = "block"
                        valor.foto.style.animation = "aparecer 2s"
                })
            }
            else if(e.target.name=='especies'){
                this._arrayFotos.forEach((valor,index)=>{
                    valor.foto.style.animation = "aparecer 2s"
                    valor.foto.style.display = "none"
                    
                    if(valor.tipo.indexOf('especies')>-1)
                        valor.foto.style.display="block"
                        valor.foto.style.animation = "aparecer 2s"
                       
                })
            }
            else if(e.target.name=='premiadas'){
                  this._arrayFotos.forEach((valor,index)=>{
                    valor.foto.style.animation = "aparecer 2s"
                    valor.foto.style.display = "none"
                    if(valor.tipo.indexOf('premiadas')>-1)
                        valor.foto.style.display="block"
                        valor.foto.style.animation = "aparecer 2s"
                })
            }
         
            
        })
    }
    

}