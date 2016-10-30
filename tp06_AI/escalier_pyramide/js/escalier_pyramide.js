function dessinerEscalierDroit() {
    
    var canvas = document.getElementById("dessinEscalier");
    var ctx = canvas.getContext("2d");
    var nbM = document.getElementById("nombremarche").value;
    var H = document.getElementById("hauteur").value;
    var colstroke = document.getElementById("colorstroke").value;
    var colfill = document.getElementById("colorfill").value;
    var posY, L, i;
    
    i = 0;
    posY = 1;
    L = H;
    
    while (i < nbM){
        ctx.beginPath();
        ctx.strokeStyle = colstroke;
        ctx.fillStyle = colfill;
        ctx.rect(1, posY, L, H);
        ctx.stroke();
        ctx.fill();
        
        posY = parseInt(posY) + parseInt(H);
        L = parseInt(L) + parseInt(H);
        i = i + 1;
    }
    

}

function dessinerEscalierPyramide(){
    var canvas = document.getElementById("dessinEscalier");
    var ctx = canvas.getContext("2d");
    var nbM = document.getElementById("nombremarche").value;
    var H = document.getElementById("hauteur").value;
    var colstroke = document.getElementById("colorstroke").value;
    var colfill = document.getElementById("colorfill").value;
    var posY, posX, L, i;
    
    i = 0;
    posX = (canvas.width /2) - H;
    posY = 1;
    L = H * 2;
    
    while (i < nbM){
        ctx.beginPath();
        ctx.strokeStyle = colstroke;
        ctx.fillStyle = colfill;
        ctx.rect(posX, posY, L, H);
        ctx.stroke();
        ctx.fill();
        
        posX = parseInt(posX) - parseInt(H);
        posY = parseInt(posY) + parseInt(H);
        L = parseInt(L) + (parseInt(H) * 2);
        i = i + 1;
    }
}

function effacerCanvas() {
   var canvas = document.getElementById("dessinEscalier");
   var ctx = canvas.getContext("2d");
   
   ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function choixDessin(){
    if (document.getElementById("escdroit").checked){
        dessinerEscalierDroit();
    }else{
        dessinerEscalierPyramide();
    }
}