//Задача 93
// Слова с одинаковыми буквами подряд
//
// Дан текст. Получите массив слов, у которых есть две одинаковые буквы подряд.


let str = "mama  zoo rrr   😂😂  😂a";
let str1 = "😂a zx as ff";

function twoLetters(str) {
    let res = [];
    // для корректной разбивки
    let temp = str.split(/\s+/);
    // for of для корректного нахождения сурагатных пар
    for (const tempElement of temp) {
        let previousSymbol = null;

        for (const tempElementSymbol of tempElement) {
            if (previousSymbol === tempElementSymbol) {
                res.push(tempElement);
                previousSymbol = null;
                break;
            }
            previousSymbol = tempElementSymbol
        }
    }
    return res
}

console.log(twoLetters(str));