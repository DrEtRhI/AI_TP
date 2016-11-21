/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function init() {
    compteur = 0;
    nombre = getRandomIntInclusive(0, 100);
    document.write('<div>');
    document.write('<label>Votre proposition :</label>');
    document.write('<input id="choix" size="5"/>');
    document.write('</div>');
    document.write('<div>');
    document.write('<input type="button" value="Valider Proposition" id="validerBut"/>');
    document.write('<input type="button" value="Abandonner" id="abandonBut"/>');
    document.write('</div>');
    
    document.getElementById("validerBut").onclick = function () {
        choix = document.getElementById("choix").value;
        nombreInconnu(parseInt(choix));
    };
    function nombreInconnu(choix) {
        document.getElementById("test").innerHTML = "choix " + choix + "; " + nombre + ".";
        document.getElementById("texte").innerHTML = "";
        document.getElementById("rejouerBut").style.visibility = 'hidden';
        var essais = 10 - compteur;
        if (compteur < 9) {

            if (choix < nombre) {
                document.getElementById("texte").innerHTML = "Le nombre inconnu est plus <span>grand</span> que " + choix + ".<br/>Il vous reste : " + (essais - 1) + " essais.";
                document.getElementById("texte").style.color = "red";
                document.getElementById("rejouerBut").style.visibility = 'hidden';
                document.getElementById("validerBut").innerHTML = "";
            } else if (choix > nombre) {
                document.getElementById("texte").innerHTML = "Le nombre inconnu est plus <span>petit</span> que " + choix + "..<br/>Il vous reste : " + (essais - 1) + " essais.";
                document.getElementById("texte").style.color = "red";
                document.getElementById("rejouerBut").style.visibility = 'hidden';
                //document.getElementById("validerBut").value = "Nouvelle proposition";
            } else {
                document.getElementById("texte").innerHTML = "F�licitation le nombre inconnu �tait : " + nombre + ".<br/>Vous l'avez trouv� en " + (compteur + 1) + " coup(s)";
                document.getElementById("texte").style.color = "green";
                document.getElementById("texte").style.fontWeight = "900";
                document.getElementById("rejouerBut").style.visibility = 'visible';
                document.getElementById("champInput").style.visibility = 'hidden';
            }
        } else {

            document.getElementById("texte").innerHTML = "C'est perdu vous avez �puis� vos " + (compteur) + ". Le nombre inconnu �tait : " + nombre + ".";
            document.getElementById("texte").style.color = "green";
            document.getElementById("texte").style.fontWeight = "900";
        }
        compteur++;



        document.getElementById("abandonBut").onclick = function () {
            document.getElementById("champInput").innerHTML = "";
            document.getElementById("texte").innerHTML = "Dommage que vous abandonniez, le nombre inconnu �tait : " + nombre + ".";
            document.getElementById("texte").style.fontWeight = "900";
            document.getElementById("texte").style.color = "red";
            document.getElementById("validerBut").style.visibility = "hidden";
            document.getElementById("abandonBut").style.visibility = "hidden";
            document.getElementById("champInput").style.visibility = "hidden";
        };

        document.getElementById("rejouerBut").onclick = function () {
            compteur = 0;
            document.getElementById("validerBut").style.visibility = "visible";
            document.getElementById("abandonBut").style.visibility = "visible";
            document.getElementById("rejouerBut").style.visibility = "hidden";
            document.getElementById("champInput").style.visibility = "visible";
            document.getElementById("champInput").defaultValue = "";
        };
    }

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
/*<p id="champInput">
                <label>Votre proposition :</label>
                <input id="choix" size="5"/>
            </p>
            <div id="test"></div>
            <div id="texte"></div>
            <div id="juste"></div>
            <div id="abandon"></div>
            <div id="defaite"></div>
            <div id="victoire"></div>
            
            <input type="button" value="Rejouer" id="rejouerBut"/>*/