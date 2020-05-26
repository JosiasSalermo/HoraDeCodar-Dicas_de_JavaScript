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


