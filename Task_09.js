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
