//Задача 63
// Следующее число Фибоначчи
//
// Сделайте функцию, каждый новый вызов которой будет выдавать следующее число Фибоначчи.


function* fibonacciGenerator() {
    let current = 0;
    let next = 1;

    while (true) {
        yield current;
        [current, next] = [next, current + next];

    }
}

function nextFib(curent){

    const fibonacci = fibonacciGenerator();
// Генерация первых 10 чисел Фибоначчи можно больше
    for (let i = 0; i < 10; i++) {
        let temp =fibonacci.next().value;

        if(temp > curent){
            console.log(temp)
            break;
        }
    }
    // Вывод 10 чисел 0 1 1 2 3 5 8 13 21 34
}
// следующее после 21 число 34
nextFib(21)