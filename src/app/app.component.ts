import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('mobile') sideNav?: ElementRef;

  title = 'Lista de Compras';

  ngAfterViewInit(): void {
    // alert(M.Sidenav);
    M.Sidenav.init(this.sideNav?.nativeElement);
  }
}
