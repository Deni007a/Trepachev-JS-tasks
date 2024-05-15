const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Прошло 5 секунд!");
    }, 5000);
});

myPromise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.error(error);
});
