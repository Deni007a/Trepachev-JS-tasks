//Задача 71
// Сортировка массива объектов
//
// Дан массив объектов:
// [
//   {
//     name: 'user3',
//     age: 31,
//     salary: 100,
//   },
//   {
//     name: 'user1',
//     age: 32,
//     salary: 300,
//   },
//   {
//     name: 'user2',
//     age: 33,
//     salary: 200,
//   },
// ]
//
// Выполните сортировку этого массива по заданному полю (по имени, возрасту или зарплате).
let arr =[
    {
        name: 'user3',
        age: 31,
        salary: 100,
    },
    {
        name: 'user1',
        age: 32,
        salary: 300,
    },
    {
        name: 'user2',
        age: 33,
        salary: 200,
    },
]

function mySort(arr=arr,type="salary"){
    if(typeof type ==="string"){
        let collator = new Intl.Collator('en');
        return  arr.sort((a, b) => collator.compare(a.type, b.type));
    }
    if(typeof type ==="number"){
        return  arr.sort((a,b)=>a.type-b.type);
    }

}


let v1 =arr.sort((a,b)=>a.salary-b.salary);
let v2=arr.sort((a,b)=>a.age-b.age);
// Variant 1
let v3a=arr.sort((a,b)=>a.name.localeCompare(b.name));
// Variant 2
let collator = new Intl.Collator('en');
let v3b= arr.sort((a, b) => collator.compare(a.name, b.name));
console.log(v1)
console.log(v2)
console.log(v3a)
console.log(v3b)
// если функцией то так
console.log( mySort(arr,"name") );