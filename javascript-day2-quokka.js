// if statements

//UNCOMMENT SYNTACTICALLY CORRECT ANSWERS
//if (7 > 3) {  }
//if(7 > 3) { }
// if{7 > 3} ( )
//if(7 > 3) console.log('hello')
//if(7 > 3) 
//console.log('hello')
//if(7 < 3) { }
//if(7 = 3) { }
//if(7 == 3) { }
//if(7 === 3) { }
//if(7 != 3) { }
//if(7 !== 3) { }
//if(7 =! 3) { }
//if(7 ==! 3) { }
//if(7 ~ 3) { }
//if(7 >= 3) { }
//if(7 <= 3) { }
//if(7 => 3) { }
//if(7 =< 3) { }
//if(7 ++ 3) { }
//if(7 - 3) { }
//if(7 / 3) { }

//TRUTHY VS FALSEY
// True or false
// I am human?
// I am giraffe?
// I am 7
// 7
// Depends on who you ask.  Computers do true false differently.
// The following 6 values are false :
// 0
// "" / ''
// false
// null
// undefined
// NaN

//UNCOMMENT the sections that will return true
//if(3) { return true }
//if(0) { return true }
//if(-7) { return true }
//if("Hello") { return true }
//if("") { return true }
//if("   ") { return true }
//if(undefined) { return true }
//if(nonExistantObject) { return true }


// - if else if
// WHAT WILL BE THE FINAL OUTPUT?

var num = 7
var finalOutput = ""
if (num > 3) {
    finalOutput = "Yes"
} else {
    finalOutput = "No"
}


var num = 7
var finalOutput = ""
if (num > 33) {
    finalOutput = "Yes"
} else {
    finalOutput = "No"
}

var num = 7
var finalOutput = ""
if (num > 3 && num < 7) {
    finalOutput = "Yes"
} else if (num > 7 && num < 11) {
    finalOutput = "Maybe"
} else {
    finalOutput = "No"
}

var num = 7
var finalOutput = ""
if (num > 3 && num < 7) {
    finalOutput = "Yes"
} else if (num >= 7 && num < 11) {
    finalOutput = "Maybe"
} else {
    finalOutput = "No"
}

var num = 7
var finalOutput = ""
if (num > 3 && num < 7) {
    finalOutput = "Yes"
} else if (num > 7 && num < 11) {
    finalOutput = "Maybe"
} else {
    finalOutput = "No"
}

// Logical expressions
// IS THIS LOGICALLY SOUND?
var person = {
    name: "Long John Silvers",
    beard: true,
    canTan: true,
    melts: false,
    isAllergicToSnow: true,
}
// if(person.name=="Long John Silvers" && person.beard == true){ 
//     person.isPirate = true
// }

// if(person.name !== "Long John Silvers") {
//     person.isPirate = false
// }

// if(person.canTan && !person.melts && person.isAllergicToSnow){
//     person.isPhoenixNative = true;
// }

// if( (person.isExtrovert && day.endsInDay)){
//     person.wantsToHangOut = true
// } else if(person.isExtrovert){
//     person.wantsToHangOut = true;
// } else if(person.isIntrovert 
//   && goodWeather 
//   && doesntHaveToDriveFar
//   && hasBeenMoreThan3DaysSinceHangingOut
//   || hasBeenLongerThan1Month){
//     return true;
// }



// * ternary operator

var sizing = 7 < 10 ? "less than" : "greater than";
var sizing2 = 7 > 10 ? "valid statement" : "invalid statement"

function flow1() {
    var abc = 123;
    abc;
}

function flow2() {
    var abc = 123;
    abc;
}

var isTrue = true;
// Which function will be invoked?
// Change the value of isTrue above to make the other function get invoked
// isTrue ? flow1() : flow2();


// ARRAYS
// -accessing values

var abc = ['ayy', 'bee', 'cee'];
// var a = ??
// var c = ??
// var b = ??

// -adding values (push, unshift)
// ADD 'dee' to the end
// ADD 'zee' to the front

// - .length
// SHOW how many items are in the array


// - for loops / loop over array in reverse
//UNCOMMENT the valid for loop systax
//for(var i > 0; i = array.length; i++) {}
//for(var i = 0; i < array.length; i++) {}
//for(var k = 0; k < array.length; k++) {}
//for(var j = 0; j < array.length; k++) {}
//for(var i = 0; i < 100; i++) {}
//for(var i = array.length - 1; i > 0; i--) {}
//for(var i = array.length - 1; i > 0; i++) {} //Don't uncomment.  Why?
//for(var i = 0; i < "hello"; i++) {}
//for(var i = 0; i < "hello".length; i++) {}
//for(var i = ""; i.length < 10; i+="echo ") {}


// - pop, shift, splice, slice
// pop is the opposite of ? so it ?
// shift is the opposite of ? so it ?
// splice does what
// slice does what

// make a copy of the abc array, exclude the first and last item
// call it abcCopy
// remove dee from the end of the abc array
// remove zee from the start of the abc array
// logically compare the abc array to abcCopy
// remove bee from the abc array


// objects
var englishNumbers = {
    1: "one",
    2: "two",
    3: "three",
    sentence: "I can count to "
}

var frenchNumbers = {
    1: "un",
    2: "deux",
    3: "trois",
    phrase: "Je peut compte a "
}

// - dot notation
// - dot notation to add property
// ADD number 4 with dot notation
// - bracket notation to add property
// ADD numbers 4, 5, 6, 7, 8, 9, 10 with bracket notation
// ADD a property "flare" with "voila" as a value IF the translated value for 2
// Does not start with a t
// - bracket notation

function translate(languageObject, sentencePropertyName) {
    //GET the sentenceValue using the sentencePropertyName
    //GET the translated value of 3 and add it to the sentenceValue above
    //GET all 3 numbers and add them to the end as a string
    //return the finally result
    // IE - "I can count to 3 : 1, 2, 3"
}

translate(englishNumbers, "sentence")


// callbacks
// -pattern in JS. function passed in as argument

// UNCOMMENT THIS CODE
// function laterFunc() {
//     var later = "it's later";
//     later;
// }

// setTimeout(laterFunc, 1000);

// setTimeout(function() {
//     var later = "it's later";
//     later;
// }, 1000);


//WRITE a function : waitForFood, it logs, "hurray"

function orderFood(tableNumber) {
    //INVOKE tableNumber after 2 seconds
}

//INVOKE orderFood with the function waitForFood as a parameter


function doTimes(times, func) {
    for (var i = 0; i < times; i++) {
        times;
        i;
        func;
        //Invoke function passing in i        
    }
}

var arr = [];
function sayHi(index) {
    arr.push("Hi" + index)
}

//INVOKE doTimes and say hi 3 times
arr;

//MAKE a function, say goodbye, that adds goodbye to the array
//INVOKE doTimes and say goodbye 5 times

//INVOKE doTimes and say 'echo' 3 times with a one line arrow function