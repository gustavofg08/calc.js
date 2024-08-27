<!DOCTYPE html>
<html>
    <head>
        <title>Calculadora de taxa</title>
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, width=device-width, user-scalable=no">
        <link href="http://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
        <link href="https://fonts.cdnfonts.com/css/pocket-calculator" rel="stylesheet">
        <link href="https://fonts.cdnfonts.com/css/nasalization-2" rel="stylesheet">
        <link href="css/style.css" rel="stylesheet">
        <style>
            html {
    font-size: 15px;
    font-family: "Open Sans", sans-serif;
    background: linear-gradient(180deg, #000000, #FFFFFF);
}
 
body {
    background-image: url("https://i.imgur.com/PBhNk5G.gif");/*Adiciona uma imagem de fundo no elemento*/
    background-repeat: no-repeat; /*background-repeat em CSS é usada para repetir a imagem de fundo tanto horizontal quanto verticalmente*/ /*background-attachment determina se aquela posição da imagem é fixa com o viewport, ou se irá rolar juntamente com o seu bloco*/
    background-size: 800px ; /*background-size do CSS especifica o tamanho das imagens de fundo. Com o Cover ocorre o ajusate da imagem o mais largamente possível e mantém sua proporção*/
    margin: 15px, 50px 15px 50px;
}
 
.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
 
#conteudo_titulo {
    background-color : #aaaaaa;
    border-radius : 1em;
    box-shadow: inset 0 0 0.5em #000000;
    margin: auto;
}
 
h1 {
    font-family: 'Nasalization', sans-serif;
    color: #FFFFFF;
    text-align : center;
    padding : 0 5px;
}
 
button {
    transition: .1s ease-out;
}
 
button:hover {
    transform: scale(1.08);
}
 
button:active {
    transform: scale(0.95);
    transform: rotate(5deg);
}
 
#conteudo_astronauta {
    z-index : 1000;
}
 
#astronalta_nao {
    z-index : 2000;
    right:0px;
    position:fixed;
    display : none;
    animation: astronalda-nao 4s alternate;
}
 
@keyframes astronalda-nao {
  0% {
    bottom: -500px;
  }
  50% {
    bottom: 0px;
  }
  100% {
    bottom: -500px;
  }
}
 
.img-astronalta {
    animation: astronalda-espaco 30.5s infinite;
    animation-direction: alternate;
    -webkit-animation-name: astronalda-espaco;
    animation-name: astronalda-espaco;
}
 
@-webkit-keyframes astronalda-espaco {
  0% {
    transform: scale(0.10);
    transform: rotate(-25deg);
    transform: translateX(80vw);
  }
  25% {
    transform: translateX(80vw);
    transform: scale(1);
    transform: rotate(25deg);
  }
  50% {
    transform: scale(0.10);
    transform: rotate(-25deg);
    transform: translateY(30vh) translateX(80vw);
  }
 
  75% {
    transform: translateX(80vw) translateY(30vh);
    transform: scale(1);
    transform: rotate(25deg);
  }
  100% {
    transform: translateY(30vh);
    transform: scale(0.10);
    transform: rotate(-25deg);
  }
}
@keyframes astronalda-espaco {
  0% {
    transform: scale(0.10);
    transform: rotate(-25deg);
    transform: translateX(80vw);
  }
  25% {
    transform: translateX(80vw);
    transform: scale(1);
    transform: rotate(25deg);
  }
  50% {
    transform: scale(0.10);
    transform: rotate(-25deg);
    transform: translateY(30vh) translateX(80vw);
  }
 
  75% {
    transform: translateX(80vw) translateY(30vh);
    transform: scale(1);
    transform: rotate(25deg);
  }
  100% {
    transform: translateY(30vh);
    transform: scale(0.10);
    transform: rotate(-25deg);
  }
}
 
.calculadora-flutuante {
    animation: calculadora-flutuante 4s infinite alternate;
}
 
@keyframes calculadora-flutuante {
  0% {
    transform: scale(1);
    transform: translateY(5px);
  }
  25% {
    transform: scale(0.5);
    transform: translateY(0px);
  }
  75% {
    transform: scale(0.8);
    transform: translateY(5px);
  }
  100% {
    transform: scale(1);
    transform: translateY(0px);
  }
}
 
/* width */
::-webkit-scrollbar {
  width: 0.5em;
  max-height: 0.5em;
}
 
/* Track */
::-webkit-scrollbar-track {
  /*box-shadow: inset 0 0 2px; */
  border-radius: 0.2em;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
  background-color :#f7f842;
  border-radius: 0.2em;
}
 
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  box-shadow: inset 0 0 0.5em #FFF, 0 0 10em #444444
}
 
.neon-titulo {
  animation: neon-titulo 0.7s infinite;
  animation-direction: alternate;
  -webkit-animation-name: neon-titulo;
  animation-name: neon-titulo;
}
 
