import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {
  @Input()
  photo:string;
  @Input()
  user_name:string;
  @Input()
  description:string;
  constructor() { }

  ngOnInit(): void {
  }

}
