import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  @Input() objeto: string = '';
  @Output() evento = new EventEmitter<boolean>();
  backgroundColor = 'blue';
  constructor() { }

  ngOnChanges(): void {
    setTimeout(() => {
      this.evento.emit(true);
    }, 3000);
  }

  ngOnInit(): void {
  }

}
