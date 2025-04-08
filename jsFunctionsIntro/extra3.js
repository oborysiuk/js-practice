function carRentCost(daysNumber) {
    let cost = daysNumber * 40;

    if (daysNumber >= 3 && daysNumber < 7) {
        cost -= 20;
    }
    else if (daysNumber >= 7) {
        cost -= 50;
    }

    return cost;
}

console.log(carRentCost(6));