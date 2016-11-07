/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */





function Bonhomme(teteX, teteY, teteR){
    this.teteX = teteX;
    this.teteY = teteY;
    this.teteR = teteR;
    this.bras1 = new Bras(this.teteX, this.teteY, this.teteR);
    this.bras2 = new Bras(this.teteX, this.teteY, this.teteR);
    this.jambe1 = new Jambe(this.teteX, this.teteY, this.teteR);
    this.jambe2 = new Jambe(this.teteX, this.teteY, this.teteR);
}

Bonhomme.prototype.dessinerBonhomme = function(ctx){
    ctx.beginPath();
    ctx.arc(this.teteX, this.teteY, this.teteR, 0, Math.PI * 2);
    ctx.moveTo(this.teteX, this.teteY + this.teteR);
    ctx.lineTo(this.teteX, this.teteY + 5 * this.teteR);
    ctx.moveTo(this.bras1.epauleX, this.bras1.epauleY);
    ctx.lineTo(this.bras1.mainX, this.bras1.mainY);
    ctx.moveTo(this.bras2.epauleX, this.bras2.epauleY);
    ctx.lineTo(this.bras2.mainX, this.bras2.mainY);
    ctx.moveTo(this.jambe1.hancheX, this.jambe1.hancheY);
    ctx.lineTo(this.jambe1.piedX, this.jambe1.piedY);
    ctx.moveTo(this.jambe2.hancheX, this.jambe2.hancheY);
    ctx.lineTo(this.jambe2.piedX, this.jambe2.piedY);
    ctx.stroke();
};

Bonhomme.prototype.deplacer = function (){
    if (this.bras1.deplacementOK() === true){
        this.deltaAngle = Math.abs(this.deltaAngle);
    }else if (this.epauleAngle + this.deltaAngle > 225){
        this.deltaAngle = -1 * this.deltaAngle;
    }
};


function Bras(epauleX, epauleY, longBras){
    this.epauleX = epauleX;
    this.epauleY = epauleY + longBras * 2;
    this.longBras = longBras * 2.5;
    this.deltaAngle = (Math.PI / 180 ) * 5;
    //this.epauleAngle = epauleAngle; 
    this.epauleAngle = (Math.PI / 180)*((Math.random() * (225 - 135 + 1)) + 135);
    if (this.epauleAngle < 3.14){
        this.mainX = (this.epauleX - (Math.sin(this.epauleAngle) * this.longBras));
    }else{
        this.mainX = (this.epauleX + (Math.sin(this.epauleAngle) * this.longBras));
    }
    this.mainY = (this.epauleY - ((Math.cos(this.epauleAngle) * this.longBras)));
}

Bras.prototype.deplacementOK = function (){
    var bool = true;
    if ((this.epauleAngle + this.deltaAngle < 135) || (this.epauleAngle + this.deltaAngle > 225)){
        bool = false;
    }
    return bool;
};

Bras.prototype.changementAngle = function (angle){
  this.epauleAngle = angle;  
};



/*Bras.prototype.dessinerBras = function(ctx){
    ctx.beginPath();
    ctx.moveTo(this.epauleX, this.epauleY);
    ctx.lineTo(this.mainX, this.mainY);
    ctx.stroke();
};*/

function Jambe(hancheX, hancheY, longJambe){
    this.hancheX = hancheX;
    this.hancheY = hancheY + longJambe * 5;
    this.longJambe = longJambe * 4;
    this.deltaAngle = (Math.PI / 180) * 5;
    //this.epauleAngle = epauleAngle;
    var hancheAngle = (Math.PI / 180)*((Math.random() * (225 - 135 + 1)) + 135);
    if (this.epauleAngle < 4.7){
        this.piedX = (this.hancheX - (Math.sin(hancheAngle) * this.longJambe));
    }else{
        this.piedX = (this.hancheX + (Math.sin(hancheAngle) * this.longJambe));
    }
    this.piedY = (this.hancheY - ((Math.cos(hancheAngle) * this.longJambe)));
}

Jambe.prototype.changementAngle = function(angle){
    this.hancheAngle = angle;
};

Jambe.prototype.deplacementOK = function (){
    var bool = true;
    if ((this.hancheAngle + this.deltaAngle < 135) || (this.hancheAngle + this.deltaAngle > 225)){
        bool = false;
    }
    return bool;
};

/*Jambe.prototype.dessinerJambe = function(ctx){
    ctx.beginPath();
    ctx.moveTo(this.hancheX, this.hancheY);
    ctx.lineTo(this.piedX, this.piedY);
    ctx.stroke();
};*/


function init() {
    var canvas = document.getElementById("zoneDessin");
    var ctx = canvas.getContext("2d");
    
    /*var corps = new Corps(250, 50, 20);
    corps.dessinerCorps(ctx);
    var bras1 = new Bras(corps.teteX, corps.teteY + corps.teteR * 2, corps.teteR * 2.5);
    var bras2 = new Bras(corps.teteX, corps.teteY + corps.teteR * 2, corps.teteR * 2.5);
    bras1.dessinerBras(ctx);
    bras2.dessinerBras(ctx);
    var jambe1 = new Jambe(corps.teteX, corps.teteY + corps.teteR * 5, corps.teteR * 4);
    var jambe2 = new Jambe(corps.teteX, corps.teteY + corps.teteR * 5, corps.teteR * 4);
    jambe1.dessinerJambe(ctx);
    jambe2.dessinerJambe(ctx);*/
    
    mec = new Bonhomme(250, 50, 20);
    mec.dessinerBonhomme(ctx);
    mec2 = new Bonhomme(120,200, 10);
    mec2.dessinerBonhomme(ctx);

}