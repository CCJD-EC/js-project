//usuario.service.ts

import{Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService{
  url = 'http://localhost:1337'

  constructor(
    private readonly _httpClient:HttpClient //Servicio
  ) {
  }
  deleteSomeUser(users) : boolean {
    for (let i=0; i<users.length;i++){
      this._httpClient.delete(this.url + 'user/' + users[i].id)
        .subscribe(
          ()=>console.log('OK!'),
          (error)=>console.error('Error found',error),
        );
    }
    return true;
  }
  getAllUsers(){
    return this._httpClient.get(this.url+'/user');
  }

  getUserByID(userID:number){
    return this._httpClient.get(
      this.url+'/user/'+ userID
    );
  }
  newUser(user){
    return this._httpClient.post(
      this.url + '/user', //URL
      user
    );
  }

  deleteUser(userID:number){
    return this._httpClient.delete(
      this.url+'/user/'+userID
    );
  }
  updateUser(user, user_id){
    return this._httpClient.delete(
      this.url+'/user/'+user_id, user
    );
  }


}
