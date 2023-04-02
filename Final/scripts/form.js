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
    const yourEmail = emailAdd.value;
    const yourPhone = phoneNum.value;

    const fruit1 = fruitChoice1.options[fruitChoice1.selectedIndex].text;
    const fruit2 = fruitChoice2.options[fruitChoice2.selectedIndex].text;
    const fruit3 = fruitChoice3.options[fruitChoice3.selectedIndex].text;


    const instr = specialInstructions.value;

    const text1 = document.createElement('p');
    text1.textContent = `Thank you ${firstName} for your order! We will contact you at ${yourEmail} and ${yourPhone} when your drink is ready.
    We will make sure to follow these instructions: ${instr}.`;

    smoothieDetails = document.createElement('p');
    smoothieDetails.textContent = `Your smoothie will have ${fruit1}, ${fruit2} and ${fruit3} in it.`

    async function getFruitAmount() {
        const response = await fetch(url);
        const data = await response.json();

        function fruitInfo(fruitName){
        const index = data.findIndex(fruit => fruit.name === fruitName);
        const fruitNut = data[index].nutritions;
        console.log(fruitNut);
        }

        fruitInfo(fruit1);
        fruitInfo(fruit2);
        fruitInfo(fruit3);
        
        let totalCalories = 0;
        let totalCarbs = 0;
        let totalFats = 0;
        let totalProtien = 0;
        let totalSugar = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i].name === fruit1 || data[i].name === fruit2 || data[i].name === fruit3) {
          totalCalories += data[i].nutritions.calories;
          totalCarbs += data[i].nutritions.carbohydrates;
          totalFats += data[i].nutritions.fats;
          totalProtien += data[i].nutritions.protien;
          totalSugar += data[i].nutritions.sugar;

          if(isNaN(totalFats) || isNaN(totalProtien)){
            totalFats = 0;
            totalProtien = 0;

          }
        }
      }

      smoothieDetails.textContent = `Your smoothie will have ${fruit1}, ${fruit2} and ${fruit3}. It will have ${totalCalories} calories, ${totalCarbs}g carbohydrates, ${totalFats}g fats, ${totalProtien}g protien and ${totalSugar}g sugar in it.`;
      

    }

    

    getFruitAmount();






    formInfo.appendChild(text1);
    formInfo.appendChild(smoothieDetails);


    const newBtn = document.createElement('button');


    newBtn.textContent = 'Create Another';
     formInfo.appendChild(newBtn);
 
     newBtn.addEventListener('click', () => {
         newBtn.style.display = 'none';
         freshForm.style.display = 'block';
 
         fname.value = " ";
         emailAdd.value = " ";
         phoneNum.value = " ";
         fruitChoice1.value = " ";
         fruitChoice2.value = " ";
         fruitChoice3.value = " ";
         specialInstructions.value = " ";
         formP.style.display = 'none';

         formInfo.value = " ";


         
     })


  
})
