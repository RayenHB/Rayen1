import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RocketComponent } from './rocket/rocket.component';
import { AddRocketComponent } from './add-rocket/add-rocket.component';
import { UpdateRocketComponent } from './update-rocket/update-rocket.component';
const routes: Routes = [
  {path: "rocket", component : RocketComponent},
  {path: "add-rocket", component : AddRocketComponent},
  { path: "", redirectTo: "rocket", pathMatch: "full" },
  {path: "updateRocket/:id", component: UpdateRocketComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
