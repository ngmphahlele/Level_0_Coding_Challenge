/*
Task 0.8
*/
function convertToTime(x) {
    let minutes = x % 60;
    let hours = ~~(x / 60);

    let minsDesc = (minutes != 1)? " minutes" : " minute";
    let hrsDesc = (hours != 1)? " hours" : " hour"; 
    
    console.log(hours + hrsDesc + ", " + minutes + minsDesc);
}
