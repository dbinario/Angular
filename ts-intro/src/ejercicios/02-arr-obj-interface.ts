
/*
    ===== Código de TypeScript =====
*/
//ejemplo de array multiples tipos
//let habilidades:(boolean|string|number)[]=['Bash','Counter','Healing',100];
//array string
let habilidades: string[]=['Bash','Counter','Healing'];

habilidades.push('Recharge');

interface Personaje{
    nombre:string,
    hp:number,
    habilidades: string[],
    puebloNatal?: string
}

const personaje: Personaje={
    nombre: 'Fernando',
    hp: 100,
    habilidades: ['Bash','Counter','Healing']
}

personaje.puebloNatal="Pueblo Paleta";

console.table(personaje);