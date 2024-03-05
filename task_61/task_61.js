/*
Задача 61

Разворачивание объекта с массивами

Дан список событий за определенные даты, хранящийся в следующей структуре:
{
    '2019-12-29': ['name1', 'name3', 'name5', 'name7'],
    '2019-12-30': ['name4', 'name8', 'name9'],
    '2019-12-31': ['name2', 'name6'],
}

Напишите код, которой переделает структуру данных вот в такую:
    [
        {
            date:  '2019-12-29'
            event: 'name1'
        },
        {
            date:  '2019-12-31'
            event: 'name2'
        },
        {
            date:  '2019-12-29'
            event: 'name3'
        },
        {
            date:  '2019-12-30'
            event: 'name4'
        },
        {
            date:  '2019-12-29'
            event: 'name5'
        },
        {
            date:  '2019-12-31'
            event: 'name6'
        },
        {
            date:  '2019-12-29'
            event: 'name7'
        },
        {
            date:  '2019-12-30'
            event: 'name8'
        },
        {
            date:  '2019-12-30'
            event: 'name9'
        },
    ]


 */

const obj = {
    '2019-12-29': ['name1', 'name3', 'name5', 'name7'],
    '2019-12-30': ['name4', 'name8', 'name9'],
    '2019-12-31': ['name2', 'name6'],
}

function convertation(obj) {
    const res = []
    for(let key in obj) {
        obj[key].forEach((elem) => {
            res.push({
                date: key,
                event: elem
            })
        })
    }
    return res.sort((a,b) => a.event.localeCompare(b.event))
}

console.log(convertation(obj))