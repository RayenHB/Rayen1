import { Component } from '@angular/core';
import { rocket } from '../model/rocket.model';
import { RocketService } from '../rocket.service';


@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent {
  rocket : rocket[]; //un tableau de chînes de caractères  
  constructor(private RocketService : RocketService) {
    this.rocket = RocketService.listeRocket();
    }
    supprimerRocket(r: rocket)
    {
      //console.log(r);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.RocketService.supprimerRocket(r);

    }

}
