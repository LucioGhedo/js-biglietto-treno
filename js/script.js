// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana

// INPUT
let distance = parseInt(prompt('Quanti KM devi percorrere?'));
let userAge = parseInt(prompt('Quanti anni hai?'));
const kmPrice = 0.21;

// ELABORO
let priceCalc = (distance * kmPrice);
let minorDiscount = ((priceCalc * 20) / 100);
let overDiscount = ((priceCalc * 40) / 100);
let result = 0;

if (userAge < 18) {
    result = (priceCalc - minorDiscount)
} else if (userAge > 65) {
    result = (priceCalc - overDiscount)
} else result = priceCalc;

// OUTPUT
document.getElementById('price').innerHTML = result.toFixed(2);