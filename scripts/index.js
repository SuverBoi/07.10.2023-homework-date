// 1. Напишіть функцію зведення числа у ступінь.

// function stepin(n) {
//     if (n===0) {
//         return 1;
//     }   else {
//         return n*n;
//     }
// }
// alert(stepin(ТУТ ВВЕСТИ ЧИСЛО ДЛЯ ЗНАХОДЖЕННЯ СТЕПЕНЯ));

// 2. Напишіть функцію пошуку найбільшого спільного дільника.

// function NCD(m, n) {
//     if (n === 0) {
//         return m;
//     } else {
//         return NCD(n, m % n);
//     }
// }
// var result = NCD(48, 18);
// alert(result);

// 3. Напишіть функцію для пошуку максимальної цифри у числі.

// function maxnum(num) {
//     let numStr = num.toString();
//     let maxDigit = -Infinity;

//     for (let i = 0; i < numStr.length; i++) {
//         let currentDigit = parseInt(numStr[i], 10);

//         if (currentDigit > maxDigit) {
//             maxDigit = currentDigit;
//         }
//     }

//     return maxDigit;
// }

// alert(maxnum(12341235679));

// 4. Напишіть функцію, яка визначає чи є передане число простим.

// function isPrime(num) {
//     if (num <= 1) {
//         return "ne proste";
//     }

//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return "ne proste";
//         }
//     } 

//     return "proste";
// }


// alert(isPrime(124));
// alert(isPrime(13));

// 5. Напишіть функцію для виведення усіх множників, переданих числу у зростаючому порядку. Наприклад: число 18 – множники 2*3*3

// function mnoznik(num) {
//     if (0 <= num <= 3) {
//         return num
//     } else {
//         i dont know
//     }
// }