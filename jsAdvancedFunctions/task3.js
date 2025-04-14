function divide (numerator, denominator){
    let result;

    if (denominator === 0 ){
        console.log ('Oops! Division by zero!');
    }
    else if ((typeof(numerator) != 'number') || (typeof(denominator) != 'number')){
        console.log ('Oops! Please check if arguments are numbers!');
    } 
    else {
        result = numerator/denominator;
        console.log (result);
        return result;
    }

}

try {
    divide (192, 0.1);
} catch (error) {
  console.error(error);
} finally{
    console.log("Робота завершена");
}