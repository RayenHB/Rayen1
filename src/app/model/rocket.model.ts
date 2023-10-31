import { modele } from "./modele.model";

export class rocket {
    idRocket? : number;
    nomRocket? : string;
    budgetRocket? : number;
    premierLancement? : Date ;
    modele! : modele;
}