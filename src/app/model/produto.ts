export class Produto {
  static readonly WITHDRAW_TYPE = 'withdraw';
  static readonly PRODUTO_TYPE = 'produto';
  public id!: string;
  nome!: string;
  situacao!: string;


  constructor(nome: string, situacao: string) {
    this.nome = nome;
    this.situacao = situacao;
  }

  // public static clone(produto: Produto) {
  //   let p: Produto = new Produto(produto.id, produto.nome, produto.situacao);
  //   return p;
  // }
  // /**
  //  * Transforma um objeto pego da API para a versão salva no WebStorage
  //  * @param produto
  //  * @returns
  //  */

  // public static toWS(produto: Produto) {
  //   let p: Produto = new Produto(produto.id, produto.nome, produto.situacao);
  //   return p;
  // }
}
