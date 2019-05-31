import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogoControllerService {
  nomeJogo : string;
  qtdAposta : number;
  
  constructor() { }

  metaDataNovoJogo(nomeJogo:string, qtdAposta:number){
    this.nomeJogo = nomeJogo;
    this.qtdAposta = qtdAposta;

    console.log(this.nomeJogo);
    console.log(this.qtdAposta);
  }
}
