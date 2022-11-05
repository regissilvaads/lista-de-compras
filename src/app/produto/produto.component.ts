import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PainelComponent } from '../painel/painel.component';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  produto: string = '';
  erroForm: boolean = false;
  message: string = '';
  academico: string = '';

  @ViewChild(PainelComponent)
  painelComponent!: PainelComponent;

  modal = {
    show: false,
    title: '',
    text: '',
  };

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.route.queryParams.subscribe((params) => {
      if (params['tipo'] == 'academico') {
        this.academico = params['tipo'];
      }
    });
  }

  onSubmit() {
    if (this.produto === '') {
      this.erroForm = true;
      this.message = 'Opps!!! O produto deve ser preenchido.';
      return;
    }

    this.erroForm = false;
    this.message = `Produto ${this.produto} salvo com sucesso!`;
    return;
  }

  onResetClick() {
    this.produto = '';
    this.message = '';
  }

  onDonationEvent(event: boolean) {
    this.modal.show = event;
    this.modal.title = 'Informação!';
    this.modal.text = `Houve uma alteração na descrição desse produto!`;
  }

  onCloseModal() {
    this.modal.show = false;
  }
}
