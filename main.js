
//let name = 
//prompt('    Please Enter Your Name')


function opennav(){
  document.querySelector('nav').style.width = '44vw';
  let x = document.querySelectorAll('section');
  
 }
 

function closenav(){
    document.querySelector('nav').style.width = '0px';


}

let d = new Date();

let hour = d.getHours();



let houreve = [
  18,19,20,16,17
  ]
let hournoon = [
  12,13,14,15
  ]
 let hournight = [
   23,24,22,21
   ]
  let hourmor = [
    1,2,3,4,5,6,7,8,9,10,11,12
    ]

let bolmor = hourmor.includes(hour)
let bolnoon = hournoon.includes(hour)
let boleve = houreve.includes(hour)
let bolnight = hournight.includes(hour)
if(bolmor){
  document.getElementById('grttxt').innerHTML = 'Good morning'

}

if(bolnoon == true){
  document.getElementById('grttxt').innerHTML = 'Good Afternoon'

}

if(boleve == true){
    document.getElementById('grttxt').innerHTML = 'Good Evening'

}

if(bolnight){
  document.getElementById('grttxt').innerHTML   ='Good night'

}


if (name != null){
document.getElementById('coretxt').innerHTML = 'What would you like to learn today ' + name + '?';

  document.getElementById('grttxt').innerHTML   += ' ' + name

}