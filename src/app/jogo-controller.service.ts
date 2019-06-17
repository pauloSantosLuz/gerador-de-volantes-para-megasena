import { Injectable } from '@angular/core';
//import { AnyRecord } from 'dns';

@Injectable()
export class JogoControllerService {
  nomeJogo : string;
  qtdAposta : number;
  aposta: any[]; 
  indexAposta:number;
  constructor() {
    this.indexAposta = 1;
    this.aposta = [];
    console.log("jogoController");
   }

  metaDataNovoJogo(nomeJogo:string, qtdAposta:number){
    this.nomeJogo = nomeJogo;
    this.qtdAposta = qtdAposta;
  }

  onEdit():boolean{
    if(this.aposta[this.indexAposta - 1] != undefined)
      return true;
    return false;
  }

  onUltimaAposta():boolean{
    if(this.indexAposta > this.qtdAposta && this.aposta.length == this.qtdAposta)
      return true;
    return false;
  }
}
