const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const menu = document.querySelector('#tooglemenu');
const html = document.querySelector('html');

btnHamburger.addEventListener('click', function(){
  console.log('click hamburger');

  if(btnHamburger.classList.contains('toogle')){ // Close Hamburger Menu
    btnHamburger.classList.remove('toogle');
    menu.classList.remove('fade-in');
    menu.classList.add('dis');
    html.classList.remove('no-scroll');
  }
  else { //opens ham
    html.classList.add('no-scroll');
    btnHamburger.classList.add('toogle');
    menu.classList.add('fade-in');
    menu.classList.remove('dis');
  }  
});


const t1 = document.querySelector('#t1');
const t2 = document.querySelector('#t2');
const t3 = document.querySelector('#t3');
t1.addEventListener('click',function(){
    if(document.querySelector('#toogle_menu_1').classList.contains('toogle_menu_1'))
    {
        document.querySelector('#toogle_menu_1').classList.remove('toogle_menu_1');
        t1.classList.add('img');
    }
    else{
        document.querySelector('#toogle_menu_1').classList.add('toogle_menu_1');
        t1.classList.remove('img');
    }
});
t2.addEventListener('click',function(){
    if(document.querySelector('#toogle_menu_2').classList.contains('toogle_menu_2'))
    {
        document.querySelector('#toogle_menu_2').classList.remove('toogle_menu_2');
        t2.classList.add('img');
    }
    else{
        document.querySelector('#toogle_menu_2').classList.add('toogle_menu_2');
        t2.classList.remove('img');
    }
});
t3.addEventListener('click',function(){
    if(document.querySelector('#toogle_menu_3').classList.contains('toogle_menu_3'))
    {
        document.querySelector('#toogle_menu_3').classList.remove('toogle_menu_3');
        t3.classList.add('img');
    }
    else{
        document.querySelector('#toogle_menu_3').classList.add('toogle_menu_3');
        t3.classList.remove('img');
    }
});