import { Component, OnInit, OnDestroy } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {MenuItem} from "primeng/api";
import {AuthService} from "../../services/auth/auth.service";
import {User} from "../../interface/user";
import {Route, Router} from "@angular/router";
import {Photo} from "../../interface/photo";
import {PhotoService} from "../../services/http/photo.service";
import {postService} from "../../services/http/post.service";

@Component({
  selector: 'app-toolbar-main',
  templateUrl: './toolbar-main.component.html',
  styleUrls: ['./toolbar-main.component.scss']
})
export class ToolbarMainComponent implements OnInit , OnDestroy {

  items: MenuItem[];
  user: User = {};
  posts;
  photosArray:any[];
  user_crud: boolean = true;
  user_create_post:boolean= false;
  user_posts:boolean = false;
  user_album:boolean = true;

  constructor(
    public readonly _authService:AuthService,
    private readonly _router: Router,
    private readonly _photoService: PhotoService,
    private readonly _postService: postService
  ) {
  }

  ngOnDestroy(): void {

    }

  ngOnInit() {
    this.fillPost();
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        command: (onclick)=> {
          this.user_crud= true;
          this.user_create_post= false;
          this.user_posts = false;
          this.user_album=true;
        }
      },
      {
        label: 'Administrar',
        icon: 'pi pi-pw pi-file',
        items: [{
          label: 'Usuario',
          icon: 'pi pi-fw pi-plus',
          command: (onclick)=>{
            this.user_crud= false;
            this.user_create_post= true;
            this.user_posts = true;
            this.user_album=true;
          },
        },{
          label: 'Album',
          icon: 'pi pi-fw pi-plus',
          command: (onclick)=>{
            this.user_crud= true;
            this.user_create_post= true;
            this.user_posts = true;
            this.user_album=false;
          }
        }]
      },
      {
        label: 'Perfil',
        icon: 'pi pi-pw pi-user',
        items: [{
          label: 'Editar Cuenta',
          icon: 'pi pi-fw pi-user-edit',
          command: (onclick)=>{
            this.user_crud= false;
            this.user_create_post= true;
            this.user_posts = true;
          }
        }]
      },

      {
        label: 'Salir',
        icon: 'pi pi-sign-out',
        command: onclick =>this.signOut()
      }
      ];
  }
  fillPost(){
    this._postService.getAllPosts()
      .subscribe(
      (data)=>{
        this.posts = data;
        console.error('asas', this.posts)
      },
      (error)=>console.error('Error Found',error),
    );
    this._photoService.getEveryPhotos()
    .subscribe(
        (data:any[]) => {
          let photos:Photo[]=[];
          let photo: Photo={};
          for (let img of data){
            photo.id = img.id;
            photo.alt = img.description;
            photo.previewImageSrc = img.url;
            photo.thumbnailImageSrc = img.url;
            photo.title = img.name;
            photos.push(photo);
            photo={};
          }
          this.photosArray = Array.from(photos);
        },
        (error) => console.error('Error', error)
      );
  }

  hiddenCRUDUser(){
    return this.user_crud= false;
  }
  getArrayPhotos(){
    return this.photosArray;
  }
  signOut(){
    this._authService.isAuthenticate= false;
    this._router.navigate(['/home']);
  }

}
