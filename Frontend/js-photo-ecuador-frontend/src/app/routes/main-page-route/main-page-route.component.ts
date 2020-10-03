import { Component, OnInit } from '@angular/core';
import {FooterComponent} from "../../components/footer/footer.component";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/http/user.service";

@Component({
  selector: 'app-main-page-route',
  templateUrl: './main-page-route.component.html',
  styleUrls: ['./main-page-route.component.css']
})
export class MainPageRouteComponent implements OnInit {
  isHidden:boolean = new FooterComponent().isHidden;
  user;
  isHiddenComponent:boolean= true;
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _userService: UserService
  ) { }

  ngOnInit(): void {
/*    const obsRoute = this._activatedRoute.params;
    obsRoute
      .subscribe(
        (parameters)=>{
          const id = Number(parameters.id);
          const obsUsuario = this._userService
            .getUserByID(id);
          obsUsuario
            .subscribe(
              (user:any)=>{
                this.user = user;
              },
              (error)=>{
                console.log('Error', error);
              }
            );
        }
      );*/
  }

}
