

let btn5 = document.getElementById('btnex5');
let exibir5 = document.getElementById('exibirex5');

function calcularativ5() {
    let strNum = (document.getElementById('num1ex5').value)
    const salario = strNum.replace(/,/g, "");

    // Verifica se o valor do salário é um número válido
    if (!salario || salario <= 0) {
        exibir5.innerHTML = `Por favor, insira um salário válido.`;
        return; // Sai da função se o salário for inválido
    }

    const tabela = [
        { min: 0, max: 1320.00, aliquota: 0.075 },
        { min: 1320.01, max: 2571.29, aliquota: 0.09 },
        { min: 2571.30, max: 3856.94, aliquota: 0.12 },
        { min: 3856.95, max: 7507.49, aliquota: 0.14 }
    ];

    let valorINSS = 0;
    let salarioRestante = salario;

    for (const faixa of tabela) {
        console.log(salario)
        console.log(faixa.max)
        if (salario > faixa.max) {
            valorINSS += (faixa.max - faixa.min + 0.01) * faixa.aliquota; // Assegura cobertura completa da faixa
            // console.log("1: " + valorINSS)
        } else if (salario > faixa.min) {
            // Aplica a alíquota apenas à parcela do salário que excede o mínimo da faixa
            valorINSS += (salario - faixa.min) * faixa.aliquota;
            // console.log("2: " + valorINSS)
            break; // Sai do loop pois o salário foi completamente processado
        }
    }




    exibir5.innerHTML = `Valor da contribuição do INSS é  <br> R$${valorINSS.toFixed(2)}`;
    exibir5.innerHTML += `<br>Valor do Salário digitado é  <br> R$${salario}`; // Exibe o valor digitado pelo usuário
}

btn5.addEventListener('click', calcularativ5);




//████████████████████████████████████████████████████████████████████████████████████
//████████████████████████████████████████████████████████████████████████████████████


let btn6 = document.getElementById('btnex6');
let exibir6 = document.getElementById('exibirex6');

function calcularativ6() {
    let salario = parseFloat(document.getElementById('num1ex6').value);
    let descontos = parseFloat(document.getElementById('num2ex6').value);

    // Verifica se o valor do salário é um número válido
    if (isNaN(salario) || salario <= 1903.98) {
        exibir6.innerHTML = `Isento`;
        return; // Sai da função se o salário for inválido
    }

    const tabela = [
        { min: 0, max: 1903.98, aliquota: 0 },
        { min: 1903.99, max: 2826.65, aliquota: 0.075 },
        { min: 2826.66, max: 3751.05, aliquota: 0.15 },
        { min: 3751.06, max: 4664.68, aliquota: 0.225 }
    ];

    let valorIRRF = 0;
    let baseIRRF = salario - descontos;

    if (baseIRRF > 1903.98) {
        for (const faixa of tabela) {
            if (baseIRRF > faixa.max) {
                valorIRRF += (faixa.max - faixa.min) * faixa.aliquota;
            } else {
                valorIRRF += (baseIRRF - faixa.min) * faixa.aliquota;
                break;
            }
        }
    }

    exibir6.innerHTML = `Valor do IRRF: R$${valorIRRF.toFixed(2)}`;
}

btn6.addEventListener('click', calcularativ6);



document.addEventListener("DOMContentLoaded", function () {
    const btnCalcular = document.getElementById("btnex7");
    btnCalcular.addEventListener("click", function () {
        const PMT = parseFloat(document.getElementById("num2ex7").value); // Valor da parcela
        const i = parseFloat(document.getElementById("num3ex7").value) / 100; // Taxa de juros ao mês (em decimal)
        const n = parseInt(document.getElementById("num4ex7").value); // Número de parcelas

        const valorFinanciado = calcularValorFinanciado(PMT, i, n);
        exibirex7.innerHTML = `O valor financiado sem entrada é: R$ ${valorFinanciado.toFixed(2)}`
    });
});

function calcularValorFinanciado(PMT, i, n) {
    const numerador = Math.pow(1 + i, n) - 1;
    const denominador = Math.pow(1 + i, n) * i;
    const resultado = numerador / denominador;

    return resultado * PMT;
}











