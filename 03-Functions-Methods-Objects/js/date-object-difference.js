let today = new Date();
let year = today.getFullYear();
let est = new Date('Apr 16, 1996 15:45:55');

let difference = today.getFullYear() - est.getFullYear();

let elMsg = document.getElementById('message');
elMsg.textContent = Math.floor(difference) + ' years of online travel advice';