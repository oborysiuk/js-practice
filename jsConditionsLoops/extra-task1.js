let array = [34.5, 56.2, 11, 13];

for(let i = 0; i < array.length; i++){
    array[i] = Math.round(array[i]/5)*5;
} 

console.log(array);