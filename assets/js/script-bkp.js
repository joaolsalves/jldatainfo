    function verIdioma(){

        elemento = navigator.language

        console.log(elemento);
    }

    function changetoEn(nomeDaClasse) {

    const elementoBr = document.querySelector('.meuTitulo .cl-titulo-ptbr');

    if(elementoBr){
        elementoBr.remove();
    }


    const elemento = document.querySelector('.meuTitulo .cl-titulo-en');

    if (elemento) {
        console.log("Elemento encontrado!");



    } else {
        console.log("Elemento não encontrado!");

        eTitleEn = document.createElement('h1');

        eTitleEn.id = 'id-titulo';
        eTitleEn.className = 'cl-titulo-en';
        eTitleEn.textContent = 'Welcome to HTML Test';


        document.querySelector('.meuTitulo').appendChild(eTitleEn);

    }

}

function changetoPtBr(nomeDaClasse) {

    const elementoEn = document.querySelector('.meuTitulo .cl-titulo-en');

    if(elementoEn){
        elementoEn.remove();
    }

    const elemento = document.querySelector('.meuTitulo .cl-titulo-ptbr');

    if (elemento) {
        console.log("Elemento encontrado!");

    } else {
        console.log("Elemento não encontrado!");

        eTitleEn = document.createElement('h1');

        eTitleEn.id = 'id-titulo';
        eTitleEn.className = 'cl-titulo-ptbr';
        eTitleEn.textContent = 'Bem-vindo ao Teste de HTML';


        document.querySelector('.meuTitulo').appendChild(eTitleEn);
    }

}