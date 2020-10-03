import { Component, OnInit } from '@angular/core';
import {User} from "../../interface/user";
import {users} from "dropbox";
import {UserService} from "../../services/http/user.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {roleService} from "../../services/http/role.service";
import {albumService} from "../../services/http/album.service";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  userDialog: boolean;
  users;
  user: User;
  selectedUsers;
  selectedRoles: any[];
  selectedAlbums: any[];
  submitted: boolean;
  isActivated: boolean = false;
  listRoles;
  listAlbums;
  RolesList;
  rolesSelected;
  albumsList;
  albumsSelected;

  constructor(
    private readonly _userService: UserService,
    private _messageService: MessageService,
    private _confirmationService: ConfirmationService,
    private readonly _roleService: roleService,
    private readonly _albumService: albumService
  ) {

  }

  ngOnInit() {
    this.fillArray();
  }

  fillArray() {
    this._roleService.getAllRoles()
      .subscribe(
        (data) => this.listRoles = data,
        (error) => console.error('Error', error)
      );
    this._albumService.getAllAlbums()
      .subscribe(
        (data) => this.listAlbums = data,
        (error) => console.error('Error', error)
      );
    this._userService.getAllUsers()
      .subscribe(
        (users) => {
          this.users = users;
        },
        (error) => console.error('Error', error),
      );
  }

  isActivatedRadioB() {
    this.isActivated = true;
  }

  openNew() {
    this.user = {};
    this.submitted = false;
    this.userDialog = true;
  }

  deleteSelectedsUsers() {
    const isDeleted = this._userService.deleteSomeUser(this.selectedUsers);
    if (isDeleted) {
      this._confirmationService.confirm(
        {
          message: 'Estas seguro de eliminar los registros seleccionados',
          header: 'Confirmar',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            this.users = this.users.filter(val =>
              !this.selectedUsers.includes(val));
            this.selectedUsers = null;
            this._messageService.add({
              severity: 'succeed',
              summary: 'Exito!',
              detail: 'Usuarios Eliminados', life: 3000
            });
          }
        });
    } else {
      this._confirmationService.confirm(
        {
          message: 'Hubo problemas en la eliminación de los usuarios',
          header: 'OK',
          icon: 'pi pi-exclamation-circle',
          accept: () => {
            this.users = this.users.filter(val =>
              !this.selectedUsers.includes(val));
            this.selectedUsers = null;
            this._messageService.add({
              severity: 'failure',
              summary: 'Un Error',
              detail: 'Usuarios No Fueron Eliminados', life: 3000
            });
          }
        });
    }
  }

  editUser(user:User) {
    this.user = {...user};
    this.userDialog = true;
  }

  deleteUser(user: User) {
    this._userService.deleteUser(user.id)
      .subscribe(
        () => console.log('Deleted Successful'),
        (error) => console.log('Error', error),
      );
    this._confirmationService.confirm(
      {
        message: 'Estas seguro de eliminar el usuario' +
          user.first_name + ' ' + user.last_name + '?',
        header: 'Confirmar',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.users = this.users.filter(val => val.id !== user.id);
          this.user = {};
          this._messageService.add(
            {severity: 'success', summary: 'Exito!', detail: 'Usuario Eliminado', life: 3000}
          );
        }
      });
  }

  hideDialog() {
    this.userDialog = false;
    this.submitted = false;
  }

  saveUser() {
    this.submitted = true;
    this.user.roles = [];
    this.user.albums = [];
    this.user.roles = this.rolesSelected.name;
    for (let role of this.selectedRoles) this.user.roles.push(role.id);
    for (let album of this.selectedAlbums) this.user.albums.push(album.id);
    try {
      if (this.user.first_name.trim()) {
        const userServiceVar = this._userService;
        if (this.user.id) {
          userServiceVar.updateUser(this.user, this.user.id)
            .subscribe(
              () => console.log('Everything is OK!'),
              (error) => console.error('Error', error),
            );
          this.users[this.findIndexById(this.user.id)] = this.user;
          this._messageService.add({
            severity: 'success',
            summary: 'Exito!',
            detail: 'Usuario Actualizado', life: 3000
          });
        } else {
          this._userService.newUser(this.user)
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
        this.users = [...this.users];
        this.userDialog = false;
        this.user = {}
      }
    } catch (error) {
      console.error('Error found', error);
    }

  }


  private findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }
}
