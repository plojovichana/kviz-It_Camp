// console.log(questions);
let pitanje = document.getElementById("pitanje");
    let odgovor1 = document.getElementById("odgovor1");
    let odgovor2 = document.getElementById("odgovor2");
    let odgovor3 = document.getElementById("odgovor3");
    let odgovor4 = document.getElementById("odgovor4");
    let kojeJePitanjePoRedu = document.getElementById("pitanjePoRedu");




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
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}   

function peto_deseto_petnaesto_pitanje (){
    if(brojac===5 || brojac===10 || brojac===15){
        document.getElementById("myBtn").style.background = "red";
    }
}

//  function kojeJePitanjePoRedu(){
//         if(brojac===0){
//             kojeJePitanjePoRedu.innerHTML = "Prvo pitanje";
//         }
//         else if(brojac===5){
//             kojeJePitanjePoRedu.innerHTML = "Šesto pitanje";
//         }
//         else if(brojac===10){
//             kojeJePitanjePoRedu.innerHTML = "Jedanaesto pitanje";
//         }
//         else if(brojac===15){
//             kojeJePitanjePoRedu.innerHTML = "Šesnaesto pitanje";
//         }
//         else if(brojac===20){
//             kojeJePitanjePoRedu.innerHTML = "Zadnje pitanje";
//         }
//         else{
//             kojeJePitanjePoRedu.innerHTML = "Pitanje broj " + (brojac+1);
//         }
//     }


// kojeJePitanjePoRedu();