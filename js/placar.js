// var t1=0, t2=0, srcImg1T1, srcImg2T1, srcImg1T2, srcImg2T2;

// var $botaoMaisTime1 = document.querySelector('#btn-mais-time1');
// var $botaoMaisTime2 = document.querySelector('#btn-mais-time2');

// var $botaoMenosTime1 = document.querySelector('#btn-menos-time1');
// var $botaoMenosTime2 = document.querySelector('#btn-menos-time2');

// var $img1Time1 = document.querySelector('#img1-time1');
// var $img2Time1 = document.querySelector('#img2-time1');

// var $img1Time2 = document.querySelector('#img1-time2');
// var $img2Time2 = document.querySelector('#img2-time2');

// $botaoMaisTime1.addEventListener('click',function() {
//     (t1 < 100) ? t1++ : t1;
//     setPontuacaoTime1(t1);
// });

// $botaoMaisTime2.addEventListener('click',function() {
//     (t2 < 100) ? t2++ : t2;
//     setPontuacaoTime2(t2);
// });

// $botaoMenosTime1.addEventListener('click',function() {
//     (t1 > -1) ? t1-- : t1;
//     setPontuacaoTime1(t1);
// });

// $botaoMenosTime2.addEventListener('click',function() {
//     (t2 > -1) ? t2-- : t2;
//     setPontuacaoTime2(t2);
// });

// function setPontuacaoTime1(x) {
//     if ((x > 99) || (x < 0)) {
//         srcImg1T1='none.png';
//         srcImg2T1='none.png';
//     } else {
//         srcImg1T1 = (x % 10) + '.png';
//         srcImg2T1 = (Math.floor(x / 10)) + '.png';
//     }
//     $img1Time1.setAttribute('src', './img/' + srcImg1T1);
//     $img2Time1.setAttribute('src', './img/' + srcImg2T1);
// }

// function setPontuacaoTime2(x) {
//     if ((x > 99) || (x < 0)) {
//         srcImg1T2='none.png';
//         srcImg2T2='none.png';
//     } else {
//         srcImg1T2 = (x % 10) + '.png';
//         srcImg2T2 = (Math.floor(x / 10)) + '.png';
//     }
//     $img1Time2.setAttribute('src', './img/' + srcImg1T2);
//     $img2Time2.setAttribute('src', './img/' + srcImg2T2);
// }

var pontos1 = 0;
var pontos2 = 0;

var nomePlayer1 = document.querySelector("#jogador1");
var nomePlayer2 = document.querySelector("#jogador2");

var labelP1 = document.querySelector("#labelJodador1");
var labelP2 = document.querySelector("#labelJodador2");

nomePlayer1.addEventListener("keyup", function () {
  labelP1.innerHTML = nomePlayer1.value;
});
nomePlayer2.addEventListener("keyup", function () {
  labelP2.innerHTML = nomePlayer2.value;
});

var botoes = document.querySelectorAll(".balls");

function AddPoint(p, pontuacao) {
  if(p == "p2"){
    pontos2 += pontuacao;
    document.querySelector("#pontuacaoP2").innerHTML = pontos2;
  }else{
    pontos1 += pontuacao;
    document.querySelector("#pontuacaoP1").innerHTML = pontos1;
  }
}
function SubPoint(p, pontuacao) {
  if(p == "p2"){
    if(pontos2 > 0){
      pontos2 -= pontuacao;
      document.querySelector("#pontuacaoP2").innerHTML = pontos2;
    }
  }else{
    if(pontos1 > 0){
      pontos1 -= pontuacao;
      document.querySelector("#pontuacaoP1").innerHTML = pontos1;
    }
  }
}


// function pontuacaoUm(pontuacao) {
//   if (pontuacao === "p11") {
//     pontos1 += 1;
//   }

//   if (pontuacao === "p12") {
//     pontos1 += 2;
//   }

//   if (pontuacao === "p13") {
//     pontos1 += 3;
//   }

//   if (pontuacao === "p14") {
//     pontos1 += 4;
//   }
//   if (pontuacao === "p15") {
//     pontos1 += 5;
//   }
//   if (pontuacao === "p16") {
//     pontos1 += 6;
//   }

//   if (pontuacao === "p17") {
//     pontos1 += 7;
//   }

//   document.querySelector("#pontuacaoP1").innerHTML = pontos1;
// }

// function pontuacaoDois(pontuacao) {
//   if (pontuacao === "p21") {
//     pontos2 += 1;
//   }

//   if (pontuacao === "p22") {
//     pontos2 += 2;
//   }

//   if (pontuacao === "p23") {
//     pontos2 += 3;
//   }

//   if (pontuacao === "p24") {
//     pontos2 += 4;
//   }
//   if (pontuacao === "p25") {
//     pontos2 += 5;
//   }
//   if (pontuacao === "p26") {
//     pontos2 += 6;
//   }

//   if (pontuacao === "p27") {
//     pontos2 += 7;
//   }

//   document.querySelector("#pontuacaoP1").innerHTML = pontos1;
//   document.querySelector("#pontuacaoP2").innerHTML = pontos2;
// }

function zerar() {
  pontos1 = 0;
  pontos2 = 0;

  document.querySelector("#pontuacaoP1").innerHTML = pontos1;
  document.querySelector("#pontuacaoP2").innerHTML = pontos2;
}
