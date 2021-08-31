import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

const BASE_DE_CONTATOS:Contato[] = [
  {
    nome: "Jonathan Brant 1",
    email: "jonathan@teste.com",
    telefones: ["11111-1111", "12345-6789"]
  },
  {
    nome: "Jonathan Brant 2",
    email: "jonathan@teste.com",
    telefones: ["22222-2222"]
  },
  {
    nome: "Jonathan Brant 3",
    email: "jonathan@teste.com",
    telefones: ["33333-3333"]
  },
  {
    nome: "Jonathan Brant 4",
    email: "jonathan@teste.com",
    telefones: ["44444-4444"]
  },
  {
    nome: "Jonathan Brant 5",
    email: "jonathan@teste.com",
    telefones: ["55555-5555"]
  },
  {
    nome: "Jonathan Brant 6",
    email: "jonathan@teste.com",
    telefones: ["66666-6666"]
  },
  {
    nome: "Jonathan Brant 7",
    email: "jonathan@teste.com",
    telefones: ["77777-7777"]
  },
  {
    nome: "Jonathan Brant 8",
    email: "jonathan@teste.com",
    telefones: ["88888-8888"]
  },
  {
    nome: "Jonathan Brant 9",
    email: "jonathan@teste.com",
    telefones: ["99999-9999"]
  },
  {
    nome: "Jonathan Brant 0",
    email: "jonathan@teste.com",
    telefones: ["00000-0000"]
  },
]

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor() { }

  getContatos():Contato[]{
    return BASE_DE_CONTATOS
  };

  addContato(c:Contato):void {
    BASE_DE_CONTATOS.push(c)
  }
}
