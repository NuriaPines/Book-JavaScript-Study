let inStock;
let shipping;

inStock = true;
shipping = false;

inStock = false;
shipping = true;

let elemStock = document.getElementById("stock");
let elemShip = document.getElementById("shipping")
elemStock.className = inStock;
elemShip.className = shipping;