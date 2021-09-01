import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contato.service';

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
    telefones: [""]
  }

  cs:ContatoService = new ContatoService();

  constructor() { }

  ngOnInit(): void {
  }

  track(index:number, value:string) {
    return index;
  }

  cancelar() {
    console.log("Cliquei para fechar o modal")
    this.onCancelContatoClick.emit();
  }

  addTelefone():void {
    this.novoContato.telefones.push("")
  }

  removeTelefone(pos:number):void {
    this.novoContato.telefones.splice(pos, 1)
  }

  salvar() {
    this.cs.addContato(this.novoContato);
    if (this.novoContato.nome == "" && this.novoContato.email == "" || this.novoContato.telefones == [""]) {
      alert("Adicione um meio de contato")
    }
    // this.onCancelContatoClick.emit();
    this.novoContato = {
      nome:"",
      email:"",
      telefones: [""]
    }
  }

}
