/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function dessinVoile(){// Voile du bateau
    var canvas = document.getElementById("zoneDessin");
    var ctx = canvas.getContext("2d");
ctx.beginPath();      // D�but du chemin
ctx.moveTo(150,80);   // Le trac� part du point 150,80
ctx.stroke();
ctx.lineTo(300,230);
ctx.stroke();// Un segment est ajout� vers 300,230
ctx.lineTo(100,230);
ctx.stroke();// Un segment est ajout� vers 150,230
ctx.closePath();      // Fermeture du chemin
ctx.stroke();         // dessine le contour
}