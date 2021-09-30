/*
Task 0.1
*/
var x = 0;
var y = 1;
console.log("x: " + x);
console.log("y: " + y);
x = x + 3;
y = y + x;
console.log("x: " + x);
console.log("y: " + y);

/*
Task 0.2
*/
var x = 1 + 1 * 2;
var y = (1 + 1) * 2;
var z = 1 + (1 * 2);
var a = 1 + 1 * 2 / 2;
var b = (1 + 1 * 2) / 2;
console.log("x: " + x);
console.log("y: " + y);
console.log("z: " + z);
console.log("a: " + a);
console.log("b: " + b);

/*
Task 0.3
*/
function hello(name) {
    return console.log("Hello " + name + "!");
}

/*
Task 0.4 
*/
function evenOrOdd(x) {
  if ( x % 2 == 0) {
	console.log("odd");
  } else {
	console.log("even");
  }
}

/*
Task 0.5
*/
function calculateArea(side1, side2, side3) {
    //Calculate the semiperimeter
    var s = (side1 + side2 + side3)/2;
    //Calculate the area and return its value
    return  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
}

/*
Task 0.6
*/
function maximum(x,y,z) {
    if ((x > y) && (x > z) ) {
        console.log("Maximum: " + x);
    } 
    else if ( (y > x) && (y > z) ) {
        console.log("Maximum: " + y);
    } else {
        console.log("Maximum: " + z); 
    }
}

/*
Task 0.7
*/
function celsiusToFahrenheit(celsius) {
	//Fahrenheit formular	
	return (9 * celsius + (32 * 5) ) / 5;
}

function fahrenheitToCelsius(fahrenheit) {
	//Celsius formular
	return (5 * (fahrenheit - 32)) / 9;
}


/*
Task 0.8
*/
function convertToTime(x) {
    let minutes = x % 60;
    let hours = ~~(x / 60);

    let minsDesc = (minutes > 1)? " minutes" : " minute";
    let hrsDesc = (hours > 1)? " hours" : " hour"; 
    
    console.log(hours + hrsDesc + ", " + minutes + minsDesc);
}

/*
Task 0.9
*/
function getVowels(word) {
	let vowFound = "";
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < word.length; i++) {
        if (vowels.includes(word[i].toLowerCase())) {
            vowFound+=word[i].toLowerCase();
        }
    }

    let uniqueVows = "";
    for (var i = 0; i < vowFound.length; i++) {
        if (uniqueVows.includes(vowFound[i]) == false) {
            uniqueVows +=  vowFound[i];
        }
    } 

    let answer = uniqueVows.split("").join(", ");
	console.log("Vowels: " + answer);
} 

/*
Task 0.10
*/
function findCommonChars(word1, word2) { 
	let commonCharsArray = [ ];
	for (let i of word1) {
		for (let j of word2) {
			if (j.toLowerCase() == i.toLowerCase()) {
			    commonCharsArray.push(j.toLowerCase());
			}	
		}
	}

    let uniqueChars = "";
    for (var i = 0; i < commonCharsArray.length; i++) {
        if (uniqueChars.includes(commonCharsArray[i]) == false) {
            uniqueChars +=  commonCharsArray[i];
        }
    }

    let answer = uniqueChars.split("").join(", ");
	console.log("Common letters: " + answer);
}
