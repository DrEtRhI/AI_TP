/**
 * Constructeur d'une tortue LOGO
 * @param {object} canvas : L'objet Canvas dans lequel la tortue dessine
 * @returns {Tortue}
 */
function Tortue(canvas) {
   this.canvas = canvas;
   this.trace = [];
   this.reset();
}
//-- mÃ©thodes ------------------------------------------------------------------

/**
 * remet la tortue dans son Ã©tat inital
 * cap 0Â°, placÃ©e au centre du canvas en position haute
 * @returns {undefined}
 */
Tortue.prototype.reset = function () {
   var cap = document.getElementById("angleCap").value;
   var posX = document.getElementById("posX").value;
   var posY = document.getElementById("posY").value;
   this.dessin = [];
   this.trace = [];
   this.cap = parseInt(cap);
   this.x = parseInt(posX);
   this.y = parseInt(posY);
   this.haute = true;
   this.dessiner();
};
/**
 * 
 * @returns {undefined} place directment la tortue à la position souhaitée
 */
Tortue.prototype.allerA = function () {
   var cap = document.getElementById("angleCap").value;
   var posX = document.getElementById("posX").value;
   var posY = document.getElementById("posY").value;
   this.cap = parseInt(cap);
   this.x = parseInt(posX);
   this.y = parseInt(posY);
   this.dessiner();
   this.modeTrace(this.ctx);
};

/**
 * Dessine la tortue
 * @returns {undefined}
 */
Tortue.prototype.dessiner = function () {
   var ctx = this.canvas.getContext('2d');
   ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
   // sauvegarde du contexte graphique
   ctx.save();
   // definition de la transformation gÃ©omÃ©trique positionnant la tortue
   ctx.translate(this.x, this.y);
   ctx.rotate(this.cap * Math.PI / 180);
   // definition du triangle matÃ©rialisant la tortue.
   // les coordonnÃ©es du tracÃ© de la tortue sont exprimÃ©es en centrant
   // la tortue en 0, 0 et on l'orientant horizontalement vers la droite
   // ces coordonnÃ©es subiront la translation et rotation prÃ©cÃ©dentes au
   // moment de l'affichage
   ctx.beginPath();
   ctx.moveTo(20, 0);
   ctx.lineTo(-8, 10);
   ctx.lineTo(-8, -10);
   ctx.closePath();
   // dÃ©finition de la couleur de remplissage et de la couleur du trait
   ctx.fillStyle = "#66ff66";
   if (this.haute) {
      ctx.strokeStyle = "green";
   } else {
      ctx.strokeStyle = "red";
   }
   ctx.lineWidth = 3;
   // remplisage et tracÃ© du contour du triangle
   ctx.fill();
   ctx.stroke();
   // dÃ©finition du cercle matÃ©rialisant la position de la tortue
   ctx.beginPath();
   ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
   // dÃ©finition de la couleur de remplissage
   ctx.fillStyle = "black";
   // remplissage du cercle
   ctx.fill();
   // restoration du contexte graphique dans son Ã©tat initial
   ctx.restore();
};

/**
 * fait avancer la tortue d'une distance donnÃ©e dans la direction indiquÃ©e
 * par son cap.
 * @param {type} distance : la distance de laquelle la tortue doit se deplacer
 * @returns {undefined}
 */
Tortue.prototype.avancer = function (distance) {
   // Attention, les fonctions sinus et consinus prennent comme paramÃ¨tre
   // des valeurs en radians. Le cap exprimÃ© en degrÃ©s doit donc Ãªtre 
   // converti en radians.
   this.x = Math.round(this.x + distance * Math.cos(Math.PI * this.cap / 180));
   this.y = Math.round(this.y + distance * Math.sin(Math.PI * this.cap / 180));
   //creation de l'objet enregistrant les positions lors d'un mouvement avancé de la tortue en position basse
   var objA = {
      "action": "A",
      "x": this.x,
      "y": this.y
   };
   //objet en registrant l'action levée quand la tortue est levée
   var objL = {
      "action": "L"
   };
   if (this.haute === false) {
      this.trace.push(objA);
   } else {
      this.trace.push(objL);
   }
   this.dessiner();
};

/**
 * 
 * @param {type} angle : valeur en degrés
 * @returns {undefined} permet d'effectuer une rotation gauche de x degrés
 */
Tortue.prototype.tournerG = function (angle) {
   this.cap -= angle;
   this.dessiner();
};

