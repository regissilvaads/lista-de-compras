import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})
export class LandPageComponent implements OnInit {
  imageURL: string = 'https://img.freepik.com/fotos-gratis/fatias-de-frutas-e-bagas-em-fundo-amarelo_23-2148144274.jpg?w=1380&t=st=1667075489~exp=1667076089~hmac=bd88d6e419529418b3d413592230615cc3ae4304cf46f65e872f62e2860f76d7';
  isHidePanel = false;
  constructor() { }

  getBackgroundImage() {
    return {
      'background-image':
        'linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .9)), url(' +
        this.imageURL + ')',
    };
  }

  ngOnInit(): void {
  }

}
