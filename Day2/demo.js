
// function getCounter() {
//     let count = 0;

//     return function increment() {
//         console.log(count++);
//     }
// }

// const increment = getCounter();

// setInterval(increment, 1000);


let count = 100;

const increment = (function getCounter() {
    let count = 10;

    return function increment() {
        // let count = 1;
        console.log(count++);
    }
})();

setInterval(increment, 1000);

