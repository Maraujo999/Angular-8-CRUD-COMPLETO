
import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { produtoService } from '../service/produto-service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Produto; //(UNIDADE) NÃO TENHO ESPAÇO
  produtos: Produto[] = [];
  constructor(private service: produtoService) {
    this.produto = new Produto();
    //sempre dando espaco
  }

  ngOnInit() {
    //ativa a lista
    this.listar();
  }

  //gravei e limpei o formulario
  public gravar() {
    this.service.create(this.produto).subscribe(res => {
      console.log('Produto Gravado com Sucesso', this.produto);
      this.produto = new Produto();
      this.listar();
    });
  }

  public listar() {
    this.service.findAll().subscribe(res => {
      this.produtos = res;
      console.log(this.produtos);
    });
  }

  public excluir(cod: number) {
      this.service.delete(cod).subscribe(res => {
        this.listar();
      });
  }

  public alterar(cod: number, produto: Produto) {
    this.service.update(cod, produto).subscribe(res => {
      this.listar();
    });
  }
}
