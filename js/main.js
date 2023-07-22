/********** Variaveis da página I **********/
var page1=document.querySelector('.page1');
var btn_comecar=document.querySelector('.btn-comecar');

/********** Variaveis da página II **********/
var page2=document.querySelector('.page2');

/***** Perguntas *****/
var question=document.querySelector('.question');
var ask=document.querySelector('.ask');

/***** Botões *****/
var btn_confirmar=document.querySelector('.btn-confirmar');
var btn_proxima=document.querySelector('.btn-proxima');
btn_proxima.style.visibility='hidden';

/***** Arrey das opções de respostas *****/
var radio=document.querySelectorAll('.radio');

/***** Opções de respostas *****/
var a=document.querySelector('.a');
var b=document.querySelector('.b');
var c=document.querySelector('.c');
var d=document.querySelector('.d');

/***** Vidas *****/
var vidas=document.querySelector('.vidas');
var contador_vidas=3;

/***** Outros *****/
var radio_option=document.querySelectorAll('.radio-option');

/********** Página da derrota **********/
function loser() {
    location.href="loser.html";
}

/********** Página da vitória **********/
function winner() {
    location.href="winner.html";
}


/********** I N I C I O **********/
btn_comecar.onclick=()=> {
    page1.style.display='none';
    page2.style.display='grid';
    /***************** Question I *****************/
    question.innerHTML='Questão 1';
    ask.innerHTML='Qual desses não teve o seu nome mudado na Bíblia?';
    vidas.innerHTML=contador_vidas;
    a.innerHTML='Pedro';
    b.innerHTML='Abraão';
    c.innerHTML='Jacó';
    d.innerHTML='Davi';

    btn_confirmar.onclick=()=> {
        if(contador_vidas>0) {
            if(radio[3].checked) {
                btn_proxima.style.visibility='visible';
                radio_option[3].style.background='linear-gradient(#5FD068,#125B50)';
                d.style.color='white';
            }
            else {
                for (var i=0; i<radio_option.length; i++) {
                    if(radio[i].checked) {
                        radio_option[i].style.background='linear-gradient(#E64848,#C21010)';
                        contador_vidas--;
                    }
                }
            }
            if (contador_vidas==0) {
                loser();
            }
        }
        vidas.innerHTML=contador_vidas;
    }
    btn_proxima.onclick=()=> {
    /***************** Question II *****************/
        question.innerHTML='Questão 2';
        ask.innerHTML='Quem eram os dois irmãos de Moisés?';
        vidas.innerHTML=contador_vidas;
        a.innerHTML='Esaú e Jacó';
        b.innerHTML='Miriã e Arão';
        c.innerHTML='Josué e Calebe';
        d.innerHTML='Priscila e Áquila';
        /***** Reset Formato da questão anterior *****/
        btn_proxima.style.visibility='hidden';
        radio_option[0].style.background='linear-gradient(#FAE392,#F1C93B)';
        radio_option[1].style.background='linear-gradient(#FAE392,#F1C93B)';
        radio_option[2].style.background='linear-gradient(#FAE392,#F1C93B)';
        radio_option[3].style.background='linear-gradient(#FAE392,#F1C93B)';
        a.style.color='#1e65d6';
        b.style.color='#1e65d6';
        c.style.color='#1e65d6';
        d.style.color='#1e65d6';
        /***** Loop Question *****/
        btn_confirmar.onclick=()=> {
            if(contador_vidas>0) {
                if(radio[1].checked) {
                    btn_proxima.style.visibility='visible';
                    radio_option[1].style.background='linear-gradient(#5FD068,#125B50)';
                    b.style.color='white';
                }
                else {
                    for (let i=0; i<radio_option.length; i++) {
                        if(radio[i].checked) {
                            radio_option[i].style.background='linear-gradient(#E64848,#C21010)';
                            contador_vidas--;
                        }
                    }
                }
                if (contador_vidas==0) {
                    loser();
                }
            }
            vidas.innerHTML=contador_vidas;
        }
        btn_proxima.onclick=()=> {
        /***************** Question III *****************/
            question.innerHTML='Questão 3';
            ask.innerHTML='Qual mulher foi tida por bêbada enquanto orava pedindo um filho ao Senhor?';
            vidas.innerHTML=contador_vidas;
            a.innerHTML='Raquel';
            b.innerHTML='Ana';
            c.innerHTML='Abigail';
            d.innerHTML='Sara';
            /***** Reset Formato da questão anterior *****/
            btn_proxima.style.visibility='hidden';
            radio_option[0].style.background='linear-gradient(#FAE392,#F1C93B)';
            radio_option[1].style.background='linear-gradient(#FAE392,#F1C93B)';
            radio_option[2].style.background='linear-gradient(#FAE392,#F1C93B)';
            radio_option[3].style.background='linear-gradient(#FAE392,#F1C93B)';
            a.style.color='#1e65d6';
            b.style.color='#1e65d6';
            c.style.color='#1e65d6';
            d.style.color='#1e65d6';
            /***** Loop Question *****/
            btn_confirmar.onclick=()=> {
                if(contador_vidas>0) {
                    if(radio[1].checked) {
                        btn_proxima.style.visibility='visible';
                        radio_option[1].style.background='linear-gradient(#5FD068,#125B50)';
                        b.style.color='white';
                    }
                    else {
                        for (let i=0; i<radio_option.length; i++) {
                            if(radio[i].checked) {
                                radio_option[i].style.background='linear-gradient(#E64848,#C21010)';
                                contador_vidas--;
                            }
                        }
                    }
                    if (contador_vidas==0) {
                        loser();
                    }
                }
                vidas.innerHTML=contador_vidas;
            }
            btn_proxima.onclick=()=> {
            /***************** Question IV *****************/
                question.innerHTML='Questão 4';
                ask.innerHTML='Qual o nome da ilha onde João escreveu o livro de Apocalipse?';
                vidas.innerHTML=contador_vidas;
                a.innerHTML='Ilha de Patmos';
                b.innerHTML='Ilha de Pérgamo';
                c.innerHTML='Ilha de Creta';
                d.innerHTML='Ilha de Malta';
                /***** Reset Formato da questão anterior *****/
                btn_proxima.style.visibility='hidden';
                radio_option[0].style.background='linear-gradient(#FAE392,#F1C93B)';
                radio_option[1].style.background='linear-gradient(#FAE392,#F1C93B)';
                radio_option[2].style.background='linear-gradient(#FAE392,#F1C93B)';
                radio_option[3].style.background='linear-gradient(#FAE392,#F1C93B)';
                a.style.color='#1e65d6';
                b.style.color='#1e65d6';
                c.style.color='#1e65d6';
                d.style.color='#1e65d6';
                /***** Loop Question *****/
                btn_confirmar.onclick=()=> {
                    if(contador_vidas>0) {
                        if(radio[0].checked) {
                            btn_proxima.style.visibility='visible';
                            radio_option[0].style.background='linear-gradient(#5FD068,#125B50)';
                            a.style.color='white';
                        }
                        else {
                            for (let i=0; i<radio_option.length; i++) {
                                if(radio[i].checked) {
                                    radio_option[i].style.background='linear-gradient(#E64848,#C21010)';
                                    contador_vidas--;
                                }
                            }
                        }
                        if (contador_vidas==0) {
                            loser();
                        }
                    }
                    vidas.innerHTML=contador_vidas;
                }
                btn_proxima.onclick=()=> {
                /***************** Question V *****************/
                    question.innerHTML='Questão 5';
                    ask.innerHTML='Qual o nome da cidade fundada por Caim, depois que saiu da presença de Deus?';
                    vidas.innerHTML=contador_vidas;
                    a.innerHTML='Canaã';
                    b.innerHTML='Sodoma';
                    c.innerHTML='Gomorra';
                    d.innerHTML='Enoque';
                    /***** Reset Formato da questão anterior *****/
                    btn_proxima.style.visibility='hidden';
                    radio_option[0].style.background='linear-gradient(#FAE392,#F1C93B)';
                    radio_option[1].style.background='linear-gradient(#FAE392,#F1C93B)';
                    radio_option[2].style.background='linear-gradient(#FAE392,#F1C93B)';
                    radio_option[3].style.background='linear-gradient(#FAE392,#F1C93B)';
                    a.style.color='#1e65d6';
                    b.style.color='#1e65d6';
                    c.style.color='#1e65d6';
                    d.style.color='#1e65d6';
                    /***** Loop Question *****/
                    btn_confirmar.onclick=()=> {
                        if(contador_vidas>0) {
                            if(radio[3].checked) {
                                btn_proxima.style.visibility='visible';
                                radio_option[3].style.background='linear-gradient(#5FD068,#125B50)';
                                d.style.color='white';
                            }
                            else {
                                for (let i=0; i<radio_option.length; i++) {
                                    if(radio[i].checked) {
                                        radio_option[i].style.background='linear-gradient(#E64848,#C21010)';
                                        contador_vidas--;
                                    }
                                }
                            }
                            if (contador_vidas==0) {
                                loser();
                            }
                        }
                        vidas.innerHTML=contador_vidas;
                    }
                    btn_proxima.onclick=()=> {
                    /***************** Question VI *****************/
                        question.innerHTML='Questão 6';
                        ask.innerHTML='Com que idade Jesus começou seu ministério?';
                        vidas.innerHTML=contador_vidas;
                        a.innerHTML='Com 12 anos';
                        b.innerHTML='Com 29 anos';
                        c.innerHTML='Com 30 anos';
                        d.innerHTML='Com 33 anos';
                        /***** Reset Formato da questão anterior *****/
                        btn_proxima.style.visibility='hidden';
                        radio_option[0].style.background='linear-gradient(#FAE392,#F1C93B)';
                        radio_option[1].style.background='linear-gradient(#FAE392,#F1C93B)';
                        radio_option[2].style.background='linear-gradient(#FAE392,#F1C93B)';
                        radio_option[3].style.background='linear-gradient(#FAE392,#F1C93B)';
                        a.style.color='#1e65d6';
                        b.style.color='#1e65d6';
                        c.style.color='#1e65d6';
                        d.style.color='#1e65d6';
                        /***** Loop Question *****/
                        btn_confirmar.onclick=()=> {
                            if(contador_vidas>0) {
                                if(radio[2].checked) {
                                    btn_proxima.style.visibility='visible';
                                    radio_option[2].style.background='linear-gradient(#5FD068,#125B50)';
                                    c.style.color='white';
                                }
                                else {
                                    for (let i=0; i<radio_option.length; i++) {
                                        if(radio[i].checked) {
                                            radio_option[i].style.background='linear-gradient(#E64848,#C21010)';
                                            contador_vidas--;
                                        }
                                    }
                                }
                                if (contador_vidas==0) {
                                    loser();
                                }
                            }
                            vidas.innerHTML=contador_vidas;
                        }
                        btn_proxima.onclick=()=> {
                        /***************** Question VII *****************/
                            question.innerHTML='Questão 7';
                            ask.innerHTML='Qual destes livros NÃO foi escrito pelo apóstolo Paulo?';
                            vidas.innerHTML=contador_vidas;
                            a.innerHTML='Tito';
                            b.innerHTML='Tiago';
                            c.innerHTML='Romanos';
                            d.innerHTML='Filemon';
                            /***** Reset Formato da questão anterior *****/
                            btn_proxima.style.visibility='hidden';
                            radio_option[0].style.background='linear-gradient(#FAE392,#F1C93B)';
                            radio_option[1].style.background='linear-gradient(#FAE392,#F1C93B)';
                            radio_option[2].style.background='linear-gradient(#FAE392,#F1C93B)';
                            radio_option[3].style.background='linear-gradient(#FAE392,#F1C93B)';
                            a.style.color='#1e65d6';
                            b.style.color='#1e65d6';
                            c.style.color='#1e65d6';
                            d.style.color='#1e65d6';
                            /***** Loop Question *****/
                            btn_confirmar.onclick=()=> {
                                if(contador_vidas>0) {
                                    if(radio[1].checked) {
                                        btn_proxima.style.visibility='visible';
                                        radio_option[1].style.background='linear-gradient(#5FD068,#125B50)';
                                        b.style.color='white';
                                    }
                                    else {
                                        for (let i=0; i<radio_option.length; i++) {
                                            if(radio[i].checked) {
                                                radio_option[i].style.background='linear-gradient(#E64848,#C21010)';
                                                contador_vidas--;
                                            }
                                        }
                                    }
                                    if (contador_vidas==0) {
                                        loser();
                                    }
                                }
                                vidas.innerHTML=contador_vidas;
                                
                            }
                            btn_proxima.onclick=()=> {
                                winner();
                            }
                        }
                    }
                }
            }
        }
    }
}