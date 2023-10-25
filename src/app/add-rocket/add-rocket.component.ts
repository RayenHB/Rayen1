import { Component } from '@angular/core';
import { rocket } from '../model/rocket.model';
import { RocketService } from '../rocket.service';


@Component({
  selector: 'app-add-rocket',
  templateUrl: './add-rocket.component.html',
  styleUrls: ['./add-rocket.component.css']
})
export class AddRocketComponent {
  newrocket = new rocket();
  constructor(private RocketService: RocketService) { }
  addRocket(){
    // console.log(this.newrocket);
    this.RocketService.ajouterRocket(this.newrocket);

    }
    
}
