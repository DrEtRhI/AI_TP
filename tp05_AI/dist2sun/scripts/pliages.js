/**
 * Calcule le nombre de fois qu'il faut plier une feuille
 * de 1/10 mmm d'épaisseur pour obtenir un épaisseur > à une distance donnée.
 * @param {number} dist la distance (en km)
 * @returns {number} la nombre de pliages nécessaires
 */
function calculerNbrePlis(dist) {
    var epaisseur = .0001;     // épaisseur d'une feuille 1/10 mm
    var nbrePlis = 0; // le nombre de plis effectués
    dist = dist * 1000; // conversion d'unités km -> m
    while (epaisseur < dist) {
        epaisseur *= 2;
        nbrePlis++;
    }
    return nbrePlis;
}


