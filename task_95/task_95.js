// Задача 95
// Получение элементов многомерного объекта
//
// Дан многомерный объект произвольного уровня вложенности:
//     let obj = {
//         a: {
//             b: {
//                 c: '+++'
//             }
//         }
//     };
//Сделайте функцию, с помощью которой можно будет получить значения элемента с любого уровня вложенности,
// указав ключи последовательно через точку:
// let res = func('a.b.c');
// console.log(res); // '+++'


let obj = {
    a: {
        b: {
            c: '+++'
        }
    }
};
console.log(func(obj, 'a.b.c'));
console.log(func(obj, 'a.b.z'));

function  func(obj, keys){
    let keysArr = keys.split('.');
    let value = obj;

    for (let key of keysArr) {
        if (value[key] !== undefined) {
            value = value[key];
        } else {
            return undefined;
        }
    }
    return value;
}