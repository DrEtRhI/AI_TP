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
    var newX = this.xInit + this.rInit * Math.cos(this.cap);
    var newY = this.yInit + this.rInit * Math.sin(this.cap);
    var R = this.rInit;
    var W = canvas.width;
    var H = canvas.height;
    if (newX + R > W || newX - R < 0 || newY + R > H || newY - R < 0) {
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
        this.Corps[i].placerA(this.Corps[i - 1].xInit, this.Corps[i - 1].yInit);
    }
    this.Corps[0].placerA(this.Head.xInit, this.Head.yInit);
    var deviation = (Math.random() * Math.PI / 3) - Math.PI / 6;
    this.Head.devierCap(deviation);
    while (this.Head.CapOK(this.canvas) === false) {
        this.Head.devierCap((Math.random() * Math.PI / 9) - Math.PI / 18);
    }
    this.Head.deplacerSelonCap();
};

function init() {
    var canvas = document.getElementById("zoneDessin");
    var ctx = canvas.getContext("2d");
    
    document.getElementById("butApply").onclick = function () {
        document.getElementById("butStop").disabled = true;
        document.getElementById("butStart").disabled = false;
        document.getElementById("butApply").disabled = false;
        var nbrAnneaux = document.getElementById("nbrAnneaux").value;
        var lChenilles = document.getElementById("lChenilles").value;
        nbrChenilles = document.getElementById("nbrChenilles").value;
        Vers = new Array(parseInt(nbrChenilles));
        for (var i = 0; i < nbrChenilles; i++ ){
            Vers[i] = new Chenille(canvas, parseInt(nbrAnneaux), parseInt(lChenilles));
        }
    };
    document.getElementById("butStart").onclick = function () {
        document.getElementById("butStop").disabled = false;
        document.getElementById("butStart").disabled = true;
        document.getElementById("butApply").disabled = true;
        timerId = setInterval(function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (var i = 0; i < nbrChenilles; i++){
                Vers[i].deplacer();
                Vers[i].dessiner();
            }
        }, 100);
    };
    document.getElementById("butStop").onclick = function () {
        document.getElementById("butStop").disabled = true;
        document.getElementById("butStart").disabled = false;
        document.getElementById("butApply").disabled = false;
        clearInterval(timerId);
    };
}