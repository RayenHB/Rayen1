import { Component } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = new User();
  onLoggedin()
{
  console.log(this.user);
  let isValidUser: Boolean = this.authService.SignIn(this.user);
 if (isValidUser)
 this.router.navigate(['/']);
 else
//alert('Login ou mot de passe incorrecte!');
this.erreur = 1;
}
constructor(private authService : AuthService,
  private router: Router) { }
  erreur=0;
}
