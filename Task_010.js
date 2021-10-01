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
