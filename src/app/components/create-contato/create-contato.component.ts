import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Output() onCancelContatoClick:EventEmitter<null> = new EventEmitter();
  
  novoContato:Contato = {
    nome: "",
    email: "",
    telefones: ["111111", "222222", "333333"]
  }

  constructor() { }

  ngOnInit(): void {
  }

  track(index:number, value:string) {
    return index;
  }

  esconderModal() {
    console.log("Cliquei para fechar o modal")
    this.onCancelContatoClick.emit();
  }

}
