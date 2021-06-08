// JavaScript source code
/**
 * constant - table contain the different starting part of the quote
 * @type {Array}
 * */
const quotePart0 = [
    'Avec',
    'Considérant',
    'Où que nous mène',
    'Vu',
    'En ce qui concerne',
];
/**
 * constant - table contain the different middle part of the quote
 * @type {Array}
 * */
const quotePart1 = [
    'la crise',
    'l\'inertie',
    'la difficulté',
    'l\'austérité',
    'la dégradation',
];
/**
 * constant - table contain the different middle2 part of the quote
 * @type {Array}
 * */
const quotePart2 = [
    'présente',
    'actuelle',
    'générale',
    'induite',
    'conjoncturelle',
];
/**
 * constant - table contain the different end part of the quote
 * @type {Array}
 * */
const quotePart3 = [
    'à court terme',
    'rapidement',
    'dans une perspective correcte',
    'avec toute la prudence requise',
    'de toute urgence',
];
/**
 * random - returns an array 
 * @param array {array} table contain the different pieces of sentence.
 * @returns {any}
 */
function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}

console.log(random(quotePart0) + " " +
    random(quotePart1) + " " +
    random(quotePart2) + " " +
    random(quotePart3) + ".");