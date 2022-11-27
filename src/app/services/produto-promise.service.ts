import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Produto } from "../model/produto";


@Injectable({
  providedIn: 'root',
})
export class ProdutoPromiseService {
  URL = "http://localhost:3000/produto";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) { }

  getById(id: number): Promise<Produto> {
    return this.httpClient.get<Produto>(`${this.URL}/${id}`).toPromise();
  }

  save(produto: Produto): Promise<Produto> {
    return this.httpClient
      .post<Produto>(
        this.URL,
        JSON.stringify(produto),
        this.httpOptions)
      .toPromise();
  }

  get(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(`${this.URL}`);
  }
}



