// JavaScript source code
/**
 * constant - table contain the different starting part of the quote
 * @type {Array}
 * */
const quotePartStart = [
    ' Avec',
    ' Considérant',
    ' Où que nous mène',
    ' Vu',
    ' En ce qui concerne'
];
/**
 * constant - table contain the different middle part of the quote
 * @type {Array}
 * */
const quotePartMiddle = [
    'la crise',
    'l\'inertie',
    'la difficulté',
    'l\'austérité',
    'la dégradation'
];
/**
 * constant - table contain the different middle2 part of the quote
 * @type {Array}
 * */
const quotePartMiddle2 = [
    'présente',
    'actuelle',
    'générale',
    'induite',
    'conjoncturelle'
];
/**
 * constant - table contain the different middle3 part of the quote
 * @type {Array}
 * */
const quotePartMiddle3 = [
    'à court terme',
    'rapidement',
    'dans une perspective correcte',
    'avec toute la prudence requise',
    'de toute urgence'
];
/**
 * constant - table contain the different end part of the quote
 * @type {Array}
 * */
const quotePartEnd = [
    'imaginables',
    'possibles',
    's\'offrant à nous',
    'de bon sens',
    'envisageables'
];
/**
 * Create a Quote.
 * @class
 * */
class Quote {
/**
* @constructor
* @param quotePartStartRandom {string} quote Party Start Random
* @param quotePartMiddleRandom {string} quote Party Middle Random
* @param quotePartEndRandom {string} quote Party End Random
* @param quotePartMiddle2Random {string} quote Party Middle2 Random
* @param quotePartMiddle3Random {string} quote Party Middle3 Random
*/
    constructor(quotePartStartRandom, quotePartMiddleRandom, quotePartEndRandom, quotePartMiddle2Random, quotePartMiddle3Random) {
        this.quotePartStart = quotePartStartRandom;
        this.quotePartMiddle = quotePartMiddleRandom;
        this.quotePartEnd = quotePartEndRandom;
        if (quotePartMiddle2Random && quotePartMiddle3Random) {
            this.quotePartMiddle2 = quotePartMiddle2Random;
            this.quotePartMiddle3 = quotePartMiddle3Random;
        }
    }


    toDescribe() {
        if (this.quotePartMiddle2 && this.quotePartMiddle3) {
            return (this.quotePartStart + " " + this.quotePartMiddle + " " + this.quotePartMiddle2 + " " + this.quotePartMiddle3 + " " + this.quotePartEnd + ".");
        } else {
            return (this.quotePartStart + " " + this.quotePartMiddle + " " + this.quotePartEnd + ".");
        }
    }

};

/**
* getRandomNumber - return a number between 0 and max
* @param max {number} the maximum number
* @returns {number} the generated number
*/
function getRandomNumber(max) {
    let number = Math.floor(Math.random() * max);
    return number;
}

/**
 * getRandomQuote - returns an array with getRandomNumber (5)
 * @param array {array} table contain the different pieces of sentence.
 * @returns {any} 
 */
function getRandomQuote(array) {
    return array[getRandomNumber(5)];
}

/**
 * entryNumberQuote - requests user input then returns the number entered
 * @returns {number} number entered
 * */
function entryNumberQuote() {
    let numberQuote = Number(prompt("Générateur de citation ! \n" +
        "Choisisez une option : \n" +
        "Vous pouvez g&eacute;n&eacute;rer de 1 à 5 citation(s). \n"
    ));
    return numberQuote;
}

/**
 * generateQuote - generate the quote (s) based on the typeQuote and numQuote
 * @param numQuote {number} number of quotes that we want to generate
 * @param typeQuote {number} type of quote that we want to generate
 * @returns array
 */
function generateQuote(numQuote, typeQuote) {
    const tab = [];
    for (let i = 0; i < numQuote; i++) {
        if (typeQuote == 1) {
            let quotePartStartRandom = getRandomQuote(quotePartStart);
            let quotePartMiddleRandom = getRandomQuote(quotePartMiddle);
            let quotePartEndRandom = getRandomQuote(quotePartEnd);
            const quote = new Quote(quotePartStartRandom, quotePartMiddleRandom, quotePartEndRandom);
            tab[i] = quote;
        } else {
            let quotePartStartRandom = getRandomQuote(quotePartStart);
            let quotePartMiddleRandom = getRandomQuote(quotePartMiddle);
            let quotePartMiddle2Random = getRandomQuote(quotePartMiddle2);
            let quotePartMiddle3Random = getRandomQuote(quotePartMiddle3);
            let quotePartEndRandom = getRandomQuote(quotePartEnd);
            const quote = new Quote(quotePartStartRandom, quotePartMiddleRandom, quotePartMiddle2Random, quotePartMiddle3Random, quotePartEndRandom);
            tab[i] = quote;
        }
    }
    return tab;
}
/**
 * choice variable allow if 1 continue or 0 exit the program.
 * @type {number}
 */
let choice = 1;

while (choice !== 0) {
    /**
    * number of quotes that we want to generate
    * @type {number}
    */
    let numQuote = entryNumberQuote();
 
    if (numQuote >= 1 && numQuote <= 5) {
        console.log("Vous avez choisi : " + numQuote + " citation(s)");
        /**
         * type of quote that we want to generate
         * @type {number}
         */
        const typeQuote = Number(prompt("Saississez 1 pour une (des) citation(s) à 3 parties ou 2 pour une (des) citation(s) 5 parties."));
        if (typeQuote == 1 || typeQuote == 2) {
            /**
            *  constant - receive them or quote generate
            *  @type {object}
            */
            const tabQuote = generateQuote(numQuote, typeQuote);

            for (let i = 0; i < numQuote; i++) {
                 /**
                 * constant - receives each party from the quotes
                 * @type {string}
                 */
                const quote = tabQuote[i];
                console.log("Voici la citation  :" + quote.toDescribe());
            }
            choice = Number(prompt("Voulez vous continuer 1 pour oui 0 pour quitter."));

        } else {
            console.log("Vous avez saisi un autre chiffre que 1 ou 2, le programme ne peut générer cette demande !");
        }
    } else if (numberQuote > 5) {
        console.log("Veuillez saisir un chiffre entre 1 à 5 pôur générer des citations.")
    }
}