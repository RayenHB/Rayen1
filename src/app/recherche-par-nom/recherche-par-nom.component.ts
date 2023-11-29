import { Component, OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { RocketService } from '../rocket.service';
import { rocket } from '../model/rocket.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html'
})
export class RechercheParNomComponent {
  rocket! : rocket[];
  constructor (private RocketService:RocketService) {}

  ngOnInit(): void{
    this.rocket = this.RocketService.listeRocket();
  }

  rechercherProds(){
    this.RocketService.rechercherParNom(this.nomRocket).
    subscribe(rocks => {
    this.rockets = rocks;
    console.log(rocks)});
    }
    
}
