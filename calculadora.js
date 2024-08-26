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