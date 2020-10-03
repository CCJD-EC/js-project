import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {$} from "protractor";
import {PhotoService} from "../../services/http/photo.service";
import {Galleria} from "primeng/galleria";
import {Photo} from "../../interface/photo";
import {Post} from "../../interface/post";
import {UserService} from "../../services/http/user.service";
import {Comment} from "../../interface/comment";
import {commentService} from "../../services/http/comment.service";

@Component({
  selector: 'app-album-post',
  templateUrl: './album-post.component.html',
  styleUrls: ['./album-post.component.scss']
})
export class AlbumPostComponent implements OnInit {

  @Input()
  imagesArray:Photo[];
  @Input()
  post;
  comments:any[]=[];
  users:any[]=[];
  val_rating:number=5;
  responsiveOptions:any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  displayBasic: boolean;

  displayBasic2: boolean;

  constructor(
    private readonly _photoService: PhotoService,
    private readonly _userService: UserService,
    private readonly _commentService:commentService)
  {


  }

  ngOnInit() {
    console.error(this.post)
    for (let com of this.post.comments) {
      let comment: any = com;
      this.comments.push(comment)
      let obsUser = this._userService.getUserByID(com.user_created);
      obsUser
        .subscribe(
          (data:any[])=>this.users.push(data),
          (error)=>console.error('Error Found',error),
        )
    }
  }
  getPostInfo(){
    return this.post;
  }

  getPhotoUser(comment){
    for (let user of this.users)
      if (user.id===comment.user_created)
        return user.photo_url;
  }
  getUserName(comment){
    for (let user of this.users)
      if (user.id===comment.user_created)
          return user.first_name +'  ' +user.last_name
  }

}
