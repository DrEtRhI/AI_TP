function dessinerEscalier() {
    
    var canvas = document.getElementById("dessinEscalier");
    var ctx = canvas.getContext("2d");
    var nbM = document.getElementById("nombremarche").value;
    var H = document.getElementById("hauteur").value;
    var posY, L, i;
    
    i = 0;
    posY = 1;
    L = H;
    
    while (i < nbM){
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.fillStyle = "yellow";
        ctx.rect(1, posY, L, H);
        ctx.stroke();
        ctx.fill();
        
        posY = parseInt(posY) + parseInt(H);
        L = parseInt(L) + parseInt(H);
        i = i + 1;
    }
    

}

function effacerCanvas() {
   var canvas = document.getElementById("dessinEscalier");
   var ctx = canvas.getContext("2d");
   
   ctx.clearRect(0, 0, canvas.width, canvas.height);
}
