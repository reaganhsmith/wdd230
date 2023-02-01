const datefieldUK = document.querySelector(".date"); 

const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);


datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;


function toggleMenu(){
    document.querySelector('#primaryNav').classList.toggle('open');
    document.querySelector('#hamburgerBtn').classList.toggle('open');
}

const hamButton =document.querySelector('#hamburgerBtn');
hamButton.onclick = toggleMenu;


const date =  new Date().getFullYear();




let lastMod = new Date(document.lastModified);
var removeTZ = lastMod.toLocaleString();


const newParagraph = document.createElement("p");
newParagraph.innerText =`Last Modification: ${removeTZ}`;

document.querySelector('#timemod').appendChild(newParagraph);


const dayOfWeek = new Date().getDay();

if (dayOfWeek === 1 || dayOfWeek === 2){
    const newP = document.createElement('p');
    newP.innerText = 'Come join us for a chamber meeting tonight at 7pm';
    newParagraph.appendChild(newP);
}