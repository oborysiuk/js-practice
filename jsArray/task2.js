const initialArray = [1, 2, 3, 4, 5];

const mappedArray = initialArray.map((e) => e * initialArray.indexOf(e));

console.log(mappedArray);