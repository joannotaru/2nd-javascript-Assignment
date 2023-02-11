
var mAge = 90;
let userAge = parseInt(prompt("Enter your age: "));


function lifeInWeeks(){
    var years = mAge - userAge;
    var months = years * 12;
    var weeks = months * 4;
    var days = weeks * 7;

    output = `You have ${days} days, ${weeks} weeks and ${months} months left.`
    alert(output);
}
lifeInWeeks(userAge);

// Question 2

var firstName = prompt("Enter your name");
var secondName = prompt("Enter your partner's name");

function loveCalculator(firstName, secondName){

    var calculation = Math.floor(Math.random() * 101);
    output = `${firstName} and ${secondName} are a ${calculation}% match`
    alert(output);
}

loveCalculator(firstName, secondName)