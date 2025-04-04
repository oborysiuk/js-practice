let array = [1, 1, 11, 2, 3];

let sumExceptMaxMin = 0;

array.forEach(element => {
    sumExceptMaxMin+=element;
});

sumExceptMaxMin -= (Math.max(...array)+Math.min(...array));

console.log(sumExceptMaxMin);