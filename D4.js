/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-------------------ESERCIZIO 1-------------------");
const area = function (l1, l2) {
  return l1 * l2;
};

area(5, 10);
console.log(area(5, 10));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-------------------ESERCIZIO 2-------------------");
const crazySium = function (a, b) {
  if (a === b) {
    return (a + b) * 3;
  } else {
    return a + b;
  }
};

let risultato = crazySium(6, 5);
console.log(risultato);

const crazySium2 = function (a, b) {
  if (a === b) {
    return (a + b) * 3;
  } else {
    return a + b;
  }
};

let risultato2 = crazySium2(5, 5);
console.log(risultato2);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-------------------ESERCIZIO 3-------------------");
const crazyDiff = function (n) {
  if (n < 19) {
    return 19 - n;
  } else {
    return (n - 19) * 3;
  }
};

let risultato3 = crazyDiff(10);
console.log(risultato3);

const crazyDiff2 = function (n) {
  if (n < 19) {
    return 19 - n;
  } else {
    return (n - 19) * 3;
  }
};

let risultato4 = crazyDiff2(20);
console.log(risultato4);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-------------------ESERCIZIO 4-------------------");
const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return "Il Numero Corrisponde a " + true;
  } else "Il Numero Corrisponde a" + false;
};
console.log(boundary(50));
console.log(boundary(10));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-------------------ESERCIZIO 5-------------------");
console.log("-----Soluzione 1-----");
const epify1 = function (str) {
  if (str.startsWith("Epicode")) {
    return str;
  } else {
    return "Epicode " + str;
  }
};
console.log(epify1("é un'ottima accademia"));
console.log(epify1("Epicode é un'ottima accademia"));

console.log("-----Soluzione 2-----");
const epify2 = function (str) {
  // Usa indexOf per verificare se la stringa inizia con "EPICODE"
  if (str.indexOf("Epicode") === 0) {
    return str;
  } else {
    return "Epicode " + str;
  }
};
console.log(epify2("é un'ottima accademia"));
console.log(epify2("Epicode é un'ottima accademia"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-------------------ESERCIZIO 6-------------------");
const check3and7 = function (np) {
  if (np % 3 === 0) {
    return np + " è un multiplo di 3";
  } else if (np % 7 === 0) {
    return np + " è un multiplo di 7";
  } else {
    return np + " non è ne un multiplo di 3 ne un multiplo di 7";
  }
};
console.log(check3and7(15));
console.log(check3and7(49));
console.log(check3and7(74));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-------------------ESERCIZIO 7-------------------");
const reverseString = function (str2) {
  return str2.split("").reverse("").join("");
};
console.log(reverseString("Epicode"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-------------------ESERCIZIO 8-------------------");
const upperFirst = function (str3) {
  return str3
    .split(" ")
    .map(
      (parola) => parola.charAt(0).toUpperCase() + parola.slice(1).toLowerCase()
    )
    .join(" ");
};
console.log(upperFirst("dirty deeds done dirt cheap"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-------------------ESERCIZIO 9-------------------");
const cutString = function (str4) {
  return str4.slice(1, str4.length - 1);
};
console.log(cutString("Hello"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("-------------------ESERCIZIO 10-------------------");
function giveMeRandom(nr) {
  const randomNumberArray = [];

  for (let i = 0; i < nr; i++) {
    const randomNumber = Math.floor(Math.random() * 11);
    randomNumberArray.push(randomNumber);
  }

  return randomNumberArray;
}

// Esempio di utilizzo
console.log(giveMeRandom(5));
console.log(giveMeRandom(3));
