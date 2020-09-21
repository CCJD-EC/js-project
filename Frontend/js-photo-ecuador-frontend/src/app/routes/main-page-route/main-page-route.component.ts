import { Component, OnInit } from '@angular/core';
import {FooterComponent} from "../../components/footer/footer.component";

@Component({
  selector: 'app-main-page-route',
  templateUrl: './main-page-route.component.html',
  styleUrls: ['./main-page-route.component.css']
})
export class MainPageRouteComponent implements OnInit {
  isHidden:boolean = new FooterComponent().isHidden;
  constructor() { }

  ngOnInit(): void {
  }

}
