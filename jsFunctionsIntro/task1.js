function countSquareDeclaration(width, height) {
    return width * height;
}

const countSquareExpression = function (width, height) {
    return width * height;
}

const countSquareArrow = (width, height) => {
    return width * height;
}

console.log(countSquareDeclaration(5, 10));
console.log(countSquareExpression(6, 10));
console.log(countSquareArrow(7, 10));
