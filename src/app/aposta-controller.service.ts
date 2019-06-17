import { Injectable } from '@angular/core';

@Injectable()
export class ApostaControllerService {
  public numDezenas:number;
  geracaoRandomica:boolean;
  dezenas: string[];

  constructor() {
    console.log("apostaController");
    this.dezenas = [];
  }

  setNumDezenas(numDezenas:number){
    this.numDezenas = numDezenas;
  }

  //setDezenasAposta(dezenas:number[]){
    //this.dezenas = dezenas;
  //}

  setGeracaoRandomica(geracaoRandomica:boolean){
    this.geracaoRandomica = geracaoRandomica;
  }
  mostraDados(){
    console.log(this.numDezenas);
    console.log(this.geracaoRandomica);
  }
}
