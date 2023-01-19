const date =  new Date().getFullYear();



const lastMod = new Date(document.lastModified);
const removeTZ = lastMod.toLocaleString();


document.querySelector("#last-update").innerHTML = `&copy;${date} Last Updated: ${removeTZ}`;
