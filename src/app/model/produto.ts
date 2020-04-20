export class Produto{

    id: number;
    nome: string;
    preco: number;


    constructor(id?: number, nome?: string, preco?: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    public toString() {
      return this.id + ',' +  this.nome + ' , ' + this.preco;
    }
}
