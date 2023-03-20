
//The code to get the date at the top of the banner
const datefield = document.querySelector(".date"); 

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefield.innerHTML = `${fulldate}`;




//To change the last updated on the bottom of the page
const lastUpdated = new Date(document.lastModified).toLocaleString();
document.querySelector("#timemod").innerHTML = `Last Updated: ${lastUpdated}`;



//to add the current year to the bottom of the page
const yearDate = now.getFullYear();
document.querySelector("#addyear").innerHTML = `&copy;${yearDate} Star Chamber of Commerce`;




//To dispaly that there is a chamber of Commerce Meeting
const dayOfWeek = now.getDay();
const meetingTime = document.querySelector("#meeting");

if (dayOfWeek === 1 || dayOfWeek === 2){
    document.querySelector("#meeting").style.display = "block";
} else{
    document.querySelector("#meeting").style.display = "none";
};


//for my navigation menu
function toggleMenu(){
    document.querySelector('#primaryNav').classList.toggle('open');
    document.querySelector('#hamburgerBtn').classList.toggle('open');
}

const hamButton =document.querySelector('#hamburgerBtn');
hamButton.onclick = toggleMenu;



