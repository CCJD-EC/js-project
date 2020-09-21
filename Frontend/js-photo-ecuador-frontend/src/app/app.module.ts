import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeRouteComponent } from './routes/home-route/home-route.component';
import { LoginRouteComponent } from './routes/login-route/login-route.component';
import { SignInRouteComponent } from './routes/sign-in-route/sign-in-route.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ToolbarMainComponent } from './components/toolbar-main/toolbar-main.component';
import { MainPageRouteComponent } from './routes/main-page-route/main-page-route.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeRouteComponent,
    LoginRouteComponent,
    SignInRouteComponent,
    FooterComponent,
    ToolbarComponent,
    SignInFormComponent,
    LoginFormComponent,
    ToolbarMainComponent,
    MainPageRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //Importa el http client
    FormsModule, //TIpos de formulario
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
