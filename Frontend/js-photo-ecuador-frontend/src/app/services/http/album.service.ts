import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()

export class albumService{

  url = 'http://localhost:1337'

  constructor(
    private readonly _httpClient:HttpClient //Servicio
  ) {
  }
  deleteSomeAlbums(albums) : boolean {
    for (let i=0; i<albums.length;i++){
      this._httpClient.delete(this.url + 'album/' + albums[i].id)
        .subscribe(
          ()=>console.log('OK!'),
          (error)=>console.error('Error found',error),
        );
    }
    return true;
  }
  getAllAlbums(){
    return this._httpClient.get(this.url+'/album');
  }

  getAlbumByID(album_id:number){
    return this._httpClient.get(
      this.url+'/album/'+ album_id
    );
  }
  newAlbum(album){
    return this._httpClient.post(
      this.url + '/album', //URL
      album
    );
  }

  deleteAlbum(album_id:number){
    return this._httpClient.delete(
      this.url+'/album/'+album_id
    );
  }
  updateAlbum(album, album_id){
    return this._httpClient.delete(
      this.url+'/album/'+album_id, album
    );
  }

}
