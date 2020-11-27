'use strict';

var mirahqbtn = document.getElementById('btnMirahq');
var polusbtn = document.getElementById('btnPolus');
var theskeldbtn = document.getElementById('btnTheskeld');
var mirahq = document.getElementById('mirahq');
var polus = document.getElementById('polus');
var theskeld = document.getElementById('theskeld');
var crewmate1 = document.getElementById('crewmate1');
var crewmate2 = document.getElementById('crewmate2');
var crewmate3 = document.getElementById('crewmate3');
var crewmate4 = document.getElementById('crewmate4');
var crewmate5 = document.getElementById('crewmate5');
var crewmate6 = document.getElementById('crewmate6');
var crewmate7 = document.getElementById('crewmate7');
var crewmate8 = document.getElementById('crewmate8');
var crewmate9 = document.getElementById('crewmate9');
var crewmate10 = document.getElementById('crewmate10');
var crewmate11 = document.getElementById('crewmate11');
var crewmate12 = document.getElementById('crewmate12');
var corpse1 = document.getElementById('corpse1');
var corpse2 = document.getElementById('corpse2');
var corpse3 = document.getElementById('corpse3');
var corpse4 = document.getElementById('corpse4');
var moving = false;

polusbtn.addEventListener("click", function() {
 mirahq.style.display = "none";
 theskeld.style.display = "none";
 polus.style.display = "block";
});

mirahqbtn.addEventListener("click", function() {
    mirahq.style.display = "block";
    theskeld.style.display = "none";
    polus.style.display = "none";
   });


theskeldbtn.addEventListener("click", function() {
    mirahq.style.display = "none";
    theskeld.style.display = "block";
    polus.style.display = "none";
   });




function imageMove (crewmate){
crewmate.addEventListener("mousedown", initialClick, false);

function move(e){

var newX = e.clientX - 10;
var newY = e.clientY - 10;

crewmate.style.left = newX + "px";
crewmate.style.top = newY + "px";

  
}

function initialClick(e) {

  if(moving){
    document.removeEventListener("mousemove", move);
    moving = !moving;
    return;
  }
  
moving = !moving;
document.addEventListener("mousemove", move, false);

}
}

imageMove(crewmate1);
imageMove(crewmate2);
imageMove(crewmate3);
imageMove(crewmate4);
imageMove(crewmate5);
imageMove(crewmate6);
imageMove(crewmate7);
imageMove(crewmate8);
imageMove(crewmate9);
imageMove(crewmate10);
imageMove(crewmate11);
imageMove(crewmate12);
imageMove(corpse1);
imageMove(corpse2);
imageMove(corpse3);
imageMove(corpse4);


// particlesJS.load(@dom-id, @path-json, @callback (optional));
// particlesJS.load('particles-js', 'assets/particles.json', function() {
//     console.log('callback - particles.js config loaded');
//   });



  