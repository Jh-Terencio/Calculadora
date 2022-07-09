let n1 = "";
let n2 = "";
let operadador = "";
let res = "";

function addNumber(numero){
    if(res != "" && operadador == ""){
        erase();
    }

    if(operadador == ""){
        document.getElementById("display").innerHTML += numero;
        n1 += numero;
    } else if(operadador != "" && n2 == ""){
        document.getElementById("display").innerHTML = "";
        document.getElementById("display").innerHTML += numero;
        n2 = numero;
    } else{
        document.getElementById('display').innerHTML += numero;
        n2 += numero;
    }
}

function erase(){
     n1 = "";
     n2 = "";
     opredador = "";
     res = "";

    document.getElementById("display").innerHTML = "";
}

function addOperador(operadorSelecionado){
    if(n1 != ""){
        operadador = operadorSelecionado;
    }
}

function calculate(event){
    event.preventDefault();

    if(n1 !== "" && n2 !== "" && operadador !== ""){
        switch(operadador){
            case "+": res = parseInt(n1)+parseInt(n2);
                break;
            case "*": res = parseInt(n1)*parseInt(n2);
                break;
            case "-": res = parseInt(n1)-parseInt(n2);
                break;
            case "/": res = parseInt(n1)/parseInt(n2);
                break;
            case "x^y": res = parseInt(n1)**parseInt(n2);
                break;
            default:
                break;
        }
    }
    document.getElementById("display").innerHTML = "" + res;

    n1 =  "" + res;
    n2 = "";
    operadador = "";
}

