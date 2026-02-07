// Variables for the welcome message
let greeting = 'Howdy';
let name = 'Molly';
let message = ', please check your order: ';

//Concatenate the three variables
let welcome = greeting + ' ' + name + ' ' + message

// Create variables to hold detailg about the sign
let sign = 'Montague House';
let tiles = sign.length;
let subTotal = tiles * 5;
let shipping = 7;
let grandTotal = subTotal + shipping;

//Get the element that has an id  of greeting
let elemGreeting = document.getElementById("greeting");
elemGreeting.textContent = welcome;

//Get the element that had an id of user Sogn then update its contents
let elemUserSign = document.getElementById("userSign");
elemUserSign.textContent = sign

// Get the element that has an id of tiles then update its contents
let elemTiles = document.getElementById("tiles")
elemTiles.textContent = tiles

// Get the element that has an id of subtotal then update its contents
let elemSubtotal = document.getElementById("subTotal");
elemSubtotal.textContent = subTotal + '$';

// Get the element that has an id of shipping then update its contents
let elemShipping = document.getElementById("shipping");
elemShipping.textContent = shipping + '$';

// Get the element thas has an id of grandTotal then update its contents
let elemGrandTotal = document.getElementById("grandTotal");
elemGrandTotal.textContent = grandTotal + '$'