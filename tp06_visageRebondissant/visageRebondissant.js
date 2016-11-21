/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * 
 * @param {type} canvas : canvas ou sera déssiné le visage
 * @param {type} x : coordonnée x du centre du visage
 * @param {type} y : coordonnée y du centre du visage
 * @param {type} r : rayon r du visage
 * @returns {Visage}
 */
function Visage(canvas, x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.canvas = canvas;
    this.dx = 5 * (Math.round((Math.random() * 10 - 5)));
    this.dy = 5 * (Math.round((Math.random() * 10 - 5)));
    //this.yTempo;
    //this.xTempo;
}

/**
 *
 * @returns {undefined}
 */
Visage.prototype.dessinerVisage = function () {
    var ctx = this.canvas.getContext("2d");

    //Dessin du contour du visage
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, true);
    ctx.strokeStyle = "#c99312";
    ctx.fillStyle = "#ffe79e";
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.stroke();

    //Dessin de la bouche
    var boucheR = this.r * 0.5;
    ctx.beginPath();
    ctx.arc(this.x, this.y, boucheR, 0, Math.PI, false);
    ctx.strokeStyle = "#d81c1c";
    ctx.lineWidth = 2;
    ctx.fillStyle = "#f68ad1";
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    //Dessin des yeux 
    var xGauche = this.x - (this.r / 2);
    var yGauche = this.y - (this.r / 2);
    var xDroit = this.x + (this.r / 2);
    var yDroit = yGauche;
    var rOeuil = this.r * 0.1;
    ctx.beginPath();
    ctx.arc(xGauche, yGauche, rOeuil, 0, 2 * Math.PI);
    ctx.arc(xDroit, yDroit, rOeuil, 0, 2 * Math.PI);
    ctx.fillStyle = "#43afff";
    ctx.fill();
};

Visage.prototype.deplacementPossibleX = function(){
    if ((this.r + this.x > this.canvas.width) || (this.x - this.r < 0)){
        return false;
    }else{
        return true;
    }
};

Visage.prototype.rectificationDeplacementX = function(){
    //this.xTempo = this.r + this.x;
    if (this.x + this.r > this.canvas.width){
        this.x = this.canvas.width - this.r;
    }
    if (this.x - this.r < 0){
        this.x = this.r;
    }
};

Visage.prototype.rectificationDeplacementY = function(){
    //this.yTempo = this.r + this.y;
    if (this.y + this.r > this.canvas.height){
        this.y = this.canvas.height - this.r;
    }
    if (this.y - this.r < 0){
        this.y = this.r;
    }
};

Visage.prototype.deplacementPossibleY = function(){
    if ((this.r + this.y > this.canvas.height) || (this.y - this.r < 0)){
        return false;
    }else{
        return true;
    }
};
//fonction déplacer pas parfaite soit rebondit avant bodure soit possibilité de franchir un peu bordure avant rebond !!!!
Visage.prototype.deplacer = function () {
    
    var grandxR = this.x + this.r + this.dx;
    var grandyR = this.y + this.r + this.dy;
    var petitxR = this.x - this.r - this.dx;
    var petityR = this.y - this.r - this.dy;
    if (grandxR > this.canvas.width){
        this.x = this.canvas.width - this.r;
        this.dx = -this.dx;
    }else if (petitxR < 0){
        this.x = this.r;
        this.dx = -this.dx;
    }
    if (grandyR > this.canvas.height){
        this.y = this.canvas.height - this.r;
        this.dy = -this.dy;
    }else if (petityR < 0){
        this.y = this.r;
        this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
};

function init() {
    var timerId = 0;
    var canvas = document.getElementById("zoneDessin");
    var ctx = canvas.getContext("2d");

    var visage1 = new Visage(canvas, 126, 125, 30);
    var visage2 = new Visage(canvas, 325, 369, 15);

    visage1.dessinerVisage();
    visage2.dessinerVisage();

    //association des boutons start et stop pour l'animation de déplacement
    document.getElementById("start").onclick = function () {
        document.getElementById("start").disabled = true;
        document.getElementById("stop").disabled = false;

        //creation de la fonction qui affiche les visages toutes les X millisecondes
        timerId = setInterval(function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            visage1.deplacer();
            visage2.deplacer();
            
            visage1.dessinerVisage();
            visage2.dessinerVisage();
        }, 50);
    };    
    document.getElementById("stop").onclick = function(){
        document.getElementById("start").disabled = false;
        document.getElementById("stop").disabled = true;
        clearInterval(timerId);
    };
   


}