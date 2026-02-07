let subtotal = (12 + 1) * 5; 
let shipping = 0.5 * (13 + 1);

let total = subtotal + shipping;

let elemSubTotal = document.getElementById("subtotal");
let elemShipping = document.getElementById("shipping")
let elemTotal = document.getElementById("total")

elemSubTotal.textContent = subtotal
elemShipping.textContent = shipping
elemTotal.textContent = total