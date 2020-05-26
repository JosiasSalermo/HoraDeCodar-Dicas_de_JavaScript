// Declaração de Variável
var nome = 'Pedro'

function dizerNome(){
    var nome = 'Joao'
    console.log(`O nome é ${nome}`)
}

console.log(nome)
dizerNome() 

/* 
O var é variável Global
E pode ser Redeclarada
O var atinge os blocos de menor valor(ifs e loops)
*/

if(true){
    console.log(`${nome} dentro do if`)
    var nome = 'Salete'
}
console.log(nome)


// ===== Usando let

let nomeLet = 'PedroLet'
console.log(nomeLet)

function dizerNomeLet(){
    let nomeLet = 'JoaoLet'
    console.log(`O nome é ${nomeLet}`)
}
dizerNomeLet()

if(true){
    let nomeLet = 'SaleteLet'
    console.log(nomeLet)
}

for(let i = 0; i < 3; i++){
    let nomeLet = 'AnísioLet'
    console.log(nomeLet)
}

/* 
Com let até os Blocos de Menor relevância irão ter
Escopo Próprio
*/


// ===== Usando o const

const numero = 1 

console.log(numero)



function dizerNumero(){
    const numero = 1.2
    console.log(`O número é ${numero}`)
}
dizerNumero()


if(true){
    const numero = 2 
    console.log(numero)
}

console.log(numero)
dizerNumero()

for(let i = 0; i < 3; i++){
    const numero = 3 
    console.log(numero)
}