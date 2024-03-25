//Задача 76
// Удаление уникальных элементов массива
//
// Дан массив. Удалите из него все элементы, которые встречаются только один раз.


let arr =[1,2,3,4,5,6,7, 1,2,3,7]; //1237 1237

const removeNonRepeatingElements = (arr) => {
    const count = {};
    arr.forEach((item) => {
        count[item] = (count[item] || 0) + 1;
    });
    const result = arr.filter((item) => {
        return count[item] > 1;
    });
    return result;
};
console.log(removeNonRepeatingElements(arr));
