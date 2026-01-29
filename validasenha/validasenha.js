
//Regras:
    
    //Regra 1: Mínimo de 8 caracteres
    //Regra 2: Mínimo 1 especial
    //Regra 3: Mínimo um número
    //Regra 4: Não pode conter caracteres repetidos
    //Regra 5: Confirmar se os dois valores são iguais
    vScore = 0;

function fnValidaSenha(){

    //Pegar a senha preenchida
    vSenha = document.getElementById("idSenha").value;

    console.log("Senha: " + vSenha);
    console.log("Caracteres: " + vSenha.length);

    //Limpo a mensagem
    fnLimpaMensagem()
    vScore = 0;

    //Executar as regras
    fnRegra1();
    fnRegra2();
    fnRegra3();
    fnRegra4();
    fnRegra5();

    iniciarProgresso()

    console.log("Score: " + vScore);

}

function fnRegra1(){
    
    vTamanhoSenha = 8;

    console.log('Tamnho mínimo: ' + vTamanhoSenha);

    if(vSenha.length >= vTamanhoSenha){

        fnSomaScore();

    }else{
        //Mensagem informando a crítica
        fnMensagem("Senha deve ter no mínimo " + vTamanhoSenha + " caracteres!");
    }
}

function fnRegra2(){

    vQtdCaractEspecial = contarCaracteresEspeciais(vSenha);

    if (vQtdCaractEspecial > 0){
        fnSomaScore();
    }else{
        fnMensagem("Senha deve ter ao menos um caractere especial");
    }
}

function fnRegra3(){

    vQtdNumeros = contarNumeros(vSenha);

    if (vQtdNumeros > 0){
        fnSomaScore();
    }else{
        fnMensagem("Senha deve ter ao menos um número");
    }
}

function fnRegra4(){

    vQtdCaractRepetidos = contarCaracteresRepetidos(vSenha);

    console.log("typeof: " + typeof vQtdCaractRepetidos); 
    if (vQtdCaractRepetidos == 0){ 
        fnSomaScore(); 
    }else{
        fnMensagem("Senha não deve ter caracteres repetidos");
    }

}

function fnRegra5(){

    vSenha1 = document.getElementById("idSenha").value;
    vSenha2 = document.getElementById("idSenhaConfirmacao").value;

    if(vSenha1 === vSenha2){
        fnSomaScore(); 
    }else{
        fnMensagem("Senhas não conferem, favor repetir a anterior");
    }

}

function fnMensagem(vMensagem){
    idMensagem.innerHTML = vMensagem;
}

function fnLimpaMensagem(){
    idMensagem.innerHTML = '';
}

function fnSomaScore(){
    vScore = vScore + 20;
}

function contarCaracteresEspeciais(texto) {
    var caracteresEspeciais = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|"'`=\/\s]/g; // Expressão regular para caracteres especiais
    var correspondencias = texto.match(caracteresEspeciais); // Encontra correspondências na string
  
    if (correspondencias) {
      return correspondencias.length; // Retorna o número de correspondências encontradas
    } else {
      return 0; // Retorna 0 se não houver correspondências
    }
  }

  function contarNumeros(texto) {
    var numerosEncontrados = texto.match(/\d+/g); // Expressão regular para encontrar números
    if (numerosEncontrados) {
      return numerosEncontrados.length; // Retorna o número de números encontrados
    } else {
      return 0; // Retorna 0 se nenhum número for encontrado
    }
  }

  function contarCaracteresRepetidos(texto) {
    var ocorrencias = {};
  
    // Loop pela string e contagem de ocorrências de cada caractere
    for (var i = 0; i < texto.length; i++) {
      var caractere = texto[i];
      if (ocorrencias[caractere]) {
        ocorrencias[caractere]++;
      } else {
        ocorrencias[caractere] = 1;
      }
    }
  
    // Contagem de caracteres repetidos
    var caracteresRepetidos = 0;
    for (var chave in ocorrencias) {
      if (ocorrencias[chave] > 1) {
        caracteresRepetidos++;
      }
    }
  
    return caracteresRepetidos;
  }

  function iniciarProgresso() {
    var progressBar = document.getElementById("myProgressBar");
    var largura = 0;
    var intervalo = setInterval(function() {
      if (largura >= vScore) {
        clearInterval(intervalo);
      } else {
        largura++;
        progressBar.style.width = largura + "%";
        progressBar.innerHTML = largura + "%";
      }
    }, 10);
  }