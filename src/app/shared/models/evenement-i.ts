import { Time } from "@angular/common";

export interface EvenementI {
    titre:string;
    date:number | Date;
    places:number;
    horaires:HoraireI;
    infos?:string;
    image:string;
}
interface HoraireI{
    debut:string;
    fin:string;
}