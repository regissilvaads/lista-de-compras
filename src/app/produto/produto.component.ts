import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PainelComponent } from '../painel/painel.component';
import * as M from 'materialize-css';
import { Produto } from '../model/produto';
import { NgForm } from '@angular/forms';
import { ProdutoService } from './produto.service';
import { WebStorageUtil } from '../util/web-storage-util';
import { Constants } from '../util/constants';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit, AfterViewInit {
  produto!: Produto;
  // produto: string = '';
  erroForm: boolean = false;
  message: string = '';
  academico: string = '';
  // selecao: Object = {};

  @ViewChild('situacao') formSelect!: ElementRef;
  @ViewChild(PainelComponent)
  painelComponent!: PainelComponent;

  modal = {
    show: false,
    title: '',
    text: '',
  };

  constructor(private route: ActivatedRoute, private router: Router, private produtoService: ProdutoService) {
  }
  ngAfterViewInit(): void {
    // var elems = document.querySelectorAll('select');
    // M.FormSelect.init(elems, {});
    M.FormSelect.init(this.formSelect.nativeElement);
  }

  ngOnInit(): void {
    this.message = '';
    this.produto = new Produto('', '');
    this.route.queryParams.subscribe((params) => {
      if (params['tipo'] == 'academico') {
        this.academico = params['tipo'];
      }
    });
  }

  onSubmit(): Promise<Produto> {
    const p = new Promise<Produto>((resolve, reject) => {
      M.FormSelect.init(this.formSelect.nativeElement);
      var selecao = M.FormSelect.getInstance(this.formSelect.nativeElement);
      this.produto.situacao = selecao.getSelectedValues()[0];
      this.produtoService.save(this.produto)
        .then(() => {
          this.message = `Produto ${this.produto.nome} salvo com sucesso`;
        })
        .catch((err) => {
          this.erroForm = true;
          this.message = err;
        })
        .finally(() => {

        });
    });
    return p;
  }

  // onResetClick() {
  //   this.produto = '';
  //   this.message = '';
  // }

  onDonationEvent(event: boolean) {
    // this.modal.show = event;
    this.modal.title = 'Informação!';
    this.modal.text = `Houve uma alteração na descrição desse produto!`;
  }

  onCloseModal() {
    this.modal.show = false;
  }
}
