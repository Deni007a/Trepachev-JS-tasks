//Задача 102 (98)
// Слова с одинаковыми буквами (Анограмма)
//
// Дан текст. Получите массив слов, у которых есть одинаковые буквы.

function findAnagrams(str) {
    const words = str.split(/\s+/);
    const obj_anagrams = {};

    words.forEach(word => {
        // Сортируем буквы в слове и создаем ключ
        const sort = word.split('').sort().join('');

       // Добавляем слово в обект
        if (obj_anagrams[sort]) {
            obj_anagrams[sort].push(word);
        } else {
            obj_anagrams[sort] = [word];
        }

    });

    // Получаем массив слов с одинаковыми буквами
    let res = Object.values(obj_anagrams).filter(group => group.length > 1);

    return res;
}

let text = "кот ток амба атака такияки окт каата";
let anagramGroups = findAnagrams(text);
console.log(anagramGroups);
