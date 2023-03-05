/* Utilizar o array de objetos:

[

{nome: "luis", idade: 26},

{nome: "norma", idade: 16},

{nome: "daiana", idade: 26},

{nome: "jorge", idade: 16},

{nome: "kauan", idade: 16},

{nome: "charles", idade: 26},

{nome: "marco", idade: 16},

{nome: "bruno", idade: 16}

]
Retornar uma lista separada pelos usuários com idades menores de 18 e outra com os usuários maiores ou iguais a 18.

‌ */


    let dados = [

        {nome: "luis", idade: 26},         
        {nome: "norma", idade: 16},        
        {nome: "daiana", idade: 26},        
        {nome: "jorge", idade: 16},        
        {nome: "kauan", idade: 16},        
        {nome: "charles", idade: 26},        
        {nome: "marco", idade: 16},        
        {nome: "bruno", idade: 16}
        
        ];


function idadesMaiores (value) {

    while (value.idade >= 18) {
        return console.log(`${value.nome} é maior de idade`); 
}
}
let maiores = dados.filter(idadesMaiores);


function idadesMenores (value) {

    while (value.idade < 18) {
        return console.log(`${value.nome} é menor de idade`) ; 
}
}
let menores = dados.filter(idadesMenores);






