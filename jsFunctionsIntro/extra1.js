function ShortLongShort (string1, string2){
    let solution;
    if (string1.length < string2.length){
        solution = string1 + string2 + string1;
    }
    else{
        solution = string2 + string1 + string2;
    }
    return solution;
}

console.log (ShortLongShort("22", "1"));