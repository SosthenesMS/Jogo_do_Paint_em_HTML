var tela = document.querySelector('canvas');
var selecaoCor = document.querySelector('input');
var pincel = tela.getContext('2d');
var xEvento, yEvento, contadorCor = 0,raio = 20;
var cores = ["blue","red","green","white"];
var desenha = false;
var iCount=0;

pincel.fillStyle = "white";
pincel.fillStroke = "black";
pincel.strokeRect(0, 0, 800, 500);
pincel.fill();

function desenhaCirculo(evento){

    if(desenha){
        if(iCount == 1){
            xEvento = evento.pageX - tela.offsetLeft;
            yEvento = evento.pageY - tela.offsetTop;

            pincel.fillStyle = 'White';
            pincel.beginPath();
            pincel.arc(xEvento, yEvento, raio, 0, (2*Math.PI));
            pincel.fill();
            console.log(xEvento + " , " + yEvento);
            console.log(evento.shiftkey);
            console.log(evento.onmousedown);

        }else if(iCount == 0){
            xEvento = evento.pageX - tela.offsetLeft;
            yEvento = evento.pageY - tela.offsetTop;

            pincel.fillStyle = selecaoCor.value;
            pincel.beginPath();
            pincel.arc(xEvento, yEvento, raio, 0, (2*Math.PI));
            pincel.fill();
            console.log(xEvento + " , " + yEvento);
            console.log(evento.shiftkey);
            console.log(evento.onmousedown);
        }
        
    }
    
}

tela.onmousemove = desenhaCirculo;

//ORIGINAL
// function mudaCor(){
//     contadorCor++;

//     if(contadorCor >= cores.length){
//         contadorCor = 0;
//         alert('Você mudou de cor para ' + "'" + cores[contadorCor] + "'!");
        
//     } else if(contadorCor == 3){
//         alert("Você mudou para Borracha!");
        

//     } else {
//         alert('Você mudou de cor para ' + "'" + cores[contadorCor] + "'!");
        
//    }

//     return false;

// }

function mudaCor(){

    iCount++;

    if(iCount == 1){
        alert("Você mudou para borracha!");
    }else if(iCount > 1){
        iCount = 0;
        alert("Você mudou para o pincel, por favor escolha uma cor!");
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