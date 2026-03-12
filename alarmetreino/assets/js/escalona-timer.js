
async function fnEscalonaTimer(){

    let cTempoPreparacao = document.getElementById("id-lbl-tempo-preparacao").textContent;
    let cTempoExercicio  = document.getElementById("id-lbl-tempo-exercicio").textContent;
    let cTempoDescanso   = document.getElementById("id-lbl-tempo-descanso").textContent;
    let cQtdRepeticoes   = document.getElementById("id-lbl-qtd-repeticoes").textContent;
    let eTempoExecucao   = document.getElementById("id-valor-tempo-execucao");
    
    let btnStop = document.querySelector('#btn-stop');

    let vVoltaAtual = document.getElementById("id-lbl-volta-atual");

    const audioPreparacao = new Audio("\assets\\audio\\audio-relogio-tic-tac.mp3");
    const audioInicioExercício = new Audio("\assets\\audio\\audio-sino-3-toques-edit.mp3");
    const audioFimExercício = new Audio("\assets\\audio\\audio-sino-2-toques-edit.mp3");
    const audioFimTreino = new Audio("\assets\\audio\\audio-apito-longo-edit.mp3");
    
    vTempoTotalDecorrido = 0;
    eTempoTotalDecorrido.textContent = fnFormataSegundos(0);


    /* Mudar o título do contador para o tipo de contador(Preparação) */
    vTipoTimer = document.getElementById("id-texto-tempo-execucao");

    /* Exibe o timer com base no tempo de preparação */
    let vTempoDecorrido = document.getElementById("id-valor-tempo-execucao");
    vTempoDecorrido.textContent = cTempoPreparacao.toString().padStart(2,'0');

    //Limpar variáveis populadas de outras execuções
    vVoltaAtual.textContent = '01';
    btnStop.disabled = false;

    
    /* Alerta Preparação */
    //audioPreparacao.play();
    //audioPreparacao.

    
    //Desabilito o botão "Play"
    var btnPlay = document.querySelector('#btn-play');
    btnPlay.disabled = true;

    /* Executar timer da preparação */

    vTipoTimer.textContent = 'Preparação';

    await iniciarTimer(cTempoPreparacao, 'preparacao');
        

    //Tratar as voltas

    var vVolta = 0;
    

    for (let i = cQtdRepeticoes; i > 0; i-- ) {

        eTempoExecucao.textContent = cTempoExercicio.toString().padStart(2,'0');

        vVolta = vVolta + 1;

        vVoltaAtual.textContent = vVolta.toString().padStart(2, "0");

        cQtdRepeticoes --;
        
        //Alerta início exercício
        audioInicioExercício.play();

        /* Mudar o título do contador para o tipo de contador(Exercício) */
        vTipoTimer.textContent = 'Exercício';

        // Iniciar o exercício
        await iniciarTimer(cTempoExercicio);

        //Iniciar o descanso, se não for a última volta
        if (cQtdRepeticoes > 0){

            eTempoExecucao.textContent = cTempoDescanso.toString().padStart(2,'0');

            /* Mudar o título do contador para o tipo de contador(Exercício) */
            vTipoTimer.textContent = 'Descanso';

            //Validar última volta para não alertar fim de exercício e sim alertar fim do treino.
            audioFimExercício.play();

            // Iniciar o descanso
            await iniciarTimer(cTempoDescanso, 'descanso');

            //console.log("Volta atual: " + vVoltaAtual + ", Qtd repetições: " + cQtdRepeticoes );
        } 

       
    }

    //Alerta para o fim do exercício
    audioFimTreino.play();

    //Mudar o rótulo para fim de treino
    vTipoTimer.textContent = 'Finalizado';

    eTempoExecucao.textContent = '00';
    

}

function fnStartTimer(){
    timerInterval = setInterval(incrementTimer, 1000);
}

