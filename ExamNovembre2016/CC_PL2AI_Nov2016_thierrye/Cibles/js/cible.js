/**
 * Dessine un cible dans un canvas
 * @param {type} ctx le contexte graphique associé au canvas dans laquellle la cible est dessinée
 * @param {Number} x abscisse du centre de la cible
 * @param {Number} y ordonnée du centre de la cible
 * @param {Number} rExterne rayon externe de la cible 
 * @param {Number} rInterne rayon interne de la cible
 * @param {Number} nbCercles nombre de cercles dont la cible est composée
 */
function cible(ctx, x, y, rExterne, rInterne, nbCercles) {
    var deltaR = (rExterne - rInterne) / (nbCercles - 1);
    var r = rExterne;
    var color = "red";
    if (nbCercles % 2 === 0) {
        color = "yellow";
    }
    ctx.save();
    for (var i = 0; i < nbCercles; i++) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.stroke();
        r = r - deltaR;
        if (color === "red") {
            color = "yellow";
        } else {
            color = "red";
        }
    }
    ctx.restore();
}

function pavageCible(canvas, newrIntern, newnbCercles) {
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.newnbCercles = newnbCercles;
    this.newrIntern = newrIntern;
    for (var j = (this.newrIntern * this.newnbCercles); j < canvas.height; j++) {
        for (var i = (this.newrIntern * this.newnbCercles); i < canvas.width; i++) {
            var x = this.newrIntern * this.newnbCercles;
            var y = this.newrIntern * this.newnbCercles;
            var rExterne = canvas.width / (this.newrIntern * this.newnbCercles);
            var cible1 = new cible(ctx, x, y, rExterne, this.newrIntern, this.newnbCercles);
        }
    }

};


/**
 * fonction appelée au chargement de la page
 * (attribut onload de la balise body, cet événement a lieu une fois que 
 * la page est chargée et le DOM entièrement créé).
 */
function init() {
    var canvas1 = document.getElementById("canvas1");
    var ctx1 = canvas1.getContext("2d");
    var canvas2 = document.getElementById("canvas2");
    var ctx2 = canvas2.getContext("2d");
    // dessine 3 cibles dans le canvas1
    // à faire Q1
    var cible1 = new cible(ctx1, 100, 150, 75, 10, 5);
    var cible2 = new cible(ctx1, 325, 150, 125, 10, 8);
    var cible3 = new cible(ctx1, 625, 150, 150, 10, 15);
    // pavage dans le canvas2
    // à faire Q2
    //pavageCible(canvas2, 5, 7);

    // pavage alterné dans le canvas3
    // à faire Q3

    // pavage dans le canvas4 contrôlé par un slider et des radio boutons
    // à faire Q4

}


