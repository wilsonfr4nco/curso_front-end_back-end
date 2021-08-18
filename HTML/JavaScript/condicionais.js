var nome = "Franco";

if (nome === "Wilson") {
    console.log("Legal seu nome é este mesmo!")
} else if (nome === "Franco") {
    console.log("Você também serve!")
} else {
    console.log("Que pena não é Wilson!")
}


// Outra maneira de testar várias condições é utilizar o "switch"

switch (nome) {
    case 'Wilson':
        console.log('Legal! você é o Wilson!');
            break;
    case 'Franco':
        console.log('Ah! Você também serve!');
            break;
    default:
        console.log('Que pena você não é quem estou procurando');
            break;
}

const usuario = {nome:"Andressa", idade: 25};
const {nome: usuarioNome ="Flavio", idade= 20} = usuario;
console.log(nome)