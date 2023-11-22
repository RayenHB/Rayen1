import { Injectable } from '@angular/core';
import { rocket } from './model/rocket.model';
import { modele } from './model/modele.model';




@Injectable({
  providedIn: 'root'
})
export class RocketService {
  rocket : rocket[]; //un tableau de chînes de caractères  
  modeles : modele[]
  constructor() {
    this.modeles =  [ {idMod : 1, nomMod : "Full Thrust"},
                      {idMod : 2, nomMod : "Small-Scale"}];
    this.rocket = [
      {idRocket : 1, nomRocket : "Falcon 9", budgetRocket : 10223.600, premierLancement: new Date("04/06/2010"), modele:{idMod : 1, nomMod : "Falcon 9"}},
      {idRocket : 2, nomRocket : "Saturn V", budgetRocket : 9999.600, premierLancement: new Date("11/09/1967"), modele:{idMod : 2, nomMod : "salturn V"}},
      {idRocket : 3, nomRocket : "Atlas V", budgetRocket : 14755.600, premierLancement: new Date("07/21/2022"), modele:{idMod : 1, nomMod : "Falcon 9"}}
       ];
      }
      listeRocket():rocket[] {
        return this.rocket;
}
    ajouterRocket( rock: rocket){
    this.rocket.push(rock);
}
    supprimerRocket( rock: rocket){

  const index = this.rocket.indexOf(rock, 0);
  if (index > -1) {
  this.rocket.splice(index, 1);
  }
  }
  Rocket! : rocket;
  consulterRocket(id:number): rocket{
    this.Rocket = this.rocket.find(p => p.idRocket == id)!;
    return this.Rocket;
    }
    trierRockets(){
      this.rocket = this.rocket.sort((n1,n2) => {
      if (n1.idRocket! > n2.idRocket!) {
      return 1;
      }
      if (n1.idRocket! < n2.idRocket!) {
      return -1;
      }
      return 0;
      });
      }
      
    updateRocket(r:rocket)
  {
    this.supprimerRocket(r);
    this.ajouterRocket(r);
    this.trierRockets();
    
}
  listeModele():modele[] {
    return this.modeles;
  }
  consulterModele(id:number): modele{
    return this.modeles.find(mod => mod.idMod == id)!;
    }

  
}
