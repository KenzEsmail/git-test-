/*********************  CHALLENGE 1 ***********************/
/* This challenge has been completed for you as an example. */
function getArea(width, length) {
    return width * length;
}
const area = getArea(4, 5);
document.querySelector('#challenge1').textContent = area; 
/****************** End of Challenge 1 ********************/

/********************* CHALLENGE 2 ************************/
function getPerimeter(width, length) {
    return (width * 2) + (length * 2);
}

// Uncomment line 16 & 17 below (remove the //s at the beginning of each line), then complete line 16 by calling the getPerimeter function with arguments of 4 and 5.
const perimeter = getPerimeter(4, 5);
document.querySelector('#challenge2').textContent = perimeter; // Uncomment this line, but do not edit it.
/****************** End of Challenge 2 ********************/

/********************* CHALLENGE 3 ************************/
// Add code inside the function declaration below so that it returns the value of pounds * 16.
function getOuncesFromPounds(pounds) {
return pounds * 16;

}
// You do not need to edit the below two lines.
const ounces = getOuncesFromPounds(4);
document.querySelector('#challenge3').textContent = ounces; 
/****************** End of Challenge 3 ********************/

/********************* CHALLENGE 4 ************************/
// Below, declare a function named getInchesFromFeet. It should have one parameter in its parameter list called ft. Inside the function, write code to return the value of ft * 12. 

// Uncomment the two lines below once you have finished declaring the function. You do not need to edit the two lines below otherwise.
function getInchesFromFeet(feet) {
return feet * 12;
}
const inches = getInchesFromFeet(6);
document.querySelector('#challenge4').textContent = inches;

/****************** End of Challenge 4 ********************/

/********************* CHALLENGE 5 ************************/
// Below, declare a function named getGramsFromOunces. It should have a parameter list containing a parameter called ounces. Inside the function, return the value of ounces * 28.3495.  
function getGramsFromOunces(ounces) {
return ounces * 28.3495;
}

// Below, call the getGramsFromOunces function with an argument of 5, and save its  return value to a const variable named grams.
const grams = getGramsFromOunces(5);


// Uncomment the line below once you have finished declaring and calling the function. You do not need to edit it otherwise.
document.querySelector('#challenge5').textContent = grams;

/****************** End of Challenge 5 ********************/

/********************* BONUS CHALLENGE ************************/
// Can you think of a short function declaration to write on your own? Make sure that it returns a value of some kind. 
function getMetertFromMile(mile) {
return mile * 1609.34;
}

// Call the function that you wrote, and save it to a variable, giving the variable an appropriate name. 
const meter = getMetertFromMile(5);

// Uncomment the line below once you have finished declaring and calling the function. Make sure to replace the variable name yourVariableNameHere with the name of the actual variable to which you saved your function's return value.
document.querySelector('#challenge-bonus').textContent = meter;