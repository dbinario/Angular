
/*
    ===== Código de TypeScript =====
*/


class PersonaNormal{

    constructor(
        public nombre:string,
        public direccion:string){
    }

}

class Heroe extends PersonaNormal{


//cuando se le agrega el nivel de acceso se crea directamente la propiedad de la clase
constructor(
    public alterEgo: string,
    direccion:string,
    public edad?:number,
    public nombreReal?:string){
        super(nombreReal,direccion);
    }

}

const ironman=new Heroe('Ironman','New York,USA2',35,'Tony Stark');


console.log(ironman);
