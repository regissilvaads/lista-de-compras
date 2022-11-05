import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Lista de Compras';
  coords: any;
  dataAtual: Date;

  constructor() {
    this.dataAtual = new Date();
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.coords = position.coords;
    });
    setInterval(() => {
      this.dataAtual = new Date();
    }, 1000);
  }


}