@-webkit-keyframes neon-titulo {
  0% {
    text-shadow: 0 0 0em #00ff00;
  }
  100% {
    text-shadow: 0 0 0.6em #00ff00;
  }
}
 
@keyframes neon-titulo {
  0% {
    text-shadow: 0 0 0em #00ff00;
  }
  100% {
    text-shadow: 0 0 0.6em #00ff00;
  }
}
 
#conteudo_calculadora {
    display: inline-block;
    width : 440px;
    min-height : 20vh;
    max-width : 80vw;
    padding : 10px;
    border-radius: 0.5em;
    box-shadow: inset 0 0 0.1em #828181, 0 0 0.8em #444444;
    text-align : center;
    background-color : #ffffff;
    margin: 10px;
}
 
#conteudo_visor {
    padding : 5px;
}
 
#fundo_visor {
    color: #cccccc0d;
    font-family: 'Pocket Calculator', sans-serif;
    position: absolute;
    padding: 5px 10px;
    font-size: 60px;
}
 
#visor{
    /*direction: rtl;*/
    text-align : right;
    padding : 0.05em 0.15em;
    width : 95%;
    height : 60px;
    color : #00ff00;
    font-family: 'Pocket Calculator', sans-serif;
    font-size : 60px;
    background-color : #747474;
    border : 1px;
    border-radius: 0.2em;
    box-shadow: inset 0px 0px 3px 3px rgb(0 0 0 / 30%);
    text-shadow: 0 0 0.6em #00ff00;
}
 
#conteudo_numeros {
    padding : 10px 0px;
    float: left;
    text-align: center;
    width : 60%;
}
 
#conteudo_numeros button{
    border : 1px;
    border-radius: 0.2em;
    box-shadow: inset 0 0 0.1em #828181, 0 0 0.2em #444444c4;
    background-color : #f8a542;
    font-size : 40px;
    color : #FFFFFF;
    margin : 5px;
    height: 62px;
    width: 62px;
}
 
#conteudo_operacoes {
    float: left;
    padding : 10px 0px;
    text-align : center;
    width : 20%;
}
 
#conteudo_operacoes button{
    border : 1px;
    border-radius: 0.2em;
    box-shadow: inset 0 0 0.1em #828181, 0 0 0.2em #444444c4;
    background-color : #42b6f8;
    font-size : 40px;
    color : #FFFFFF;
    margin : 5px;
    height: 62px;
    width: 62px;
}
 
#conteudo_acoes {
    float: left;
    padding : 10px 0px;
    text-align : center;
    width : 20%;
}
 
#conteudo_acoes button{
    border : 1px;
    border-radius: 0.2em;
    box-shadow: inset 0 0 0.1em #828181, 0 0 0.2em #444444c4;
    background-color : #f7f842;
    color : #000000;
    margin : 5px;
    width: 62px;
    font-size : 40px;
}
 
#btn_calcular {
    height : 206px;
    letter-spacing: 0.1px;
}
 
#btn_limpar {
    height : 62px;
}
 
#conteudo_logs {
    padding : 10px;
    text-align : left;
    border-radius : 0.2em;
    box-shadow: inset 0 0 0.5em #828181, 0 0 0.5em #444444c4;
    background-color : #000000;
    text-shadow: 0 0 0.6em #00ff00;
    font-size : 25px;
    font-family: 'Pocket Calculator', sans-serif;
    color : #00ff00;
    line-height : 0.1;
    height : 200px;
    margin : auto;
    overflow-y: auto;
    overflow-x : hidden;
}
 
