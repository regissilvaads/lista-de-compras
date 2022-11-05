import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as M from 'materialize-css';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('mobile') sideNav?: ElementRef;

  constructor() { }
  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);
  }

  ngOnInit(): void {
  }

}
