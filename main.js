let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river= document.getElementById('river');
let boat = document.getElementById('boat');
let mountains7 = document.getElementById('mountains7');
let noviel=document.querySelector('.noviel');

window.onscroll = function(){
    let value= scrollY;
    stars.style.left=value + 'px';
    moon.style.top=value * 4 +'px';
    mountains3.style.top =value *2 + 'px';
    mountains4.style.top=value*1.5 +'px';
    river.style.top=value+'px';
    boat.style.top=value +'px';
    boat.style.left=value* 3 +'px';
    noviel.style.fontSize= value +'px';
    if(scrollY >= 70){
        noviel.style.fontSize=70 + 'px';
        noviel.style.position='fixed';
        if(scrollY >=486){
            noviel.style.display = 'none';
        }
        else
            noviel.style.display = 'block';
        }
    if(scrollY >=127){
        document.querySelector('.main').style.background= 'linear-gradient(rgb(58 95 168), rgb(28 32 41))'
    }
   else
   document.querySelector('.main').style.background= 'linear-gradient(rgb(44, 1, 44),rgb(93, 3, 93))'

}
