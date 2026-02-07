let title;
let message;
title = "Molly's Special Offers";
message = "<a href=\'sale.html\'>25% off!</a>";

let elTittle = document.getElementById("title");
let elNote = document.getElementById("note");

elTittle.innerHTML = title;
elNote.innerHTML = message;