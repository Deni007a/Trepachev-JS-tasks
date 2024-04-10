/*
Задача 88
Разница между датами

Даны две даты в формате год-месяц-день. Найдите разницу в днях между этими датами.
 */

import moment from "moment";
let data_1 = "2024-04-10";
let data_2 = "2024-04-25";

let temp =moment(data_2).diff(data_1,'day');
console.log(temp)

// Var 2
function dateDiffInDays(date_1, date_2) {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(date_1);
    const secondDate = new Date(date_2);
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    return diffDays;
}

console.log(dateDiffInDays(data_1, data_2));