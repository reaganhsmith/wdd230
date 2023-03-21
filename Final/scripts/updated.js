const date =  new Date().getFullYear();
const dayOfWeek = new Date().getDay();


const lastMod = new Date(document.lastModified);
const removeTZ = lastMod.toLocaleString();
document.querySelector("#last-update").innerHTML = `Last Updated: ${removeTZ}`;