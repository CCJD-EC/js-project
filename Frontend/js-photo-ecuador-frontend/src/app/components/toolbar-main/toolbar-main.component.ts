import { Component, OnInit } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-toolbar-main',
  templateUrl: './toolbar-main.component.html',
  styleUrls: ['./toolbar-main.component.css']
})
export class ToolbarMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hiddenBottom(){
    return document.getElementById("sign-up-bottom-b").style.display="none";
  }

}
