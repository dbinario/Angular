import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'mayusculas'
})
export class MayusculasPipe implements PipeTransform{

    //el segundo parametro es opcional
    transform(valor: string,enMayusculas:boolean=true):string {

        /*if(enMayusculas)
        {
        return valor.toUpperCase();
        }else{
        return valor.toLowerCase();
        }*/

        return (enMayusculas) ? valor.toUpperCase() : valor.toLowerCase();

    }

}