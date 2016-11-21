//--------------------------------------------------------
// variables globales
//--------------------------------------------------------

var horlogesDescr = [
    {flag: 'France.png', ville: 'Paris', decalage: 0},
    {flag: 'Canada.png',ville: 'Vancouver', decalage: -9},
    {flag: 'USA.png',ville: 'New york', decalage: -6},
    {flag: 'Brazil.png',ville: 'Rio de Janeiro', decalage: -3},
    {flag: 'United_Kingdom.png',ville: 'Londres', decalage: -1},
    {flag: 'Egypt.png',ville: 'Le Caire', decalage: +1},
    {flag: 'Japan.png',ville: 'Tokyo', decalage: +8}
];

var lesHorloges = [];

//--------------------------------------------------------
// fonctions appelées depuis la page HTML
//--------------------------------------------------------

function creerHorloges() {
    for (var i = 0; i < horlogesDescr.length; i++) {
        lesHorloges[i] = new Horloge('h' + i, horlogesDescr[i].ville,
                horlogesDescr[i].decalage, horlogesDescr[i].flag);
    }
}

//--------------------------------------------------------
// le type Horloge
//--------------------------------------------------------

function Horloge(id, ville, decalage, flag) {
    var date = new Date();
    this.heure = (date.getHours() + decalage + 24) % 24;
    this.min = date.getMinutes();
    this.sec = date.getSeconds();
    this.id = id;
    document.write('<div class="horloge">');
    document.write('<div id="' + id + '" class="chiffresHorloge"></div>');
    document.write('<p><a href="' + ville + '.html">' + ville + '</a></p>');
    document.write('<img src="images/flags/' + flag + '" alt="' + flag + '"/>');
    document.write('</div>');
    this.afficherHeure();
}

Horloge.prototype.afficherHeure = function () {
    var res = this.formaterNombre(this.heure) + ":" +
            this.formaterNombre(this.min) + ":" +
            this.formaterNombre(this.sec);
    document.getElementById(this.id).innerHTML = res;
};

/**
 * Renvoie un chaîne de 2 caractères pour l'affichage d'un nombre avec 2 chiffres.
 * 
 * Si le nombre est un chiffre (0 <= nbre <= 9), la chaîne retournée contient un 
 * caractère '0' avant le chiffre du nombre. Par exemple, si nbre = 7 la chaîne
 * retournée sera '07'.
 * 
 * Si le nombre contient deux chiffres, la chaîne retournée correspond à ces 
 * deux chiffres. Par exemple, si nbre = 14 la chaîne retournée sera '14'.
 *
 * @param {number} nbre le nombre à formater.
 * @returns {res|String} la peremettant d'afficher le nombre avec 2 chiffres.
 */
Horloge.prototype.formaterNombre = function (nbre) {
    res = "";
    if (nbre < 10) {
        res = "0";
    }
    res += nbre;
    return res;
};
