// This is for when the form is submitted

const fname = document.querySelector('.fname');
const emailAdd = document.querySelector('.email');
const phoneNum = document.querySelector('.phoneNum');
const fruitChoice1 = document.querySelector('.dropDown');
const fruitChoice2 = document.querySelector('.dropDown2');
const fruitChoice3 = document.querySelector('.dropDown3');
const specialInstructions = document.querySelector('.specialIns');
const submitBtn = document.querySelector('.submitBtn');
const freshForm = document.querySelector('.freshForm');
const freshPage = document.querySelector('.fresh');


submitBtn.addEventListener("click", () => {
    
    freshForm.style.display = 'none';
   
    const yourName = fname.value;
    const yourEmail = emailAdd.value;
    const yourPhone = phoneNum.value;

    const fruit1 = fruitChoice1.options[fruitChoice1.selectedIndex].text;
    const fruit2 = fruitChoice2.options[fruitChoice2.selectedIndex].text;
    const fruit3 = fruitChoice3.options[fruitChoice3.selectedIndex].text;

    const instr = specialInstructions.value;

    const formP = document.createElement('p');
    formP.setAttribute('class', 'yourInfo');
    formP.textContent = `Thank you ${yourName} for your order! We will contact you at ${yourEmail} and ${yourPhone} when your order is done. We will make sure to follow these instructions: ${instr}. Your drink will have ${fruit1}, ${fruit2}, and ${fruit3}.`;
    freshPage.appendChild(formP);

    

    const newBtn = document.createElement('button');


    newBtn.textContent = 'Create Another';
     freshPage.appendChild(newBtn);
 
     newBtn.addEventListener('click', () => {
         newBtn.style.display = 'none';
         freshForm.style.display = 'block';
 
         yourName = " ";
         yourEmail = " ";
         yourPhone = " ";
         fruitChoice1.value = " ";
         fruitChoice2.value = " ";
         fruitChoice3.value = " ";
         instr = " ";
         formP.style.display = 'none';
         
     })

})