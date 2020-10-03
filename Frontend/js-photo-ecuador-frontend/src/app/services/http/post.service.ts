import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()

export class postService{

  url = 'http://localhost:1337'

  constructor(
    private readonly _httpClient:HttpClient //Servicio
  ) {
  }
  deleteSomePosts(posts) : boolean {
    for (let i=0; i<posts.length;i++){
      this._httpClient.delete(this.url + 'post/' + posts[i].id)
        .subscribe(
          ()=>console.log('OK!'),
          (error)=>console.error('Error found',error),
        );
    }
    return true;
  }
  getAllPosts(){
    return this._httpClient.get(this.url+'/post');
  }

  getPostByID(post_id:number){
    return this._httpClient.get(
      this.url+'/post/'+ post_id
    );
  }
  newPost(post){
    return this._httpClient.post(
      this.url + '/post', //URL
      post
    );
  }

  deletePost(post_id:number){
    return this._httpClient.delete(
      this.url+'/post/'+post_id
    );
  }
  updatePost(post, post_id){
    return this._httpClient.delete(
      this.url+'/post/'+post_id, post
    );
  }

}
