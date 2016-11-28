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

/**
 * 
 * @param {type} canvas : canvas dans lequel la fonction pavageCible s'applique
 * @param {type} nbCibles : nbCibles par lignes
 * @param {type} rInterne : rayons du centre de la cible
 * @param {type} nbCercles : nbCercles qui constituent la cible
 * @param {type} mode : true pavage standard, false pavage altern�
 * @returns {undefined}
 */
function pavageCible(canvas, nbCibles, rInterne, nbCercles, mode) {
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var rExterne = (canvas.width / nbCibles) / 2;
    var xInit = rExterne;
    var yInit = rExterne;
    var i, j;
    if (mode === true) {
        for (i = 0; i < nbCibles; i++) {
            for (j = 0; j < nbCibles; j++) {
                cible(ctx, xInit, yInit, rExterne, rInterne, nbCercles);
                xInit = xInit + rExterne * 2;
            }
            xInit = rExterne;
            yInit = yInit + rExterne * 2;
        }
    } else {
        for (i = 0; i < nbCibles; i++) {
            for (j = 0; j < nbCibles; j++) {
                cible(ctx, xInit, yInit, rExterne, rInterne, nbCercles);
                xInit = xInit + rExterne * 4;
            }
            if ((i + 1) % 2 !== 0) {
                xInit = rExterne * 3;
            } else {
                xInit = rExterne;
            }
            yInit = yInit + rExterne * 2;
        }
    }
}


/**
 * fonction appelée au chargement de la page
 * (attribut onload de la balise body, cet événement a lieu une fois que 
 * la page est chargée et le DOM entièrement créé).
 */
function init() {
    var canvas1 = document.getElementById("canvas1");
    var ctx1 = canvas1.getContext("2d");
    // dessine 3 cibles dans le canvas1
    // à faire Q1
    cible(ctx1, 100, 150, 75, 10, 5);
    cible(ctx1, 325, 150, 125, 10, 8);
    cible(ctx1, 625, 150, 150, 10, 15);

    // pavage dans le canvas2
    // à faire Q2
    var canvas2 = document.getElementById("canvas2");
    pavageCible(canvas2, 5, 5, 7, true);


    // pavage alterné dans le canvas3
    // à faire Q3
    var canvas3 = document.getElementById("canvas3");
    pavageCible(canvas3, 5, 5, 7, false);
    // pavage dans le canvas4 contrôlé par un slider et des radio boutons
    // à faire Q4
    var canvas4 = document.getElementById("canvas4");

    document.getElementById("nbreCibles").ondrag = function () {
        var modeComplet = document.getElementById("complet").checked;
        //var modeAlterne = document.getElementById("alterne").checked;
        var nbCibles = parseInt(document.getElementById("nbreCiblesValue").value);
        if (modeComplet === true) {
            pavageCible(canvas4, nbCibles, 5, 7, modeComplet);
        } else {
            pavageCible(canvas4, nbCibles, 5, 7, modeComplet);
        }
    };
}


