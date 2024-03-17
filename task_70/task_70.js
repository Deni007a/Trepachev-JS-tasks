//Задача 70
// Группировка массива по первым буквам
//
// Дан произвольный массив со словами, начинающимися на различные буквы, например, вот такой:
let arr = [
  'axx', 'bxx', 'cxx',
  'ayy', 'byy', 'cyy',
  'azz', 'bzz', 'czz',
];
//
// Преобразуйте этот массив в объект, в котором ключами будут первые буквы слов, а значениями массивы слов, начинающихся на эти буквы:
// {
//   'a': [
//     'axx', 'ayy', 'azz',
//   ],
//   'b': [
//     'bxx', 'byy', 'bzz',
//   ],
//   'c': [
//     'cxx', 'cyy', 'czz',
//   ],
// }

let result = {};

for (let word of arr) {
    let firstLetter = word[0];
    if (!result[firstLetter]) {
        result[firstLetter] = [];
    }
    result[firstLetter].push(word);
}

console.log(result);