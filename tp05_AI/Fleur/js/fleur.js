function dessinerEscalier() {
    
    var canvas = document.getElementById("dessinPetale");
    var ctx = canvas.getContext("2d");
    var nbP = document.getElementById("nombrepetale").value;
    var longP = document.getElementById("longueurpetale").value;
    var largP = document.getElementById("largeurpetale").value;
    var coulLign = document.getElementById("couleurligne").value;
    var coulPetale = document.getElementById("couleurpetale").value;
    var i, cx, cy, angle, rotation;
    
    rotation = 360 / parseInt(nbP);
    nbP = nbP / 2;
    i = 0;
    longP = parseInt(longP);
    largP = parseInt(largP);
    cx = canvas.width / 2;
    cy = canvas.height / 2;
    angle = 0;
    
    
    while (i < nbP){
    ellipse(ctx, cx, cy, longP, largP, angle, coulLign, coulPetale);
    angle = angle + rotation;
    i = i + 1;
    }
    
    

}

function effacerCanvas() {
   var canvas = document.getElementById("dessinFleur");
   var ctx = canvas.getContext("2d");
   
   ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function ellipse(ctx, cx, cy, rx, ry, angle, style, style2) {
    ctx.save(); // sauvegarde l'état du contexte graphique
    ctx.beginPath();
    ctx.translate(cx, cy);
    ctx.rotate(angle * Math.PI / 180);
    ctx.scale(rx, ry);
    ctx.arc(0, 0, 1, 0, 2 * Math.PI, false);
    ctx.restore(); // restaure l'état original du contexte graphique
    ctx.save();
    if (style) {
        ctx.strokeStyle = style;
    }
    if (style2){
        ctx.fillStyle = style2;
    }
    ctx.stroke();
    ctx.fill();
    ctx.restore();
} 