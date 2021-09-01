// criando o servidor abaixo
import { createServer } from "http";

// abaixo vamos colocar um callback para tratar as requisições que chegam neste server, dois objetos req e res(request e response)
const server = createServer((request, response) => {
    switch (request.url) {
        case '/status': {
            response.writeHead(200);
            response.write('Okay');
            response.end();
            return;
        }
    // abaixo qualquer coisa não não for o caminho http://127.0.0.1/status ele vai retornar o campo abaixo.
        default: {
            response.writeHead(404, 'Service not found');
            response.end();
        

        }
    }
} );

// Configurar porta e hostname, pode ser que eu esteja roando mais de um server e rodar uma porta diferente.
// podemos modificar isso descrito acima através de variável de ambiente. vamos utilizar abaixo 
// vamos modificar isso acima com uma variável global do node que é o process.
// pelo descrito acima iremos editar a linha abaixo colocando o "PORT"
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
//  Vamos fazer abaixo o hostname
//  Abaixo se a string HOSTNAME for vazia ou nula através do "||" ele retorna o outro lado com o "127.0.0.1"
// Testaremos essa implementação com o comando PORT=3000 npm run start
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

// abaixo vamos colcoar uma função que será usada assim que o server iniciar
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is listening at http://${HOSTNAME}:${PORT}`);
});

// para este server inicar basta digitar "npm run start"


