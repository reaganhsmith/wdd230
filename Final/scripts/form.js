const fname = document.querySelector('.fname');
const emailAdd = document.querySelector('.email');
const phoneNum = document.querySelector('.phoneNum');
const fruitChoice1 = document.querySelector('.dropDown');
const fruitChoice2 = document.querySelector('.dropDown2');
const fruitChoice3 = document.querySelector('.dropDown3');
const specialInstructions = document.querySelector('.specialIns');
const submitBtn = document.querySelector('.submitBtn');
const freshForm = document.querySelector('.freshForm');
const formInfo = document.querySelector('.formInfo');


submitBtn.addEventListener("click", () => {

    freshForm.style.display = 'none';
  

    const firstName = fname.value;
    // const emailText = emailAdd.value;
    // const phoneText = phoneNum.value;

    // const fruit1 = fruitChoice1.options[fruitChoice1.selectedIndex].text;
    // const fruit2 = fruitChoice2.options[fruitChoice2.selectedIndex].text;
    // const fruit3 = fruitChoice3.options[fruitChoice3.selectedIndex].text;

    // const instr = specialInstructions.value;

    const text1 = document.createElement('p');
    text1.textContent = `${firstName}`;

    formInfo.appendChild(text1);


  
})