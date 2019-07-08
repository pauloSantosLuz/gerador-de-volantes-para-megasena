import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JogoControllerService } from '../jogo-controller.service';

@Component({
  selector: 'app-tela-analise',
  templateUrl: './tela-analise.page.html',
  styleUrls: ['./tela-analise.page.scss'],
})
export class TelaAnalisePage implements OnInit {
  apostaSorteadaBruta:string;
  apostaSorteada:string[] = [];
  sena:string[] = [];
  quinas:any[] = [];
  quadras: any[] = [];
  constructor(private activateRoute:ActivatedRoute,private jogoControllerService:JogoControllerService) {
    this.recebeApostaSorteada();
    this.procuraSena();
  }

  ngOnInit() {
  }
  private recebeApostaSorteada(){
    this.apostaSorteadaBruta =this.activateRoute.snapshot.params['id'];
    for(let i=0; i < 12; i+=2)
      this.apostaSorteada.push(this.apostaSorteadaBruta.substring(i,i+2));
    console.log(this.apostaSorteada);

  }

  private procuraSena(){
    for(let aposta of this.jogoControllerService.aposta){
      let contDezena:number = 0;
      for(let dezena of aposta.dezenas){
        for(let dezenaSorteada of this.apostaSorteada){
          if(dezenaSorteada == dezena)
            contDezena++;
        }
      }

      if(contDezena == 6){
//        console.log("Aeee milionariooo");
        let i = this.jogoControllerService.aposta.indexOf(aposta);
        aposta.indexAposta = i;
        this.sena = aposta;
        this.jogoControllerService.aposta.slice(i,1);
      }
      if(contDezena == 5){
        let i = this.jogoControllerService.aposta.indexOf(aposta);
        aposta.indexAposta = i;
        this.quinas.push(aposta);
        this.jogoControllerService.aposta.slice(i,1);
      }
      if(contDezena == 4){
        let i = this.jogoControllerService.aposta.indexOf(aposta);
        aposta.indexAposta = i;
        this.quadras.push(aposta);
        this.jogoControllerService.aposta.slice(i,1);
      }
        
    }
  }
}
