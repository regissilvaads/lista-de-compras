import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Produto } from '../model/produto';
import { WebStorageUtil } from '../util/web-storage-util';
import { Constants } from '../util/constants';
import { TransactionPromiseService } from '../../../services/transaction-promise.service';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private transactionPromiseService: TransactionPromiseService) { }

  save(produto: Produto): Promise<Produto> {
    const p = new Promise<Produto>((resolve, reject) => {
      localStorage.setItem('produto', JSON.stringify(produto));
      this.transactionPromiseService.save(produto);
      resolve(produto);
    });
    return p;
  }
}
