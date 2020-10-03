//usuario.service.ts

import{Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PhotoService{
  url = 'http://localhost:1337'

  constructor(
    private readonly _httpClient:HttpClient //Servicio
  ) {
  }
  getEveryPhotos(){
    return this._httpClient.get(this.url+'/photo');
  }

  //Obtener por ID

  ObtenerUnoPorId(idUsuario:number){
    return this._httpClient.get(
      this.url+'/Usuario/'+ idUsuario
    );
  }
  //POST /Usuario
  crear(user){
    return this._httpClient.post(
      this.url + '/Usuario', //URL
      user
    );
  }
  //Eliminar usuario

  eliminar(id:number){
    return this._httpClient.delete(
      this.url+'/Usuario/'+id
    );
  }

}
