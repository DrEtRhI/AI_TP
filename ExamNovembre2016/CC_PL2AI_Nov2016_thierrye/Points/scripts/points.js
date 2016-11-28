/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Point(nom, x, y){
    this.nom = nom;
    this.x = x;
    this.y = y;
}

Point.prototype.dessiner = function(ctx){
  ctx.beginPath();
        ctx.arc(this.x, this.y, 4, 0, 2 * Math.PI);
        if (this.nom === 0){
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.strokeStyle = "red";
        ctx.stroke();  
    }else{
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.strokeStyle = "blue";
        ctx.stroke();
    }
};

Point.prototype.toString = function(point){
    this.nom = point.nom;
    this.x = point.x;
    this.y = point.y;
    return this.nom + "("+ this.y +","+this.y +")";
};
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

Point.prototype.distanceA = function(point1, point2){
    var distance = Math.sqrt((((point2.x - point1.x)*(point2.x - point1.x)) + ((point2.y - point1.y)*(point2.y - point1.y))));
    return distance;
};

Point.prototype.plusProche = function(){
    
};

function init(){
    var canvas = document.getElementById("canvas1");
    var ctx = canvas.getContext("2d");
    var point1 = new Point(0, canvas.width / 2, canvas.height / 2);
    point1.dessiner(ctx);

    for(var i = 0; i < 100; i++){
        var x = getRandomIntInclusive(0, canvas.width);
        var y = getRandomIntInclusive(0, canvas.height);
        var nom = "P"+(1+i);
        var point = new Point(nom, x, y);
        point.dessiner(ctx);
    }
}    