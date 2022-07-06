import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  saldo = 'O valor do saldo é 0'
  tempo = 'O tempo não para persistência é necessária'
  OlaMundo = 'Olá Mundo!'
  title = 'financeiro';
}
