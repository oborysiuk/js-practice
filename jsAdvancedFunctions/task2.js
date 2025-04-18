function printNum (num){
    console.log(num);
    num--;
    if (num>=0){
        printNum (num);
    }
}

printNum(5);