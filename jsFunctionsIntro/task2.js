function defineIfAdult (age){
    if (age > 18){
        return true;
    }
    else {
        return false;
    }
}

if (defineIfAdult(15)){
    console.log('Особа є повнолітньою');
}
else {
    console.log('Особа не є повнолітньою');
}