
var count = sessionStorage.getItem("#qCount");
var score = 0;
var userName = prompt("Mohon ketik nama kamu", "");

function validateForm(){

  getScore();
  displayScores();
  doSomething();
  checkChecked();
  // hasil();
}

function getScore() {
  score = 0;
  var a = document.forms["Ujian"]["Q1"].value;
  var b = document.forms["Ujian"]["Q2"].value;
  var c = document.forms["Ujian"]["Q3"].value;
  var d = document.forms["Ujian"]["Q4"].value;
  var e = document.forms["Ujian"]["Q5"].value;
    if (a == 'Q13') {
        score++;
    }
    if (b == 'Q22') {
        score++;
    }
    if ( c == 'Q32') {
        score++;
    }
    if (d == 'Q44') {
        score++;
    }
    if (e == 'Q53' ) {
        score++;
    }
return score;
}

function displayScores(){
  $('#submitted').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 3000);
  $('#newScore').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 3000);
document.getElementById("finished").innerHTML = "HASIL= Benar : "+ score + " Salah : " + (5-score);

if (score > 3){
    alert("Selamat kamu LULUS dan masuk kelas UNGGULAN");
  }
  else if (score > 1 && score < 4){
    alert("Selamat kamu LULUS dan masuk kelas UMUM");
  }
  else if (score < 2){
    alert("Maaf kamu TIDAK LULUS, dapat dicoba lagi di ujian masuk periode berikutnya");
  }
return null;
}

function checkChecked(){
  if (count < 5){
    alert("You have missed a question(s)");
  }
  else if (count == 5){
    sessionStorage.setItem("#qCount",'5');
  }
  return null;
}

// function hasil(){
//   if (score < 3){
//     alert("Selamat kamu LULUS dan masuk kelas UNGGULAN");
//   }
//   else if (score < 1 && score > 4){
//     alert("Selamat kamu LULUS dan masuk kelas UMUM");
//   }
//   else if (score > 2){
//     alert("Maaf kamu TIDAK LULUS, dapat dicoba lagi di ujian masuk periode berikutnya");
//   }
//   return null;
// }


function doSomething(){
count++;
}
