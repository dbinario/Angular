
/*
    ===== Código de TypeScript =====
*/
function sumar(a:number, b:number ):number {
    return a+b;
}

const sumarFlecha=(a:number ,b:number ):number =>{

    return a+b;

}

function multiplicar(numero:number ,otroNumero?:number ,base:number =2):number{

    return numero * base;

}


//como llamar funciones
//const resultado=multiplicar(10,5,7);
//console.log(resultado);


interface PersonajeLOR{

nombre:string;
pv:number;    
mostrarHp:()=>void;

}

function curar(personaje: PersonajeLOR,curarX:number):void {

personaje.pv+=curarX;

console.log(personaje);

}

const nuevoPersonaje: PersonajeLOR={

    nombre: 'Strider',
    pv:50,
    mostrarHp(){
        console.log(this.pv);
    }

}

curar(nuevoPersonaje,5);

nuevoPersonaje.mostrarHp();