const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function getFruitData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayfruit(data);
    displayfruit2(data);
    displayfruit3(data);



    
  }


  getFruitData();
  



  function displayfruit(fruits){
        const dropDown = document.querySelector('.dropDown');
    fruits.forEach((fruit) => {
        let option = document.createElement('option');
        let value = fruit.genus;
        option.setAttribute('value', `${value}`);

        option.textContent = `${fruit.name}`;
        dropDown.appendChild(option);

        


    })}


 function displayfruit2(fruits){
        const dropDown2 = document.querySelector('.dropDown2');
    fruits.forEach((fruit) => {
        let option = document.createElement('option');
        let value = fruit.genus;
        option.setAttribute('value', `${value}`);

        option.textContent = `${fruit.name}`;
        dropDown2.appendChild(option);
    })}

    function displayfruit3(fruits){
        const dropDown3 = document.querySelector('.dropDown3');
    fruits.forEach((fruit) => {
        let option = document.createElement('option');
        let value = fruit.genus;
        option.setAttribute('value', `${value}`);

        option.textContent = `${fruit.name}`;
        dropDown3.appendChild(option);
    })}


