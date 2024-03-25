//Задача 76
// Удаление уникальных элементов массива
//
// Дан массив. Удалите из него все элементы, которые встречаются только один раз.


let arr = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 7]; //1237 1237

// вар 1
const removeNonRepeatingElements1 = (arr) => {
    const count = {};
    arr.forEach((item) => {
        count[item] = (count[item] || 0) + 1;
    });
    const result = arr.filter((item) => {
        return count[item] > 1;
    });
    return result;
};
console.log(removeNonRepeatingElements1(arr," var 1"));

// вариант 2
const removeNonRepeatingElements2 = (arr) => {
    let temp = [];
    arr.forEach(item => {
        let last = arr.lastIndexOf(item);
        let first = arr.indexOf(item);
        if (last !== first) {
            temp.push(arr[first])
        }
    })
    return temp;
};
console.log(removeNonRepeatingElements2(arr," var 2"));

// вар 3
function removeNonRepeatingElements3(arr) {
    let uniqueArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
console.log(removeNonRepeatingElements3(arr)," var 3");