// Type assertion: parecido com o casting(mudar o tipo da variável) de outras linguagens

const minhaIdade: any = 23;
// ao colocar os parâmetros entre parênteses indicando que o tipo é número foi feito o type assertion
(minhaIdade as number).toString();

// pegando um elemento no html, se não tiver o "as HTMLInputElement" o input.value dará erro no typescript
const input = document.getElementById("numero1") as HTMLInputElement;
// abaixo temos outra maneira de fazer typeassertion com o <balbalbal>
// const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);