@media screen and (max-width: 800px) {
    #conteudo_numeros button{
        height: 50px;
        width: 50px;
    }
    #conteudo_operacoes button {
        height: 50px;
        width: 50px;
    }
    #conteudo_acoes button{
        width: 50px;
    }
   
    #btn_limpar {
        height : 50px;
    }
   
    #btn_calcular {
        height : 170px;
    }
}

 audio {
  display: flex;
  align-items: end;
  justify-content: end;
 }
        </style>
    </head>
    <body>
      <audio controls>
        <source src="WhatsApp Video 2024-08-27 at 09.40.12.mp3" type="audio/mpeg">
        </audio>
        <div id="conteudo_astronauta">
            <img src="https://i.imgur.com/7uPlLZq.png" class="img-astronalta" id="astronalta_voando" onclick="clicouVegeta();" style="width:200px;float: right;position:absolute;">
            
        </div>
        <div class="container">
            <div id="conteudo_calculadora" class="calculadora-flutuante">
                <div id="conteudo_titulo">
                    <h1 class="neon-titulo">Calculadora de taxa (Haddad aprova 👍)<span style="color:#f7f842"></span></h1>
                </div>
                <div id="conteudo_visor">
                    <input type="text" id="visor"></input>
                </div>
                <div id="conteudo_numeros">
                    <button onclick="adicionarValorVisor(1);">1</button>
                    <button onclick="adicionarValorVisor(2);">2</button>
                    <button onclick="adicionarValorVisor(3);">3</button>
                    <button onclick="adicionarValorVisor(4);">4</button>
                    <button onclick="adicionarValorVisor(5);">5</button>
                    <button onclick="adicionarValorVisor(6);">6</button>
                    <button onclick="adicionarValorVisor(7);">7</button>
                    <button onclick="adicionarValorVisor(8);">8</button>
                    <button onclick="adicionarValorVisor(9);">9</button>
                    <button onclick="adicionarValorVisor(0);">0</button>
                    <button onclick="adicionarValorVisor('.');">.</button>
                </div>
                <div id="conteudo_operacoes">
                    <button onclick="adicionarValorVisor('+');">+</button>
                    <button onclick="adicionarValorVisor('-');">-</button>
                    <button onclick="adicionarValorVisor('*');">*</button>
                    <button onclick="adicionarValorVisor('/');">/</button>
                </div>
                <div id="conteudo_acoes">
                    <button onclick="limparValorVisor();" id="btn_limpar">C</button>
                    <button onclick="calcular();" id="btn_calcular">=</button>
                </div>
                <div id="conteudo_logs">
                </div>
            </div>
        </div>
        <script>
           function clicouVegeta(){
                document.getElementById("velhodahavan").style.display = "block";
                window.setTimeout(function (){
                    document.getElementById("velhodahavan").style.display = "none";
                }, 3500);
            }
        </script>
        <script>
          function adicionarValorVisor(valor){
    log("Adicionou o texto " + valor + " no visor.");
    document.getElementById("visor").value += valor;
}
 
function limparValorVisor(){
    log("Limpou o texto do visor");
    document.getElementById("visor").value = ""
}
 
function calcular(){
    log("Iniciou a função calcular.");
 
    var resultado = "";
    var operacao = "";
    var valor1 = "";
    var valor2 = "";
 
    var conteudoVisor = document.getElementById("visor").value;
 
    for (var indice = 0; indice < conteudoVisor.length; indice++){
        var valorIndice = conteudoVisor[indice];
 
        if ((isNaN(valorIndice)) && (valorIndice != ".")) {
            if (valorIndice == "+"){
                operacao = valorIndice;
            }else
            if (valorIndice == "-") {
                operacao = valorIndice;
            } else
            if (valorIndice == "*"){
                operacao = valorIndice;
            }else
            if (valorIndice == "/"){
                operacao = valorIndice;
            }
        }else {
            if (operacao == ""){
                valor1 += valorIndice;
            }else {
                valor2 += valorIndice;
            }
        }
        if (isNaN (conteudoVisor[indice+1])){
            if ((valor1 != "") && (valor2 !="") && (operacao !="")){
                if (operacao == "+"){
                    resultado = somar (parseFloat (valor1) ,parseFloat (valor2));
                } else
                if (operacao == "-"){
                    resultado = subtrair (parseFloat (valor1) ,parseFloat (valor2));
                } else
                if (operacao == "*"){
                    resultado = multiplicar (parseFloat (valor1) ,parseFloat (valor2));
                } else
                if (operacao == "/"){
                    resultado = dividir (parseFloat (valor1) ,parseFloat (valor2));
                }
                valor1 = resultado;
                valor2 = "";
                   
            }
        }
       
    }
    if(resultado){
        exibirResultado (resultado);
        log (conteudoVisor + " = " + resultado);
    }
 
        somar(10, 10);
        subtrair(10, 10);
        multiplicar(10, 10);
        dividir(10, 10);
   
        log("Executou o cálculo.");
   
        exibirResultado(valor1);
        log(valor1);
        log("Finalizou a função calcular.");
}
 
function somar(val1, val2){
    log("Somou o valor " + val1 + " com " + val2);
    return val1 + val2;
}
 
function subtrair(val1, val2){
    log("Subtraiu o valor " + val1 + " com " + val2);
    return val1-val2
}
 
function multiplicar(val1, val2){
    log("Multiplicou o valor " + val1 + " com " + val2);
    return val1*val2
}
 
function dividir(val1, val2){
    log("Dividiu o valor " + val1 + " com " + val2);
    return val1/val2
}
 
function exibirResultado(valor){
    limparValorVisor();
    adicionarValorVisor(valor);
    log("Exibiu o resultado " + valor);
}
 
function log(valor){
    console.log("Adicionou o log" + valor);
    if(valor!=""){
        var textolog="<p>"+valor+"</p>"+document.getElementById("conteudo_logs").innerHTML;
        document.getElementById("conteudo_logs").innerHTML = textolog;
    }
}
        </script>
    </body>
</html>
