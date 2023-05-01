// console.log(questions);
let pitanje = document.getElementById("pitanje");
    let odgovor1 = document.getElementById("odgovor1");
    let odgovor2 = document.getElementById("odgovor2");
    let odgovor3 = document.getElementById("odgovor3");
    let odgovor4 = document.getElementById("odgovor4");
    let kojeJePitanjePoRedu = document.getElementById("pitanjePoRedu");
    let btnzanesiguran = document.getElementById("nesiguranBtn");
    let zajednickaklasadogovora = document.querySelectorAll(".odgovor");
    let siguranBtn = document.querySelector("#siguranBtn")


    let currentQuestion = 0;
let score = 0;

console.log(zajednickaklasadogovora)

    let brojac =0;
function shuffle(n){

    for(let i=0;i<n;i++){
    let firstQUestion = Math.floor(Math.random()*questions.length);
    let secondQuestion = Math.floor(Math.random()*questions.length);
    // return firstQUestion, secondQuestion;
    
    let pomocna = questions[firstQUestion];
    questions[firstQUestion] = questions[secondQuestion];
    questions[secondQuestion]= pomocna;
    }
    return questions;
}

function prikazPitanja() {

    pitanje.innerHTML = questions[brojac].question;
    odgovor1.innerHTML = questions[brojac].answers[0];
    odgovor2.innerHTML = questions[brojac].answers[1];
    odgovor3.innerHTML = questions[brojac].answers[2];
    odgovor4.innerHTML = questions[brojac].answers[3];
}
shuffle(10000);
console.log(questions)

prikazPitanja();




// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
zajednickaklasadogovora.forEach(el=>{
  el.onclick = function() {
  modal.style.display = "block";
}
})

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

btnzanesiguran.onclick = function() {
    modal.style.display = "none";
    
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}   

function peto_deseto_petnaesto_pitanje (){
    if(brojac===4 || brojac===9 || brojac===14){
        // document.getElementById("").style.backgroundColor = "red";
        const obavestenje = document.createElement("h5");
        obavestenje.style.textAlign = 'center';
        obavestenje.style.color = ''
        obavestenje.innerText = "Sada ste na "+ (brojac+1) + " pitanju";
        pitanje.appendChild(obavestenje);

    }
}
peto_deseto_petnaesto_pitanje();

function clickNaSiguran(br){
  brojac++;
    prikazPitanja();
    console.log("Trenutno je na pitanju broj " + (br+2) + " od ukupno 15 pitanja.");
    peto_deseto_petnaesto_pitanje();

    modal.style.display = 'none';
    provera_odgovora(); 
    tajmer();
}

function provera_odgovora(){
zajednickaklasadogovora.forEach(el=>{
  el.addEventListener('click',()=>{
   const index = questions[brojac].answers.indexOf(el.innerText);
    console.log(index);
    if(index === questions[brojac].correct_answer){
      score++;
      console.log("uvexan je skor")
    }else{
      console.log("nije se povecao skor");
    }
  })
})  
 
}


//funkcija za tajmer od po 30sekundi koji se za svako pitanje ponovo pokrece

function tajmer(){
  let sekunde = 30;
  let interval = setInterval(()=>{
    document.getElementById("tajmer").innerHTML = sekunde;
    sekunde--;

    if(sekunde === -1){
      clearInterval(interval);
      brojac++;
      prikazPitanja();
      provera_odgovora();
      peto_deseto_petnaesto_pitanje();
      tajmer();
     
    }
    siguranBtn.onclick = function(){
      clearInterval(interval);
      brojac++; 
      clickNaSiguran();
        
    }
  },1000)
}
tajmer();



