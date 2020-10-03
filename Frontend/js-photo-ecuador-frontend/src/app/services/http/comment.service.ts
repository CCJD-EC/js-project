import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()

export class commentService{

  url = 'http://localhost:1337'

  constructor(
    private readonly _httpClient:HttpClient //Servicio
  ) {
  }
  deleteSomeComments(comments) : boolean {
    for (let i=0; i<comments.length;i++){
      this._httpClient.delete(this.url + 'comments/' + comments[i].id)
        .subscribe(
          ()=>console.log('OK!'),
          (error)=>console.error('Error found',error),
        );
    }
    return true;
  }
  getAllComments(){
    return this._httpClient.get(this.url+'/comments');
  }
  getAllCommentsByPost(post_id:number){
    return this._httpClient.get(this.url+'/comments?where={"post":'+post_id+'}');
  }

  getCommentByID(comment_id:number){
    return this._httpClient.get(
      this.url+'/comments/'+ comment_id
    );
  }
  newComment(comment){
    return this._httpClient.post(
      this.url + '/comments', //URL
      comment
    );
  }

  deleteComment(comment:number){
    return this._httpClient.delete(
      this.url+'/comments/'+comment
    );
  }
  updateComment(comment, comment_id){
    return this._httpClient.delete(
      this.url+'/comments/'+comment_id, comment
    );
  }

}
