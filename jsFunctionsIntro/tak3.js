function checkOrder (available, ordered){
    let result;
    if (ordered <= 0){
        result = 'Your order is empty';
    } 
    else if (available < ordered){
        result = 'Your order is too large, we don’t have enough goods.';
    }
    else if (available => ordered){
        result = 'Your order is accepted';
    }
    return result;
}

console.log(checkOrder (10, 10));