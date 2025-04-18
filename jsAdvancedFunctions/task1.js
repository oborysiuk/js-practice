function handleNum(number, callbackEven, callbackOdd) {
    if (number % 2 == 0) {
        callbackEven();
    }
    else {
        callbackOdd();
    }

}

function handleEven() {
    console.log('Number is even');
}

function handleOdd() {
    console.log('Number is odd');
}

handleNum(7, handleEven, handleOdd);