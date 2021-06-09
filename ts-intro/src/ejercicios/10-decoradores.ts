
/*
    ===== Código de TypeScript =====
*/

// un decorador expande la clase

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }


@reportableClassDecorator
class MiSuperClase{
    public miPropiedad:string='ABC13';
    
    imprimir(){

        console.log('Hola Mundo');
        
    }
}

console.log(MiSuperClase);

const miClase=new MiSuperClase();

console.log(miClase.miPropiedad);