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
  constructor (public authService: AuthService, private RocketService:RocketService) {}

  rocket! : rocket[];
  IdMod! : number;
  modeles! : modele[];


  ngOnInit(): void {
    this.RocketService.listeModele().
    subscribe((mods: { _embedded: { modeles: modele[]; }; }) => {this.modeles = mods._embedded.modeles;
    console.log(mods);
    });
    }
    onChange() {
      this.RocketService.rechercherParModele(this.IdMod).
      subscribe((rockts: rocket[]) =>{this.rocket=rockts});
      }
    

}
