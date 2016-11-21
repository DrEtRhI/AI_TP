/*
 * variables globales
 */
var canvas = document.getElementById("myCanvas");
var graphicContext = canvas.getContext("2d");


/**
 * dessine un rectangle 
 * @param {type} x abscisse du coin supérieur gauche du rectangle
 * @param {type} y ordonnée du coin supérieur gauche du rectangle
 * @param {type} L longueur du rectangle
 * @param {type} H hauteur du rectangle
 * @param {string} couleurTrait la couleur du contour du rectangle
 * @param {string} couleurRemplissage la couleur de remplissage du rectangle
 */
function rectangle(x, y, L, H, couleurTrait, couleurRemplissage) {
   graphicContext.lineWidth = 3;
   graphicContext.strokeStyle = couleurTrait;
   graphicContext.fillStyle = couleurRemplissage;
   graphicContext.fillRect(x, y, L, H);
   graphicContext.strokeRect(x, y, L, H);
}

/**
 * dessiner nb marches
 * @param {number} nbMarches
 * @param {number} hauteur
 * @param {string} couleurTrait la couleur du contour du rectangle
 * @param {string} couleurRemplissage la couleur de remplissage du rectangle
 */
function dessiner_marches(nbMarches, hauteur, couleurTrait, couleurRemplissage) {
   var x = 0;
   var y = 0;
   var largeur = hauteur;
   for (var i = 1; i <= nbMarches; i++) {
      while (y <= canvas.height - 1){
         rectangle(x, y, largeur, hauteur, couleurTrait, couleurRemplissage);
         y = y + hauteur;
         largeur = largeur + hauteur;
      }
   }
}

function dessiner_pyramide(nbMarches, hauteur, couleurTrait, couleurRemplissage) {
   var x = (canvas.width / 2) - hauteur;
   var y = 0;
   var largeur = hauteur * 2;
   for (var i = 1; i <= nbMarches; i++) {
      while (x > -1){
         rectangle(x, y, largeur, hauteur, couleurTrait, couleurRemplissage);
         y += hauteur;
         largeur += 2 * hauteur;
         x -= hauteur;
      }
   }
}

/**
 * efface le canvas
 */
function effacer() {
   graphicContext.clearRect(0, 0, canvas.width, canvas.height);
}

/**
 * fonction appelée au chargement de la page
 */
function init() {

   document.getElementById("dessiner").onclick = function () {
      var nb = parseInt(document.getElementById("nbreMarches").value);
      var hauteur = parseInt(document.getElementById("hauteurMarche").value);
      var couleurTrait = document.getElementById("couleurTrait").value;
      var couleurRemplissage = document.getElementById("couleurRemplissage").value;
      var escalier = document.getElementById("standard").checked;
      var pyramide = document.getElementById("pyramide").checked;
      if (escalier === true)
         dessiner_marches(nb, hauteur, couleurTrait, couleurRemplissage);
      else
         dessiner_pyramide(nb, hauteur, couleurTrait, couleurRemplissage);
   };

   document.getElementById("effacer").onclick = function () {
      effacer();
   };
}
