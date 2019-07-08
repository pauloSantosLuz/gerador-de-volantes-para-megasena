import { Component, OnInit, ViewChild } from '@angular/core';
import { ApostaControllerService } from '../aposta-controller.service';
import {JogoControllerService} from '../jogo-controller.service';
import { identity } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-cadastro-aposta',
  templateUrl: './tela-cadastro-aposta.page.html',
  styleUrls: ['./tela-cadastro-aposta.page.scss'],
})
export class TelaCadastroApostaPage implements OnInit {
  dezenas : string[] = [];
  dezenasRestantes : number;
  possiveisDezenas : any[] = [];
  proximaUrl:string = "/tela-aposta-criada";
  indexApostaPagina:number;

  constructor(private jogoControllerService : JogoControllerService,
    private router: Router) {
      this.indexApostaPagina = this.jogoControllerService.indexAposta;
}

  ngOnInit() {
  }
  ionViewDidEnter(){
    let index = this.getIndex();
    for(let dezena of this.jogoControllerService.aposta[index].dezenas){
     let element = document.getElementById(dezena);//style.backgroundColor = "green";
     element.style.backgroundColor = "green";
    }

  }
  ionViewWillEnter(){
    let index = this.getIndex();

    //alimenta a array que sera usada como referencia na view para criar os botoes de dezena
    for (var i = 1; i <= 60; i++) {
      if(i < 10)
        this.possiveisDezenas.push("0"+i);
      else
         this.possiveisDezenas.push(i);
    }

    //supostamente aqui deveria retirar dezenas de aposta que o numDezenas foi diminuido na edicao
      this.recalculaDezenasRestantes();
      
      while(this.dezenasRestantes < 0)
      {
          this.jogoControllerService.aposta[index].dezenas.pop();
          this.recalculaDezenasRestantes();  
      }

  }
  //adiciona/remove as dezenas quando elas forem pressionadas na view
  public botao(event)
  {
    let botaoApertado : HTMLButtonElement;
    botaoApertado = event.target;
    
    let index = this.getIndex();

    if(botaoApertado.style.backgroundColor != "green"){
      if(this.dezenasRestantes > 0){
        botaoApertado.style.backgroundColor = "green";
        this.jogoControllerService.aposta[index].dezenas.push(botaoApertado.value); 
        this.recalculaDezenasRestantes();
      }

    }else{
      botaoApertado.style.backgroundColor = "lightgray";
      let indexExclusao = this.jogoControllerService.aposta[index]
        .dezenas.indexOf(botaoApertado.value);
      this.jogoControllerService.aposta[index].dezenas.splice(indexExclusao,1);
      this.recalculaDezenasRestantes();
    }
    
  }
//metodo que recalcula quantas dezenas esta faltando pra completar a aposta
  public recalculaDezenasRestantes(){
    let index = this.getIndex();

    let numDezenas = this.jogoControllerService.aposta[index].numDezenas;
    let length = this.jogoControllerService.aposta[index].dezenas.length; 
    this.dezenasRestantes = numDezenas - length;
  }
  //função acionada quando o botao de avançar é clicado
  public avanca(){
    let index = this.getIndex();

    this.jogoControllerService.aposta[index].dezenas.sort();
    if(this.existeApostaIgual()){
        alert("Já  existe uma aposta com as mesmas dezenas, insira dezenas diferente!");
        return;
    }
    if(this.dezenasRestantes == 0){
      this.jogoControllerService.indexAposta++;

    if(this.jogoControllerService.onUltimaAposta())
        this.router.navigate(['/', 'tela-aposta-criada']);
      else
      this.router.navigate(['/', 'tela-informacao-aposta']);
      
    }
    else
      this.router.navigate(['/', 'tela-cadastro-aposta']);
  }

  public getIndex():number{
    if(this.jogoControllerService.onEdit())
      return this.indexApostaPagina - 1; 
    else
      return this.jogoControllerService.aposta.length - 1;
  }

  public voltar(){
    let index = this.getIndex();
    this.jogoControllerService.aposta[index].dezenas.length = 0;
    this.router.navigate(['/', 'tela-informacao-aposta']);
  }

  public existeApostaIgual():boolean{
    let index = this.getIndex();
    console.log(index);
    let apostaIgual = false;

    for(let i = 0; i < this.jogoControllerService.aposta.length; i++){
      if(i == index)
        continue;

      let NumDezenasDiferente:boolean = this.jogoControllerService.aposta[i].numDezenas
        != this.jogoControllerService.aposta[index].numDezenas;

      if(NumDezenasDiferente)
          continue;
      
      if(apostaIgual)
        continue;
    
      for(let j = 0; j < this.jogoControllerService.aposta[i].dezenas.length; j++){
        apostaIgual = true;
        let dezenaDiferente:boolean = this.jogoControllerService.aposta[i].dezenas[j]
          != this.jogoControllerService.aposta[index].dezenas[j];
        console.log(dezenaDiferente);

        if(dezenaDiferente)
          apostaIgual = false;
      }
    }

    if(this.jogoControllerService.aposta.length == 1)
      apostaIgual = false;

    
    return apostaIgual;
  }
      
}
