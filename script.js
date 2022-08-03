let stunden=document.querySelector('.stunde')
let minuten=document.querySelector('.minute')
let sekunden=document.querySelector('.sekunde')
let ampm=document.querySelector('.pmam');
let child=ampm.querySelector('span')
function temps(){
   let a=new Date();
    stunden.innerHTML= a.getHours();
    minuten.innerHTML=a.getMinutes();
    sekunden.innerHTML=a.getSeconds();
    stunden.innerHTML<10? stunden.innerHTML="0" + stunden.innerHTML:"";
    minuten.innerHTML<10? minuten.innerHTML="0" + minuten.innerHTML:"";
    sekunden.innerHTML<10? sekunden.innerHTML="0" + sekunden.innerHTML:"";
    setTimeout( temps, 1000);
    (a.getHours())>12? child.innerHTML="pm":child.innerHTML="am";
}
temps();
