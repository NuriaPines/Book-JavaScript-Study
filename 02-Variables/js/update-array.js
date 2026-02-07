let colors = ["white", "black", "custom"];

// Update colors position two
colors[2] = 'beige';

const elem = document.getElementById("colors")
elem.textContent = colors[2]