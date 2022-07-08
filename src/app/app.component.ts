import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  saldo = 'O valor do saldo é 0';
  tempo = 'O tempo não para persistência é necessária';
  OlaMundo = 'Olá Mundo!';
  title = 'financeiro';
  

  Clientes: any [] = ['Fabiana', 'Karen', 'Beatriz', 'Felipe', 'Khristopher']
  contructor (){

   
}
  ngOnInit() {
   
    
  }
}
