import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  saldo: any;
  tempo: any;
  OlaMundo: any;
  title: any;
  Clientes: any [] = ['Fabiana', 'Karen', 'Beatriz', 'Felipe', 'Khristopher']
  contructor (){
  this.saldo = 'O valor do saldo é 0';
  this.tempo = 'O tempo não para persistência é necessária';
  this.OlaMundo = 'Olá Mundo!';
  this.title = 'financeiro';
    for (let i=0; i<this.Clientes.length; i++){
      let Clientes = this.Clientes[i];
    }
}
  ngOnInit() {
    
  }
}
