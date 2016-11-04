/**
 * Created by MikeTran on 11/3/16.
 */
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";


const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
ß
];

export const routing = RouterModule.forRoot(APP_ROUTES);
