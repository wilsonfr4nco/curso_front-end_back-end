class Carro {

    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ) {}
    
    // método abaixo podemos ter métodos privados
    private alterarVelocidade(delta: number) { 
        const novaVelocidade = this.velocidadeAtual + delta;

        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }
    }

    
    // a função acima não existia e ao colocar ela comentamos as linhas abaixo. 
    acelerar() {
        this.alterarVelocidade(5);
        // const aceleracao = 5;
        // if (this.velocidadeAtual + aceleracao <= this.velocidadeMaxima) {
            // this.velocidadeAtual += aceleracao;
        // }
    }

    frear() {
        this.alterarVelocidade(-5);
        // const frenagem = 5;
        // this.velocidadeAtual -= frenagem;
    }
}

const carro = new Carro('Kia', 'Sorento', 250);
carro.acelerar();
carro.acelerar();


// carro.velocidadeAtual = 400; // esse erro acontece porque a propriedade é privada



// --- HERANÇA --------

// camaro herda a classe carro
// o camaro além das propriedades de carro ele também tem turbo que foi criado nele
class Camaro extends Carro {

    private turbo = false;
    
    constructor() {
        super('Chrevrolet', 'Camaro', 500);
    }

    ligarTurbo() {
        this.turbo = true;
    }

}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();