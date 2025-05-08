function printWithDelay(text, delay) {
    setTimeout(() => { console.log(text) }, delay);
}

printWithDelay('hi', 4000);