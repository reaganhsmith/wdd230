var copySymbol =  '&copy;';

let lastMod = new Date(document.lastModified);
var removeTZ = lastMod.toLocaleString();


const newParagraph = document.createElement("p");
newParagraph.innerText =`© 2023 | Reagan Houser-Smith | Last Updated: ${removeTZ}`;

document.querySelector('#copy-symbol').appendChild(newParagraph);

