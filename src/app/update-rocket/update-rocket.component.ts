import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RocketService } from '../rocket.service';
import { rocket } from '../model/rocket.model';
import { Router } from '@angular/router';
import { modele } from '../model/modele.model';


@Component({
  selector: 'app-update-rocket',
  templateUrl: './update-rocket.component.html',
  styleUrls: ['./update-rocket.component.css']
})
export class UpdateRocketComponent {
  currentRocket = new rocket();
  modeles! : modele[];
  updatedModId! : number;

  constructor(private activatedRoute: ActivatedRoute,
    private rocketService: RocketService,private router :Router,
    ) { }
    ngOnInit() {
      // console.log(this.route.snapshot.params.id);
      this.modeles = this.rocketService.listeModele();
      this.currentRocket = this.rocketService.consulterRocket(this.activatedRoute.snapshot. params['id']);
      this.updatedModId=this.currentRocket.modele.idMod;

      console.log(this.currentRocket);
      } 
      updateRocket()
      { 
        this.currentRocket.modele=this.rocketService.consulterModele(this.updatedModId);
        this.rocketService.updateRocket(this.currentRocket);
        this.router.navigate(['rocket']);
      }
      
}
