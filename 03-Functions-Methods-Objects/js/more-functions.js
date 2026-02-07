// Get the elements 
let elemSayHello = document.getElementById("sayHello");
let elemGetArea = document.getElementById("getArea");
let elemCalculateArea = document.getElementById("calculateArea");
let elemGetSize = document.getElementById("getSize");
let elemFunctionDeclaration = document.getElementById("functionDeclaration");
let elemFunctionExpression = document.getElementById("functionExpression");
let elemInmediatelyInvoked = document.getElementById("inmediatelyInvoked");

// Create functions and execute
function sayHello(){
    elemSayHello.textContent = "Function sayHello: Hello!"
}
sayHello();

//---------------------------------------
function getArea(width, height){
    return width * height;
}
elemGetArea.textContent = 'Function getArea: '+ getArea(3,5)

//---------------------------------------
function calculateArea(width, height){
    let area = width * height;
    return area;
}
let wallOne = calculateArea(3, 5);
let wallTwo = calculateArea(8,5);
elemCalculateArea.textContent = 'Wall one area: ' + wallOne + ', wall two area: ' + wallTwo;

//---------------------------------------
function getSize(width, height, depth){
    let area = width * height;
    let volume = width * height * depth;
    let sizes = [area, volume];
    return sizes
}
let areaOne = getSize(3,2,3)[0]; // Area
let volumeOne = getSize(3,2,3)[1]; //Volume
elemGetSize.textContent = 'Area one: ' + areaOne + ', volume one: ' + volumeOne

//---------------------------------------
function area(width, height){
    return width*height;
}
let size = area(3,4);
elemFunctionDeclaration.textContent = 'Function Declaration: ' + size

//---------------------------------------
//ANONYMOUS
// Function expression
let areaAnonymous = function(width,height){
    return width*height;
}
elemFunctionExpression.textContent =  'Function expresion: ' + areaAnonymous(3,4);

// Inmediately Invoked
let areaInmediately = (function(){
    let width = 3, height = 2;
    return width*height
} () );
// the last () for indicate that is a function inmediately
elemInmediatelyInvoked.textContent = 'Function Inmediately: ' + areaInmediately