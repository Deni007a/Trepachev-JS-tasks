//Задача 100
// Ближайшие вторники
//
//Выведите даты ближайших 10-ти вторников.

import moment from "moment";

// ПЕРВЫЙ ВАРИАНТ
/*
let obData={};
// количество дней которых нужно нати
let countDays =0;
// счетчик для переборки
let temp=0;

let x

while (countDays<10){
    x=moment().add(temp, 'days')
    if(x.format('dddd') === "Tuesday"){
        obData[countDays]=(x)
        countDays++
    }
    temp++
}

console.log(obData)
*/

// ВТОРОЙ вариант

let obData={};
let x;
// ищем ближай  ший вторник
for (let i = 0; i <7 ; i++) {
    x = moment().add(i, 'days');
    if (x.format('dddd') === "Tuesday") {
        let temp = x.format("Do MMM YYYY")
        obData[temp] = x;
    }
}
// добираме отавшиеся 9 вторников
    for (let j = 0; j <9 ; j++) {
        x = x.add(7,"days")
        let temp =x.format("Do MMM YYYY")
        obData[temp]=x;

    }

console.log(obData);



