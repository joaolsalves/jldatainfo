let vTempoTotalDecorrido = 1;
let eTempoTotalDecorrido = document.getElementById("lbl-tempo-decorrido");
let eTempoExecucao = document.getElementById("id-valor-tempo-execucao");

/* nContador = 0;
nTipo = 'abc'; */

function fnStopAllTimer(){
   pararTimer();
}


function iniciarTimer(nContador, nTipo) {


  const audioContagem = new Audio("\assets\\audio\\audio-alarme-relogio-camelo-edit.mp3");

 return new Promise((resolve) => {

   contador = nContador;

   /* document.getElementById("id-valor-tempo-execucao").textContent = contador; */

   intervalId = setInterval(() => {

     if(contador == 1 ){
           
      clearInterval(intervalId); //Para o timer
       
      vTempoTotalDecorrido = vTempoTotalDecorrido + 1;

      eTempoTotalDecorrido.textContent = fnFormataSegundos(vTempoTotalDecorrido);
       
       
      resolve(); //Retorna a Promisse como OK

      return;

     }

     if( contador > 1 && contador <= 4 && (nTipo == 'descanso' || nTipo == 'preparacao') ) {

      audioContagem.play();

     }

     contador--;

     eTempoExecucao.textContent = contador.toString().padStart(2,'0');

     //vTempoTotalDecorrido = vTempoTotalDecorrido + 1;
     vTempoTotalDecorrido = vTempoTotalDecorrido + 1;

     eTempoTotalDecorrido.textContent = fnFormataSegundos(vTempoTotalDecorrido);

  
   }, 1000);

 }); //Fecha a Promise

}




function pararTimer() {
  
  clearInterval(intervalId);
  ligaBtnPlay();
  desligaBtnStop();

}

function retornarTimer(){

  console.log("Play");
  /* setInterval(1000); */
  /* iniciarTimer(); */
  
    nContador = eTempoExecucao.textContent;
  

  iniciarTimer(nContador, vTipoTimer) 
  console.log("Contador: " + nContador);
  console.log("Tipo timer: " + vTipoTimer.textContent);
  
  ligaBtnStop();
  desligaBtnPlay();


}

function desligaBtnPlay(){

  let btnStop = document.querySelector('#btn-play');
  btnPlay.disabled = true;

  console.log("Botão Start desligado!");

}

function ligaBtnPlay(){

  let btnStart = document.querySelector('#btn-play');
  btnPlay.disabled = false;

  console.log("Botão Start ligado!");

}

function desligaBtnStop(){

  let btnStop = document.querySelector('#btn-stop');
  btnStop.disabled = true;

  console.log("Botão Stop desligado!");

}

function ligaBtnStop(){

  let btnStop = document.querySelector('#btn-stop');
  btnStop.disabled = false;

  console.log("Botão Stop ligado!");

}