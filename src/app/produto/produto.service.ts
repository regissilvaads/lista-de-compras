import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Produto } from '../model/produto';
import { WebStorageUtil } from '../util/web-storage-util';
import { Constants } from '../util/constants';

@Injectable()
export class ProdutoService {
  constructor() { }

  // save(produto: Produto): void {
  //   const produtos = WebStorageUtil.get(Constants.PRODUTO_KEY);
  //   produtos.push(produto);
  //   WebStorageUtil.set(Constants.PRODUTO_KEY, produtos);
  // }

  save(produto: Produto): Promise<Produto> {
    const p = new Promise<Produto>((resolve, reject) => {
      const produtos = WebStorageUtil.get(Constants.PRODUTO_KEY);
      produtos.push(produto);
      WebStorageUtil.set(Constants.PRODUTO_KEY, produtos);
      resolve(produto);
    });
    return p;
  }
}
