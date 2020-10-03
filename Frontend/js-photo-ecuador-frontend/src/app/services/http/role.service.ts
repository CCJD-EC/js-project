import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()

export class roleService{

  url = 'http://localhost:1337'

  constructor(
    private readonly _httpClient:HttpClient //Servicio
  ) {
  }
  deleteSomeRoles(roles) : boolean {
    for (let i=0; i<roles.length;i++){
      this._httpClient.delete(this.url + 'role/' + roles[i].id)
        .subscribe(
          ()=>console.log('OK!'),
          (error)=>console.error('Error found',error),
        );
    }
    return true;
  }
  getAllRoles(){
    return this._httpClient.get(this.url+'/role');
  }

  getRoleByID(role_id:number){
    return this._httpClient.get(
      this.url+'/role/'+ role_id
    );
  }
  newRole(role){
    return this._httpClient.post(
      this.url + '/role', //URL
      role
    );
  }

  deleteRole(role_id:number){
    return this._httpClient.delete(
      this.url+'/role/'+role_id
    );
  }
  updateRole(role, role_id){
    return this._httpClient.delete(
      this.url+'/role/'+role_id, role
    );
  }

}
