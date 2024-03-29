//Задача 78
// Удаление лишних слов
//
// Дан текст. Найдите все места с двумя одинаковыми словами подряд и удалите лишние слова.

const str ="один один два один три"


function superfluousWord(text) {
    let correctText = [];
    const arrowText = text.split(' ');
    for (let i = 0; i < arrowText.length; i++) {
        if (arrowText[i] !== arrowText[i + 1]) {
            correctText.push(arrowText[i]);
        }
    }
    return correctText.join(' ');
}


let x = superfluousWord(str);
console.log(x)