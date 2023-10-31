import { Component } from '@angular/core';
import { rocket } from '../model/rocket.model';
import { RocketService } from '../rocket.service';
import { Router } from '@angular/router';
import { modele } from '../model/modele.model';


@Component({
  selector: 'app-add-rocket',
  templateUrl: './add-rocket.component.html',
  styleUrls: ['./add-rocket.component.css']
})
export class AddRocketComponent {
  newrocket = new rocket();
  modeles! : modele[];
  newIdMod! : number;
  newModele! : modele;

  constructor(private RocketService: RocketService, private router :Router) { }
  ngOnInit() {
    this.modeles = this.RocketService.listeModele();
    }
    
  addRocket(){
    // console.log(this.newrocket);
    this.newModele =
    this.RocketService.consulterModele(this.newIdMod);
    this.newrocket.modele = this.newModele;
    this.RocketService.ajouterRocket(this.newrocket);
    this.router.navigate(['rocket']);

    }
    
}