/**
 * 
 * @param {type} angle : valeur en degrés
 * @returns {undefined} permet d'effectuer une rotation droit de x degrés
 */
Tortue.prototype.tournerD = function (angle) {
   this.cap += angle;
   this.dessiner();
};


/**
 * 
 * @returns {undefined} place la tortue en position haute ou basse
 */
Tortue.prototype.changerPositionEcriture = function () {
   if (this.haute === true) {
      this.haute = false;
      //objet baissé enregistrant la position de la tortue
      var objB = {
         "action": "B",
         "x": this.x,
         "y": this.y
      };
      this.trace.push(objB);
      document.getElementById("positionEcriture").innerHTML = "Lever";
   } else {
      this.haute = true;
      document.getElementById("positionEcriture").innerHTML = "Baisser";
      //objet levé enregistrant l'action levée quand la tortue est levée
      var objL = {
         "action": "L"
      };
      this.trace.push(objL);
   }
   this.dessiner();
};

/**
 * 
 * @param {type} ctx : context dans lequel la tortue se situe
 * @returns {undefined} trace le dessin déjà mémorisé
 */
Tortue.prototype.modeTrace = function (ctx) {
   for (var i = 0; i < this.trace.length; i++) {
      switch (this.trace[i].action) {
         case "B":
            ctx.beginPath();
            ctx.moveTo(this.trace[i].x, this.trace[i].y);
            break;
         case "A":
            ctx.lineTo(this.trace[i].x, this.trace[i].y);
            break;
         case "L":
            ctx.stroke();
      }
   }
   ctx.stroke();
};

function init() {

   var canvas = document.getElementById("canvasTortue");
   var ctx = canvas.getContext("2d");
   var longueur = document.getElementById("longueur").value;
   var angle = document.getElementById("angle").value;
   var etat;
   var tortue = new Tortue(canvas);
   tortue.trace = [];

   if (tortue.haute === true) {
      document.getElementById("positionEcriture").innerHTML = "Baisser";
   } else {
      document.getElementById("positionEcriture").innerHTML = "Lever";
   }
   document.getElementById("infoTortue").innerHTML = "La tortue est en (" + tortue.x +","+tortue.y+") en position "+ etat +".";
   document.getElementById("reset").onclick = function () {
      tortue.reset();
      if (tortue.haute === true)
         var etat = "levée";
      else
         etat = "baissée";
      document.getElementById("infoTortue").innerHTML = "La tortue est en (" + tortue.x +","+tortue.y+") en position "+ etat +".";
   };

   document.getElementById("avancer").onclick = function () {
      tortue.avancer(parseInt(longueur));
      tortue.modeTrace(ctx);
      if (tortue.haute === true)
         var etat = "levée";
      else
         etat = "baissée";
      document.getElementById("infoTortue").innerHTML = "La tortue est en (" + tortue.x +","+tortue.y+") en position "+ etat +".";
   };

   document.getElementById("tournerG").onclick = function () {
      tortue.tournerG(parseInt(angle));
      tortue.modeTrace(ctx);
      if (tortue.haute === true)
         var etat = "levée";
      else
         etat = "baissée";
      document.getElementById("infoTortue").innerHTML = "La tortue est en (" + tortue.x +","+tortue.y+") en position "+ etat +".";
   };

   document.getElementById("tournerD").onclick = function () {
      tortue.tournerD(parseInt(angle));
      tortue.modeTrace(ctx);
      if (tortue.haute === true)
         var etat = "levée";
      else
         etat = "baissée";
      document.getElementById("infoTortue").innerHTML = "La tortue est en (" + tortue.x +","+tortue.y+") en position "+ etat +".";
   };

   document.getElementById("positionEcriture").onclick = function () {
      tortue.changerPositionEcriture();
      tortue.modeTrace(ctx);
      if (tortue.haute === true)
         var etat = "levée";
      else
         etat = "baissée";
      document.getElementById("infoTortue").innerHTML = "La tortue est en (" + tortue.x +","+tortue.y+") en position "+ etat +".";
   };

   document.getElementById("allerA").onclick = function () {
      tortue.allerA();
      tortue.modeTrace(ctx);
      if (tortue.haute === true)
         var etat = "levée";
      else
         etat = "baissée";
      document.getElementById("infoTortue").innerHTML = "La tortue est en (" + tortue.x +","+tortue.y+") en position "+ etat +".";
   };


}