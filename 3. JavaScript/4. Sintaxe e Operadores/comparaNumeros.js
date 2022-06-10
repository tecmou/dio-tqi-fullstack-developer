function comparaNumeros(num1, num2) {
    var teste = "teste";
    if(!num1 || !num2) {
        return "Os números devem ser válidos";
    }
    let iguais = (num1 == num2) ? "são iguais" : "não são iguais";
    let soma = num1 + num2;
    let maiorQueDez = (soma > 10) ? "maior que dez" : "menor que dez";
    let menorQueVinte = (soma < 20) ? "menor que vinte" : "maior que vinte";

    return `Os números num1 e num2 ${iguais}. Sua soma é ${soma}, que é ${maiorQueDez} e ${menorQueVinte}.`;
}

console.log(comparaNumeros(1,2));