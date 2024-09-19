function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);  
}


function classificarIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        return 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        return 'Obesidade grau 1';
    } else if (imc >= 35 && imc < 39.9) {
        return 'Obesidade grau 2';
    } else {
        return 'Obesidade grau 3';
    }
}

let peso = 70; 
let altura = 1.75; 


let imc = calcularIMC(peso, altura);
let classificacao = classificarIMC(imc);


console.log("Seu IMC é: " + imc);
console.log("Classificação: " + classificacao);
