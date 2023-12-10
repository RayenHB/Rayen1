import { Component } from '@angular/core';
import { rocket } from '../model/rocket.model';
import { RocketService } from '../rocket.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
})
export class RechercheParNomComponent {

  searchTerm!: string;
  rocket!: rocket[];


  constructor(private RocketService: RocketService) { }

  ngOnInit() {
    this.rocket = this.RocketService.listeRocket();
    console.log(this.RocketService);
  }

}
