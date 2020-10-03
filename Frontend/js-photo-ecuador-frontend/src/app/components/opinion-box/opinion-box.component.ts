import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../interface/comment";
import {commentService} from "../../services/http/comment.service";
import {Post} from "../../interface/post";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-opinion-box',
  templateUrl: './opinion-box.component.html',
  styleUrls: ['./opinion-box.component.css']
})
export class OpinionBoxComponent implements OnInit {

  @Input()
  post;
  comment: Comment={};
  description;


  constructor(
    private readonly _commentService: commentService,
    private readonly _authService: AuthService
  ) { }

  ngOnInit(): void {
  }
  newComment(){
    console.error('sadaskdjlas',this.post.id)
    this.comment.post = this.post.id;
    this.comment.description= this.description;
    this.comment.user_created = this._authService.user[0].id;
   const obsComment = this._commentService.newComment(this.comment);
   obsComment
     .subscribe(
       ()=>alert('Comentario Creado'),
       (error)=>console.error('Error Found', error),
     );
   this.description='';
  }

}
