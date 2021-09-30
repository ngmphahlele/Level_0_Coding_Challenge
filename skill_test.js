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

/*
Task 0.9
*/

function getVowels(word) {
	var vowArray = [];
	var maxLen = word.length;
	for (var i = 0; i < maxLen; i++) {
		if ( (word[i].toLowerCase() == 'a') || (word[i].toLowerCase() == 'e') ||
		     (word[i].toLowerCase() == 'i') || (word[i].toLowerCase() == 'o') ||
		     (word[i].toLowerCase() == 'u') ) {
			vowArray.push(word[i].toLowerCase());
		}
	}
    let vows = vowArray.toString();
    let uniqueVows = "";
    for (var i = 0; i < vows.length; i++) {
        if (uniqueVows.includes(vows[i]) == false) {
            uniqueVows +=  vows[i];
        }
    }
	console.log("Vowels: " + uniqueVows);
} 


/*
Task 0.10
*/

function findCommonChars(word1,word2) { 
	let commonCharsArray = [ ];
	for (let i of word1) {
		for (let j of word2) {
			if (j == i) {
			    commonCharsArray.push(j);
			}	
		}
	}

    let commonChars = commonCharsArray.toString();
    let uniqueChars = "";
    for (var i = 0; i < commonChars.length; i++) {
        if (uniqueChars.includes(commonChars[i]) == false) {
            uniqueChars +=  commonChars[i];
        }
    }
	console.log("Common letters: " + uniqueChars);
}

