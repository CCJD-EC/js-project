import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../http/user.service";

@Injectable()
export class AuthService{
  isAuthenticate= false;
  user;
  url = 'http://localhost:1337';
  role= [
    'user',
    'admin',
    'super'
  ];

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  login(email:string, password:string){
    return this._httpClient.get(
      this.url+'/user?emailAddress='+email+'&password='+password
    )
  }
  checkLogin(email:string){
    return this._httpClient.get(
      this.url+'/user?emailAddress='+email
    )
  }
}
