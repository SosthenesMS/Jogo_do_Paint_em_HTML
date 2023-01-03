var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
var xEvento, yEvento, contadorCor = 0,raio = 20;
var cores = ["blue","red","green","white"];
var desenha = false;

pincel.fillStyle = "white";
pincel.fillStroke = "black";
pincel.strokeRect(0, 0, 800, 500);
pincel.fill();

function desenhaCirculo(evento){

    if(desenha){

        xEvento = evento.pageX - tela.offsetLeft;
        yEvento = evento.pageY - tela.offsetTop;

        pincel.fillStyle = cores[contadorCor];
        pincel.beginPath();
        pincel.arc(xEvento, yEvento, raio, 0, (2*Math.PI));
        pincel.fill();
        console.log(xEvento + " , " + yEvento);
        console.log(evento.shiftkey);
        console.log(evento.onmousedown);
    }
    
}

tela.onmousemove = desenhaCirculo;

function mudaCor(){
    contadorCor++;

    if(contadorCor >= cores.length){
        contadorCor = 0;
        alert('Você mudou de cor para ' + "'" + cores[contadorCor] + "'!");
        
    } else if(contadorCor == 3){
        alert("Você mudou para Borracha!");
        

    } else {
        alert('Você mudou de cor para ' + "'" + cores[contadorCor] + "'!");
        
   }

    return false;

}

tela.oncontextmenu = mudaCor;

function habilitaDesenho(){
    desenha = true;
}

function desabilitaDesenho(){
    desenha = false;
}

tela.onmousedown = habilitaDesenho;
tela.onmouseup = desabilitaDesenho;