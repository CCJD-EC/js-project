import { Component, OnInit } from '@angular/core';
import {postService} from "../../services/http/post.service";
import {albumService} from "../../services/http/album.service";
import {AuthService} from "../../services/auth/auth.service";
import {Post} from "../../interface/post";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  post:Post={};
  selectedAlbums2;
  albums: any[];
  countries: any[];

  constructor(
    private readonly _postService: postService,
    private readonly _albumService: albumService,
    private readonly _authService: AuthService
  ) {

    this.albums = [];
    for (let u of this._authService.user)
      this.albums = u.albums;
    console.error('a ala v',this.albums)
  }

  newPost(){
    console.log(this.selectedAlbums2)
    this.post= this.selectedAlbums2;
    const obsPost = this._postService.newPost(this.post)
      obsPost
        .subscribe(
          ()=>console.log('ok'),
          (error)=>console.error('Error Found', error),
        );
  }
  ngOnInit(): void {

    }

}
