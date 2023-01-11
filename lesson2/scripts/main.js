var copySymbol =  '&copy;';

let lastMod = new Date(document.lastModified);
var removeTZ = lastMod.toLocaleString();


const copySpot = document.querySelector("#copy-symbol");

copySpot.innerHTML = `${copySymbol} 2023 | Reagan Houser-Smith | Last Updated: ${removeTZ}`;

