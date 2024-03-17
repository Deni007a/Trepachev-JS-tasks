//Задача 68
// Число прописью
//
// Дано некоторое число:
// let num = 1234567890
//
// Выведите это число прописью:
// `
//   один миллиард двести тридцать четыре миллиона
//   пятьсот шестьдесят семь тысяч восемсот девяносто

function numberToWords(num) {
    const units = [
        "",
        "один",
        "два",
        "три",
        "четыре",
        "пять",
        "шесть",
        "семь",
        "восемь",
        "девять",
    ];
    const teens = [
        "десять",
        "одиннадцать",
        "двенадцать",
        "тринадцать",
        "четырнадцать",
        "пятнадцать",
        "шестнадцать",
        "семнадцать",
        "восемнадцать",
        "девятнадцать",
    ];
    const tens = [
        "",
        "",
        "двадцать",
        "тридцать",
        "сорок",
        "пятьдесят",
        "шестьдесят",
        "семьдесят",
        "восемьдесят",
        "девяносто",
    ];
    const hundreds = [
        "",
        "сто",
        "двести",
        "триста",
        "четыреста",
        "пятьсот",
        "шестьсот",
        "семьсот",
        "восемьсот",
        "девятьсот",
    ];

    if (num === 0) {
        return "ноль";
    }

    function convertChunk(num) {
        let chunkWords = [];

        if (num >= 100) {
            chunkWords.push(hundreds[Math.floor(num / 100)]);
            num %= 100;
        }

        if (num >= 20) {
            chunkWords.push(tens[Math.floor(num / 10)]);
            num %= 10;
        }

        if (num > 0 && num < 10) {
            chunkWords.push(units[num]);
        } else if (num >= 10) {
            chunkWords.push(teens[num - 10]);
        }
        return chunkWords.join(" ");
    }

    let result = [];
    let chunks = [];
    let billion = Math.floor(num / 1000000000);
    num %= 1000000000;
    let million = Math.floor(num / 1000000);
    num %= 1000000;
    let thousand = Math.floor(num / 1000);
    let remainder = num % 1000;

    if (billion > 0) {

        chunks.push(convertChunk(billion));
        chunks.push("миллиард");
    }

    if (million > 0) {
        chunks.push(convertChunk(million));
        chunks.push("миллион");
    }

    if (thousand > 0) {
        chunks.push(convertChunk(thousand));
        chunks.push("тысяч");
    }

    if (remainder > 0) {
        chunks.push(convertChunk(remainder));
    }
    console.log(chunks)
    result.push(chunks.join(" "));
    return result.join(" ");
}

let num = 11234567890;
let result = numberToWords(num);
console.log(result);