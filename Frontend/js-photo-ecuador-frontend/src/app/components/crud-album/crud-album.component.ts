import { Component, OnInit } from '@angular/core';
import {User} from "../../interface/user";
import {UserService} from "../../services/http/user.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {roleService} from "../../services/http/role.service";
import {albumService} from "../../services/http/album.service";
import {Album} from "../../interface/album";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-crud-album',
  templateUrl: './crud-album.component.html',
  styleUrls: ['./crud-album.component.css']
})
export class CrudAlbumComponent implements OnInit {

  albumDialog: boolean;
  albums;
  album: Album;
  selectedAlbum;
  selectedUser: any[];
  selectedPhoto: any[];
  submitted: boolean;
  isActivated: boolean = false;
  listPhotos;
  listUser;
  listPosts;
  albumsList;


  constructor(
    private readonly _userService: UserService,
    private _messageService: MessageService,
    private _confirmationService: ConfirmationService,
    private readonly _roleService: roleService,
    private readonly _albumService: albumService,
    private readonly _authService: AuthService
  ) {

  }

  ngOnInit() {
    this.fillArray();
  }

  fillArray() {
    this._userService.getUserByID(5)
      .subscribe(
        (data)=>{
          this.listUser = data;
          this.albums = this.listUser.albums;
          console.error('this.albums', this.albums)
          for (let album of this.albums)
            this.listPhotos = album.photos;
        },
        (error)=>console.error('error',error),
      );


  }

  isActivatedRadioB() {
    this.isActivated = true;
  }

  openNew() {
    this.album = {};
    this.submitted = false;
    this.albumDialog = true;
  }

  deleteSelectedsUsers() {
    const isDeleted = this._userService.deleteSomeUser(this.selectedAlbum);
    if (isDeleted) {
      this._confirmationService.confirm(
        {
          message: 'Estas seguro de eliminar los registros seleccionados',
          header: 'Confirmar',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            this.albums = this.albums.filter(val =>
              !this.selectedAlbum.includes(val));
            this.selectedAlbum = null;
            this._messageService.add({
              severity: 'succeed',
              summary: 'Exito!',
              detail: 'ALbums Eliminados', life: 3000
            });
          }
        });
    } else {
      this._confirmationService.confirm(
        {
          message: 'Hubo problemas en la eliminación de los Album',
          header: 'OK',
          icon: 'pi pi-exclamation-circle',
          accept: () => {
            this.albums = this.albums.filter(val =>
              !this.selectedAlbum.includes(val));
            this.selectedAlbum = null;
            this._messageService.add({
              severity: 'failure',
              summary: 'Un Error',
              detail: 'Albums No Fueron Eliminados', life: 3000
            });
          }
        });
    }
  }

  editUser(user:User) {
    this.album = {...user};
    this.albumDialog = true;
  }

  deleteUser(user: User) {
    this._userService.deleteUser(user.id)
      .subscribe(
        () => console.log('Deleted Successful'),
        (error) => console.log('Error', error),
      );
    this._confirmationService.confirm(
      {
        message: 'Estas seguro de eliminar el album' +
          user.first_name + ' ' + user.last_name + '?',
        header: 'Confirmar',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.albums = this.albums.filter(val => val.id !== user.id);
          this.album = {};
          this._messageService.add(
            {severity: 'success', summary: 'Exito!', detail: 'ALbum Eliminado', life: 3000}
          );
        }
      });
  }

  hideDialog() {
    this.albumDialog = false;
    this.submitted = false;
  }
/*

  saveUser() {
    this.submitted = true;
    this.album.roles = [];
    this.album.albums = [];
    this.album.roles = this.rolesSelected.name;
    for (let role of this.selectedUser) this.album.roles.push(role.id);
    for (let album of this.selectedPhoto) this.album.albums.push(album.id);
    try {
      if (this.album.first_name.trim()) {
        const userServiceVar = this._userService;
        if (this.album.id) {
          userServiceVar.updateUser(this.album, this.album.id)
            .subscribe(
              () => console.log('Everything is OK!'),
              (error) => console.error('Error', error),
            );
          this.albums[this.findIndexById(this.album.id)] = this.album;
          this._messageService.add({
            severity: 'success',
            summary: 'Exito!',
            detail: 'Usuario Actualizado', life: 3000
          });
        } else {
          this._userService.newUser(this.album)
            .subscribe(
              () => {
                console.log('Everything is OK')
              },
              (error) => console.error('Error found', error),
            );
          this.fillArray();
          this._messageService.add({
            severity: 'success',
            summary: 'Exito!',
            detail: 'Usuario Creado', life: 3000
          });
        }
        this.albums = [...this.albums];
        this.albumDialog = false;
        this.album = {}
      }
    } catch (error) {
      console.error('Error found', error);
    }

  }

*/

  private findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.albums.length; i++) {
      if (this.albums[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  getUser(album):string{
      return this.listUser.first_name + ' '+ this.listUser.last_name;
  }
  getPhotos(photo):any[]{
    console.error('photo',photo)
    return this.album.photos;
  }
}
