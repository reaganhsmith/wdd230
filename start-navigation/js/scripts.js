function toggleMenu(){
    console.log('It worked')
    document.querySelector('#primaryNav').classList.toggle('open');
    document.querySelector('#hamburgerBtn').classList.toggle('open');
}

const hamButton =document.querySelector('#hamburgerBtn');
hamButton.onclick = toggleMenu;

