// Input side lengths
let side1 = 25;
let side2 = 35;
let side3 = 55;

// Check if the sides form a valid triangle
if ((side1 + side2 > side3) &&
    (side1 + side3 > side2) &&
    (side2 + side3 > side1)) {

    // Classification using if-else
    if (side1 === side2 && side2 === side3) {
        console.log("The triangle is Equilateral.");
    } 
    else if (side1 === side2 || side1 === side3 || side2 === side3) {
        console.log("The triangle is Isosceles.");
    } 
    else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
        console.log("The triangle is Scalene.");
    }

} else {
    console.log("The given sides do not form a valid triangle.");
}