/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




function Anneau(xInit, yInit, rInit) {
    this.xInit = xInit;
    this.yInit = yInit;
    this.rInit = rInit;
}

Anneau.prototype.placerA = function (px, py) {
    this.xInit = px;
    this.yInit = py;
};

Anneau.prototype.dessiner = function (ctx) {
    ctx.beginPath();
    ctx.arc(this.xInit, this.yInit, this.rInit, 0, 2 * Math.PI);
    ctx.strokeStyle = "coral";
    ctx.fillStyle = "bisque";
    ctx.stroke();
    ctx.fill();
};

function Tete(xInit, yInit, rInit, cap) {
    this.cap = cap;
    this.xInit = xInit;
    this.yInit = yInit;
    this.rInit = rInit;
}

Tete.prototype.dessiner = function (ctx) {
    ctx.beginPath();
    ctx.arc(this.xInit, this.yInit, this.rInit, 0, 2 * Math.PI);
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "black";
    ctx.stroke();
    ctx.fill();
};

Tete.prototype.devierCap = function (deltaC) {
    this.cap = this.cap + deltaC;
};
Tete.prototype.deplacerSelonCap = function () {
    this.xInit = this.xInit + this.rInit * Math.cos(this.cap);
    this.yInit = this.yInit + this.rInit * Math.sin(this.cap);
};

Tete.prototype.CapOK = function (canvas) {
    var Bool = true;
    if (((this.xInit + this.rInit > canvas.width)&&(this.xInit + this.rInit < 0)) && ((this.yInit + this.rInit > canvas.height)&&(this.yInit + this.rInit < 0))) {
        Bool = false;
    }
    return Bool;
};

function Chenille(canvas, nbAnneaux, r) {
    this.canvas = canvas;
    this.nbAnneaux = nbAnneaux;
    this.Head = new Tete(canvas.width / 2, canvas.height / 2, r, 0);
    this.Corps = new Array(nbAnneaux);
    for (var i = 0; i < nbAnneaux; i++) {
        this.Corps[i] = new Anneau((canvas.width / 2) - (r + (i * r)), canvas.height / 2, r);
    }
}

Chenille.prototype.dessiner = function () {
    ctx = this.canvas.getContext("2d");
    this.Head.dessiner(ctx);
    for (var i = 0; i < this.nbAnneaux; i++) {
        this.Corps[i].dessiner(ctx);
    }

};

Chenille.prototype.deplacer = function () {
    for (var i = this.nbAnneaux - 1; i > 0; i--) {
        this.Corps[i] = this.Corps[i - 1];
    }
    this.Corps[0] = this.Head;
    var deviation = (Math.random() * 60) - 30;
    this.Head.devierCap(deviation);
    while (this.Head.CapOK(this.canvas) === false) {
        this.Head.devierCap(10);
    }
    this.Head.deplacerSelonCap();
};

function init() {
    var canvas = document.getElementById("zoneDessin");
    var ctx = canvas.getContext("2d");
    Chenille1 = new Chenille(canvas, 10, 5);
    Chenille1.dessiner();
    Chenille1.deplacer();
    document.getElementById("butStart").onclick = function () {
        document.getElementById("butStop").disble = true;
        document.getElementById("butStart").disable = false;
        timerId = setInterval(function (){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            Chenille1.deplacer();
            Chenille1.dessiner();
        }, 100);
    };
    document.getElementById("butStop").onclick = function () {
        document.getElementById("butStop").disable = false;
        document.getElementById("butStart").disable = true;
        clearInterval(timerId);
    };
}