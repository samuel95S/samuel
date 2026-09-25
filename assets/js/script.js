const imgsDestaques =["./assets/img/zelda.avif", "./assets/img/roblox.jpg", "./assets/img/redemption.jpg"]

let ImagemAtual =1

const imagem = document.querySelector("#imagemDestaque")
 
setInterval(function (){
    ImagemAtual++;
    if(ImagemAtual >= imgsDestaques.length){
        ImagemAtual = 0;
    }
 
    imagem.src = imgsDestaques[ImagemAtual]
 
 
}, 5000)  
 
 

