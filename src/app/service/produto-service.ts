import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produto } from "../model/produto";
import { Observable } from "rxjs";

@Injectable()
export class produtoService {
  constructor(private http: HttpClient) {}

  //Servico(todos os métodos)
  //Observable( retorno do http)
  //runung(chamada) (service)
  //runable (classes componentes) executando de verdade

            //VO ENTRADA
  public create(produto: Produto): Observable<Produto> {
    //return this.http.post<Produto>('caminho', parametro/obj);
    return this.http.post<Produto>('http://localhost:3000/produto', produto);
  }

  public findAll() {
    return this.http.get<Produto[]>('http://localhost:3000/produto');
  }

  public findByCode(vid: number) {
    // USANDO PIPE return this.http.get<Produto>('http://localhost:3000/produto/' + vid ');
    return this.http.get<Produto>(`http://localhost:3000/produto/' + ${vid} `);
  }

  public delete(vid: number) {
    // USANDO PIPE return this.http.get<Produto>('http://localhost:3000/produto/' + vid ');
    return this.http.delete<Produto>(
      `http://localhost:3000/produto/${vid} `
    );
  }

  public update(vid: number, produto: Produto) {
    return this.http.put<Produto>(
      `http://localhost:3000/produto/${vid} `, produto
    );
  }
}
