const { parse } = require('path');

const rli = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function input(prompt) {
    return new Promise((callbackFn, errorFn) => {
        rli.question(prompt, (uinput)=> {
            callbackFn(uinput);
        }, ()=> {
            errorFn();
        });
    });
}
 

const main = async () => {
    const numInicio = await input("Introduzca numero de inicio de su numero aleatorio : ");
    const numFinal = await input("Introduzca el numero final del numero aleatorio : ");
    const cantidadAleatorio = await input("Introduzca la cantidad de numeros aleaterios que deseas : ");
    const listaNumeros = [];
        for (let i = 0; i < cantidadAleatorio; i++) {
           let numerosAleatorios = Math.floor(Math.random() * (parseFloat(numFinal) - parseFloat(numInicio) + 1)) + parseFloat(numInicio);
           listaNumeros.push(numerosAleatorios);
        }
        console.log(listaNumeros);
    
   
    rli.close();
};

main();