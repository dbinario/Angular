
/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumento: T){
    return argumento;
}

//el tipo generico puede ser cualquiera

let soyString=queTipoSoy('Hola Mundo');
let soyNumero=queTipoSoy(100);
let soyArreglo=queTipoSoy([1,2,3,4,5,6,7,8,9,10]);


//pero tambien puedes definir que vas a recibir
let soyExplicito=queTipoSoy<number>(100);

