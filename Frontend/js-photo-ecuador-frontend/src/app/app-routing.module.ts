import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeRouteComponent} from "./routes/home-route/home-route.component";
import {LoginRouteComponent} from "./routes/login-route/login-route.component";
import {SignInRouteComponent} from "./routes/sign-in-route/sign-in-route.component";
import {MainPageRouteComponent} from "./routes/main-page-route/main-page-route.component";

const routes: Routes = [
  {
    component: HomeRouteComponent,
    path: 'home',
  },
  {
    component: LoginRouteComponent,
    path: 'login',
  },
  {
    component: SignInRouteComponent,
    path: 'signIn',
  },
  {
    component: MainPageRouteComponent,
    path:'main'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
