/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function nombreInconnu(){
    var essai, nombre, choix;
    nombre = getRandomIntInclusive(0, 100);
    
        choix = document.getElementById("choix").value;
        if (choix < nombre){
            document.write("Le nombre inconnu est plus grand que " + choix + ".");
        }else if (choix > nombre){
            document.write("Le nombre inconnu est plus petit que " + choix + ".");
        }else{
            document.write("Félicitation le nombre inconnu était : " + nombre + ".<br>Vous l'avez trouvé en " + (i+1) + " coup(s)");
        }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}