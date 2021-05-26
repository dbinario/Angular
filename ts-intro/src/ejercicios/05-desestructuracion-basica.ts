
/*
    ===== Código de TypeScript =====
*/
interface Reproductor{

    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles

}

interface Detalles{
    autor:string;
    anio:number;
}

const reproductor:Reproductor={

    volumen: 15,
    segundo: 120,
    cancion: 'Living Dead Girl',
    detalles:{
        autor:'Rob Zombie',
        anio:2009,
    }

}

const autor='Fulano';

//desestructurar objeto forma limpia
const {volumen,segundo,cancion,detalles}=reproductor;
const {autor:autorDetalle}=detalles;

//forma2 directa

//const {volumen,segundo,cancion,detalles:{autor:autorDetalle}}=reproductor;


console.log('El volumen actual de: ', volumen);
console.log('El segundo actual de: ', segundo);
console.log('La cancion actual de: ', cancion);
console.log('El autor es: ', autorDetalle);


const dbz:string[]=['Goku','Vegeta','Trunks'];
//el espacio en blanco es una posicion que se separa por comas
const [,,p3]=dbz;

console.log('Personaje 1:', dbz[0]);
console.log('Personaje 2:', dbz[1]);
console.log('Personaje 3:', p3);

