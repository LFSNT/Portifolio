



let btn1 = document.getElementById('btnex1')
let exibir1 = document.getElementById('exibirex1')

function calcularativ1() {

    let n1 = parseFloat(document.getElementById('num1ex1').value)
    let n2 = parseFloat(document.getElementById('num2ex1').value)

    if (n1 != n2) { // Se N1 for diferente que N2 Execute:

        if (n1 > n2) {
            let aux = n1
            n1 = n2
            n2 = aux
        }
        exibir1.innerHTML = ''
        for (let i = (n1 + 1); i < n2; i++) {
            exibir1.innerHTML += ` ${i},  `
        }
    } else { // Se não for diferente execute o erro:
        exibir1.innerHTML = `Erro! Por favor, Digite um numero valido!`
    }
}
btn1.addEventListener('click', calcularativ1)


//████████████████████████████████████████████████████████████████████████████████████
//████████████████████████████████████████████████████████████████████████████████████


let btn2 = document.getElementById('btnex2');
let exibir2 = document.getElementById('exibirex2');

function calcularativ2() {
    let n1 = parseFloat(document.getElementById('num1ex2').value);
    let n2 = parseFloat(document.getElementById('num2ex2').value);
    let n3 = parseFloat(document.getElementById('num3ex2').value);

    // Verificar se os números são diferentes
    if (n1 != n2 && n1 != n3 && n2 != n3) {
        let maior;
        let menor;

        // Determinando o maior número
        if (n1 > n2 && n1 > n3) {
            maior = n1;
        } else if (n2 > n1 && n2 > n3) {
            maior = n2;
        } else {
            maior = n3;
        }

        // Determinando o menor número
        menor = n1;
        if (n2 < menor) {
            menor = n2;
        }
        if (n3 < menor) {
            menor = n3;
        }

        exibir2.innerHTML = `Os números digitados foram: ${n1}, ${n2} e ${n3} <br>
                            O maior número é: ${maior} <br>
                            O menor número é: ${menor}<br>`;
    } else {
        exibir2.innerHTML = `Erro! Digite números diferentes e válidos!`;
    }
}

btn2.addEventListener('click', calcularativ2);




//████████████████████████████████████████████████████████████████████████████████████
//████████████████████████████████████████████████████████████████████████████████████


let btn3 = document.getElementById('btnex3');
let exibir3 = document.getElementById('exibirex3');

function calcularativ3() {
    let cod = parseInt(document.getElementById('cod').value); // Determinado valor inteiro pq é o código de um produto.
    let qtd = parseInt(document.getElementById('num1ex3').value); // Determinado inteiro pq a quantidade é inteira.

    // console.log(cod);
    // console.log(qtd);

    if (qtd < 0 || isNaN(qtd)) {
        exibir3.innerHTML = `Quantidade inválida`;
    } else if (cod == 99) { // Sabor Morango
        exibir3.innerHTML = `Picolé: Morango. <br>
            Valor unitário: R$ 2.50 <br>
            Quantidade: ${qtd} <br>
            Valor a ser pago: R$ ${(qtd * 2.50).toFixed(2)}`;

    } else if (cod == 100) { // Sabor Limão
        exibir3.innerHTML = `Picole: Limão.<br>
            Valor unitário: R$ 2.50 <br>
            Quantidade: ${qtd} <br>
            Valor a ser pago:  R$ ${(qtd * 2.50).toFixed(2)}`;

    } else if (cod == 101) { // Sabor Coco
        exibir3.innerHTML = `Picole: Coco <br>
            Valor unitário: R$ 3.00 <br>
            Quantidade: ${qtd} <br>
            Valor a ser pago:  R$ ${(qtd * 3.00).toFixed(2)}`;

    } else if (cod == 102) { // Sabor Chocolate
        exibir3.innerHTML = `Picole: Chocolate.<br>
            Valor unitário: R$ 4.00 <br>
            Quantidade: ${qtd} <br>
            Valor a ser pago:  R$ ${(qtd * 4.00).toFixed(2)}`;
            
    } else if (cod == 103) { // Sabor Uva
        exibir3.innerHTML = `Picole: Uva.<br>
            Valor unitário: R$ 2.00 <br>
            Quantidade ${qtd} <br>
            Valor a ser pago:  R$ ${(qtd * 2.00).toFixed(2)}`;
    } else {
        exibir3.innerHTML = `Nenhum código foi selecionado!`;
    }
}

btn3.addEventListener('click', calcularativ3);


//████████████████████████████████████████████████████████████████████████████████████
//████████████████████████████████████████████████████████████████████████████████████


let exibir4 = document.getElementById('exibirex4')
let btn4 = document.getElementById('btnex4')

function calcularativ4() {
    let peso = parseFloat(document.getElementById('num1ex4').value)
    let altura = parseFloat(document.getElementById('num2ex4').value)

    if (peso > 0 && altura > 0) {
        imc = peso / Math.pow(altura, 2) // Peso / altura elevado a 2

        if (imc < 17) {

            exibir4.innerHTML = `Muito abaixo do peso! <br> O valor do IMC é: ${imc.toFixed(2)}`
        } else if (imc > 17 && imc < 18.49) {
            //------------------------------------------
            exibir4.innerHTML = `Abaixo do peso! <br> O valor do IMC é: ${imc.toFixed(2)}`
        } else if (imc > 18.5 && imc < 24.99) {
            //------------------------------------------    
            exibir4.innerHTML = `Peso normal! <br> O valor do IMC é: ${imc.toFixed(2)}`
        } else if (imc > 25 && imc < 29.99) {
            //------------------------------------------    
            exibir4.innerHTML = `Acima do peso! <br> O valor do IMC é: ${imc.toFixed(2)}`
        } else if (imc > 30 && imc < 34.99) {
            //------------------------------------------    
            exibir4.innerHTML = `Obesidade I! <br> O valor do IMC é: ${imc.toFixed(2)}`
        } else if (imc > 35 && imc < 39.99) {
            //------------------------------------------    
            exibir4.innerHTML = `Obesidade II (severa)! <br> O valor do IMC é: ${imc.toFixed(2)}`
        } else if (imc > 40) {
            //------------------------------------------        
            exibir4.innerHTML = `Obesidade III (mórbida)! <br> O valor do IMC é: ${imc.toFixed(2)}`
        }
    } else {
        exibir4.innerHTML = `Erro...Por favor, digite um número válido`
    }
}

btn4.addEventListener('click', calcularativ4);
