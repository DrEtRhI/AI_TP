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
        function Tete(cap, xInit, yInit, rInit) {
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
        Tete.prototype.SelonCap = function () {
        this.xInit = this.xInit + this.rInit * Math.cos(this.cap);
                this.yInit = this.yInit + this.rInit * Math.sin(this.cap);
                };
        Tete.prototype.CapOK = function (canvas){
        var Bool = true;
                if ((this.xInit + this.rInit > canvas.width()) && (this.yInit + this.rInit > canvas.height)){
        Bool = false;
        }
        return Bool;
                };
        function Chenille(canvas, nbAnneaux, r){
        this.canvas = canvas;
                this.nbAnneaux = nbAnneaux;
                this.Head = new Tete(0, canvas.width / 2, canvas.height / 2, r);
                this.Corps = new Array(nbAnneaux);
                for (var i = 0; i < nbAnneaux; i++){
        this.Corps[i] = new Anneau((canvas.width / 2) - (r + (i * r)), canvas.height / 2, r);
        }
        }

Chenille.prototype.dessiner = function(){
ctx = this.canvas.getContext("2d");
        this.Head.dessiner(ctx);
        for (var i = 0; i < this.nbAnneaux; i++){
this.Corps[i].dessiner(ctx);
}

};
        Chenille.prototype.deplacer = function(){
        this.Head.devierCap(function getRandomIntInclusive( - 30, 30) {
        min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
                })
                if (this.Head.CapOK)

                for (var i = this.nbAnneaux - 1; i > 0; i++){
        this.Corps[i] = this.Corps[i - 1];
        }
        this.Corps[0] = this.Head;
                this.Head =
                };
        function init() {
        var canvas = document.getElementById("zoneDessin");
                var ctx = canvas.getContext("2d");
                Chenille1 = new Chenille(canvas, 10, 15);
                Chenille1.dessiner();
                Chenille1.deplacer();
                }
;