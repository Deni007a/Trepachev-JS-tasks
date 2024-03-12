//Задача 67
// Самое популярное слово
//
// Дан текст. Найдите самое часто встречающееся слово в этом тексте.




const str ="dog cat pet  cat"
// \w - слова \s -Соответствует одиночному символу пустого пространства, включая пробел, табуляци

const words = str.replace(/[^\w\s]/g, "").split(/\s+/);
const max = words.reduce((obj, word) => {
    obj[word] = (obj[word] || 0) + 1;
    return obj;
}, {});

const mostFrequentWords = Object.keys(max).reduce((a, b) =>
    max[a] > max[b] ? a : b
);

console.log(mostFrequentWords);