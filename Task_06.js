/*
Task 0.6
*/
function maximum(x,y,z) {
    let numbersArray = [];
    numbersArray.push(x);
    numbersArray.push(y);
    numbersArray.push(z);

    let maxDigit = Number.NEGATIVE_INFINITY;
    numbersArray.forEach(number => {maxDigit = (number > maxDigit) ? number : maxDigit;})
    console.log("Maximum: " + maxDigit);
}
