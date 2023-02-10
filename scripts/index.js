const date =  new Date().getFullYear();
const dayOfWeek = new Date().getDay();


document.querySelector("#copy-symbol").innerHTML = `&copy;${date} (º__º) Reagan Houser-Smith (º__º) Idaho`;


const lastMod = new Date(document.lastModified);
const removeTZ = lastMod.toLocaleString();
document.querySelector("#last-update").innerHTML = `Last Updated: ${removeTZ}`;
