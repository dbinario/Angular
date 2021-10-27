import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'vuela'
})
export class VuelaPipe implements PipeTransform{

    //el segundo parametro es opcional
    transform(valor: boolean):string {

       
        return (valor) ? 'vuela' : 'no vuela';

    }

}