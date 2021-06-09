
/*
    ===== Código de TypeScript =====
*/


//el simbolo ? siginica que es opcional

interface Pasajero{
    nombre:string;
    hijos?:string[]
}

const pasajero1:Pasajero={

    nombre:'Fernando'

}

const pasajero2:Pasajero={

    nombre:'Melissa',
    hijos:['Hugo','Paco','Luis']

}

//cuando agregue el ? signica que puede estar o no definida sin ocasionar error y si no existen los hijos es 0

function imprimeHijos(pasajero: Pasajero):void{

    const cuantosHijos=pasajero.hijos?.length || 0;
    console.log(cuantosHijos);

}


imprimeHijos(pasajero1);