import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  user = {
    first_name:'',
    last_name:'',
    DNI:'',
    address:'',
    phone_number:'',
    email:'',
    birth_date:'',
    password:'',
    confirmPassword:'',
  }
  constructor(

  ) { }

  ngOnInit(): void {
  }
  signIn(signInForm){

  }

}
