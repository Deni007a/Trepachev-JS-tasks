//Задача 66
// Подсчет элементов массива
//
// Дан массив. Подсчитайте количество различных элементов в нем.
// В качестве результата верните объект, в котором ключами будут элементы массива,
// а значениями - их количество в массиве.

const arr= ['d', 't', 5, 9, 'dfsds#', 10, 'dfsds#', 'd', 5, 9];
const result = arr.reduce((obj, elem) => (obj[elem] ? obj[elem] += 1 : obj[elem] = 1, obj), {});

console.log(result)
