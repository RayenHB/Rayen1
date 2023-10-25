import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RocketService } from '../rocket.service';
import { rocket } from '../model/rocket.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-rocket',
  templateUrl: './update-rocket.component.html',
  styleUrls: ['./update-rocket.component.css']
})
export class UpdateRocketComponent {
  currentRocket = new rocket();
  constructor(private activatedRoute: ActivatedRoute,
    private rocketService: RocketService,private router :Router,
    ) { }
    ngOnInit() {
      // console.log(this.route.snapshot.params.id);
      this.currentRocket = this.rocketService.consulterRocket(this.activatedRoute.snapshot. params['id']);
      console.log(this.currentRocket);
      } 
      updateRocket()
      { //console.log(this.currentProduit);
        this.rocketService.updateRocket(this.currentRocket);
        this.router.navigate(['rocket']);;
      }
      
}
