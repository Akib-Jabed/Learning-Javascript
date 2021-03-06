function range(start, end, step = 1) {
    const arr = [];
    if (step < 0) {
        for (let i = start; i >= end; i += step) {
            arr.push(i);
        }
    } else {
        for (let i = start; i <= end; i += step) {
            arr.push(i);
        }
    }
    return arr; 
}

function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr);
}

console.log(sum(range(1, 10)));
console.log(sum(range(1, 10, 2)));
console.log(sum(range(5, 2, -1)));


