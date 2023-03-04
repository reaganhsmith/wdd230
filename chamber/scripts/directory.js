const gridbutton = document.querySelector("#gridbtn");
const listbutton = document.querySelector("#listbtn");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}



//Create the columns and add everything from the json file
const url = 'json/directory.json';


async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.businesses);
    displaybusinesses(data.businesses);
  }
  
  getBusinessData();

  function displaybusinesses(businesses){
    const cards = document.querySelector('div.cards');


    businesses.forEach((business) => {
        let card = document.createElement('section');
        card.setAttribute('class', 'business');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let website = document.createElement('a');
        let membership = document.createElement('p');

        h2.textContent = `${business.name}`;

        portrait.setAttribute('src', business.image);
        portrait.setAttribute('alt', `business logo for ${business.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200px');

        address.textContent = `${business.address}`;
        phone.textContent =`${business.phone}`;
        membership.textContent = `Membership level: ${business.membership}`

        website.textContent=`${business.website}`;
        website.href=business.website;




        card.appendChild(h2);  
        card.appendChild(portrait);     
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(membership);
        card.appendChild(website);
        
        

        cards.appendChild(card);
    }
    )
  }


