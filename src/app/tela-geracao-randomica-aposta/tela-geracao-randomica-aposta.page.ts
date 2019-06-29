import { Component, OnInit, ViewChild } from '@angular/core';
import { JogoControllerService } from '../jogo-controller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-geracao-randomica-aposta',
  templateUrl: './tela-geracao-randomica-aposta.page.html',
  styleUrls: ['./tela-geracao-randomica-aposta.page.scss'],
})
export class TelaGeracaoRandomicaApostaPage implements OnInit {
  @ViewChild("incluiDezena") incluiDezena;
  @ViewChild("excluiDezena") excluiDezena;

  dezenas : string[] = [];
  dezenasRestantes : number;
  possiveisDezenas : string[] = [];
  dezenasPotenciais: string[] = [];
  proximaUrl:string = "/tela-aposta-criada";
  indexApostaPagina:number;

  constructor(private jogoControllerService:JogoControllerService, private router:Router) {
    this.indexApostaPagina = this.jogoControllerService.indexAposta;

   }

  ngOnInit() {
  }
// atualiza os botões com as dezenas ja inseridas pra edição
  ionViewDidEnter(){
    let index = this.getIndex();

    for(let dezena of this.jogoControllerService.aposta[index].dezenas){
      let element = document.getElementById(dezena);//style.backgroundColor = "green";
      element.style.backgroundColor = "green";
    }

  }

  ionViewWillEnter(){
    //recalcula index para fins logico
    let index = this.getIndex();

    //alimenta a array que sera usada como referencia na view para criar os botoes de dezena
    for (var i = 1; i <= 60; i++) {
      if(i < 10)
        this.possiveisDezenas.push("0"+i);
      else
         this.possiveisDezenas.push(i.toString());
    }
    for(let dezena of this.possiveisDezenas)
      this.dezenasPotenciais.push(dezena);

        //supostamente aqui deveria retirar dezenas de aposta que o numDezenas foi diminuido na edicao
    this.recalculaDezenasRestantes();
      
    while(this.dezenasRestantes < 0)
    {
      this.jogoControllerService.aposta[index].dezenas.pop();
      this.recalculaDezenasRestantes();  
    }
  
  }
  ionViewDidLeave(){
  }
  //adiciona/remove as dezenas quando elas forem pressionadas na view
  public botao(event)
  {
    let botaoApertado : HTMLButtonElement;
    botaoApertado = event.target;
    this.recalculaDezenasRestantes();

    let index = this.getIndex();

    if(this.incluiDezena.checked)
    {
      if(botaoApertado.style.backgroundColor != "green"){
        if(this.dezenasRestantes <= 0){
          alert("Ação invalida. Todas as dezenas da aposta foram preenchidas");
          return;
        }
    
        botaoApertado.style.backgroundColor = "green";
        this.jogoControllerService.aposta[index].dezenas.push(botaoApertado.value); 
        this.excluiPossiveisDezenas(botaoApertado.value)
        this.recalculaDezenasRestantes();
        
      }else{
        botaoApertado.style.backgroundColor = "lightgray";

        this.dezenasPotenciais.push(botaoApertado.value);

        let indexExclusao = this.jogoControllerService.aposta[index]
          .dezenas.indexOf(botaoApertado.value);
        console.log(this.jogoControllerService.aposta[index].dezenas[indexExclusao]);
        this.jogoControllerService.aposta[index].dezenas.splice(indexExclusao,1);
        this.recalculaDezenasRestantes();
      }

    }
    if(this.excluiDezena.checked)
    {
      if(botaoApertado.style.backgroundColor != "red"){
        if(this.dezenasRestantes >= this.dezenasPotenciais.length){
          alert("Ação invalida. As dezenas em potenciais para geração"
           + " e o numero de dezenas restantes deve ser igual ");
          return;
        }
        
        botaoApertado.style.backgroundColor = "red";
        this.excluiPossiveisDezenas(botaoApertado.value)

      }else{
        botaoApertado.style.backgroundColor = "lightgray";
        this.dezenasPotenciais.push(botaoApertado.value);
      }

    }
    
  }
//metodo que recalcula quantas dezenas esta faltando pra completar a aposta
public recalculaDezenasRestantes(){
  let index = this.getIndex();

  let numDezenas = this.jogoControllerService.aposta[index].numDezenas;
  let length = this.jogoControllerService.aposta[index].dezenas.length; 
  this.dezenasRestantes = numDezenas - length;
}

public excluiPossiveisDezenas(valor:string){
  let indexExclusao = this.dezenasPotenciais.indexOf(valor);
  this.dezenasPotenciais.splice(indexExclusao,1);

}

public geraAposta(){
  let index = this.getIndex();  
  
  this.recalculaDezenasRestantes();

  while(this.dezenasRestantes > 0)
  {
    let tamanhoArray = this.dezenasPotenciais.length;

    let indexExclusao = Math.floor(Math.random() * tamanhoArray) + 0;  
    this.jogoControllerService.aposta[index].dezenas.push(this.dezenasPotenciais.splice(indexExclusao,1).toString());

    this.recalculaDezenasRestantes();  
  }

  let respostaConfirm = confirm("Dezenas gerada para a aposta: "+ 
    this.jogoControllerService.aposta[index].dezenas+ ". Deseja continuar?");

  if(respostaConfirm)
    this.avanca();
  else{
    for(let dezena of this.jogoControllerService.aposta[index].dezenas){
      let element = document.getElementById(dezena);
      element.style.backgroundColor = "green";
    }
  }


}

public avanca(){
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

public voltar(){
  let index = this.getIndex();
  this.jogoControllerService.aposta[index].dezenas.length = 0;
  this.router.navigate(['/', 'tela-informacao-aposta']);
}

public getIndex():number{
  if(this.jogoControllerService.onEdit())
    return this.indexApostaPagina - 1; 
  else
    return this.jogoControllerService.aposta.length - 1;
}

}

