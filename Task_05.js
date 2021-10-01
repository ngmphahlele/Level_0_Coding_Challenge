/*
Task 0.5
*/
function calculateArea(side1, side2, side3) {
    //Calculate the semiperimeter
    var s = (side1 + side2 + side3)/2;
    //Calculate the area and return its value
    return  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
}
