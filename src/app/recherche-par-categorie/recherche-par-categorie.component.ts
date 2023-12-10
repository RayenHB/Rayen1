import { Component } from '@angular/core';
import { rocket } from '../model/rocket.model';
import { RocketService } from '../rocket.service';
import { AuthService } from '../auth.service';
import { modele } from '../model/modele.model';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styleUrls: ['./recherche-par-categorie.component.css']
})
export class RechercheParCategorieComponent {
  modele: any;
  constructor (public authService: AuthService, private RocketService:RocketService) {}

  rocket! : rocket[];
  IdMod! : number;
  modeles! : modele[];


  ngOnInit(): void {
    this.modeles = this.RocketService.listeModele(); 
    console.log(this.modeles);
    }
    onChange() {
      this.modele = this.RocketService.rechercherParModele(this.IdMod);
      }
    

}
