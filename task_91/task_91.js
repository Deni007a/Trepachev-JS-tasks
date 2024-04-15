// Задача 91
// Даты из промежутка
//
// Даны две даты в формате год-месяц-день. Выведите все даты, расположенные между этими датам



import moment from "moment";

moment.locale("ru");
const data1 ="2024-04-01";
const data2 ="2024-04-21";

let moment1 = moment(data1);

while(moment1.isBefore(data2)){
    let temp = moment(data1);
    if(moment1.isSame(temp)){
        //чтоб не выводило стартово число
        moment1= moment1.add(1,"day");
    }
    else{
        console.log(moment1.format('LL'));
        moment1= moment1.add(1,"day");
    }
}