import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../interface/user";
import {UserService} from "../../services/http/user.service";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  user:User={};
  confirmPassword:string='';
  @Output()
  validInfo : EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private readonly _userService: UserService,
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {

  }

  signIn(signInForm){
    if (this.validateInfoUser()){
      // Llamar al servidor
      this.validInfo.emit({
        first_name:this.user.first_name,
        last_name:this.user.last_name,
        birth_date:this.user.birth_date,
        address:this.user.address,
        phone_number:this.user.phone_number,
        DNI:this.user.DNI,
        emailAddress:this.user.emailAddress,
        password:this.user.password,
        roles:this.user.roles,
        albums:this.user.albums
      });
    }else {
      console.error("No es un numero");
    }
  }
  validateInfoUser():boolean{
    let isValide= false;
    if (this.user.first_name.trim()
      .match('^[a-zA-Z\\s]{2,20}').length > 0 &&
      this.user.last_name.trim()
        .match('^[a-zA-Z\\s]{2,20}').length > 0 &&
      this.user.DNI.trim()
        .match('^[0-9\\s]{2,10}').length > 0 &&
      this.user.address.trim().length > 0 &&
      this.user.phone_number.trim()
        .match('^[0-9\\s]{2,10}').length > 0 &&
      this.user.emailAddress.trim()
        .match('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$').length > 0 &&
      this.user.birth_date.trim().length > 0 &&
      this.user.password.trim().length > 0 &&  this.user.password=== this.confirmPassword
    )
      isValide = true;

    return isValide;
  }

}
