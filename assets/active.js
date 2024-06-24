const menuLanjut = document.querySelector('#button span');
const nav = document.querySelector('nav ul');
menuLanjut.addEventListener('click', function(){
    nav.classList.toggle('swipe')
})
const sejarah = document.querySelector('#nav1')
const sejarahTarget = document.querySelector('.geserManual')
sejarah.addEventListener('click', function (){
    sejarahTarget.scrollIntoView({
        behavior: "smooth",
    });
});
const menuUnggul = document.querySelector('#nav2')
const menuUnggulTarget = document.querySelector('.menu')
menuUnggul.addEventListener('click', function(){
    menuUnggulTarget.scrollIntoView({
        behavior: "smooth",
    });
});
const tentang = document.querySelector('#nav3')
const tentangTarget = document.querySelector('#foot')
tentang.addEventListener('click', function(){
    tentangTarget.scrollIntoView({
        behavior: "smooth",
    });
});
let hitungan = 1;
setInterval(function(){
  document.getElementById('radio' + hitungan).checked = true;
  hitungan++;
  if(hitungan > 4){
    hitungan = 1;
  }
}, 3000);
