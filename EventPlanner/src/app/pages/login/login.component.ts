import { Component } from '@angular/core';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  model = new Login('Bruce Wayne', 'Batman2009@gmail.com', 'hjkl123;');

  submitted = false;

  onSubmit() {this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }

}
