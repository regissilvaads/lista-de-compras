import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Produto } from '../model/produto';
import { WebStorageUtil } from '../util/web-storage-util';
import { Constants } from '../util/constants';
import { ProdutoPromiseService } from '../../../services/produto-promise.service';


@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  produtos!: Produto[];
  constructor(private produtoPromiseService: ProdutoPromiseService) { }

  save(produto: Produto): Promise<Produto> {
    const p = new Promise<Produto>((resolve, reject) => {
      localStorage.setItem('produto', JSON.stringify(produto));
      this.produtoPromiseService.save(produto);
      resolve(produto);
    });
    return p;
  }

}
