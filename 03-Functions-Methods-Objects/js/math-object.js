let randomNum = Math.floor((Math.random() * 10) + 1)
let elemInfo = document.getElementById('info');
elemInfo.innerHTML = '<h2>Random Number</h2><p>' + randomNum + '</p>';