var copySymbol = 	'&copy;';


document.querySelector("#copy-symbol").innerHTML = copySymbol + " 2023 .:|:. Reagan Houser-Smith";


const lastMod = new Date(document.lastModified);
var removeTZ = lastMod.toLocaleString();


document.querySelector("#last-update").innerHTML = "Last Updated: " + removeTZ;