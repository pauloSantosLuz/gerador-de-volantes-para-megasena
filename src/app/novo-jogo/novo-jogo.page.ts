import { Component, OnInit } from '@angular/core';
import { JogoControllerService } from '../jogo-controller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-jogo',
  templateUrl: './novo-jogo.page.html',
  styleUrls: ['./novo-jogo.page.scss'],
})
export class NovoJogoPage implements OnInit {

  constructor(private router:Router,private jogoControllerService:JogoControllerService) { }

  ngOnInit() {
  }

  public onAddNovoJogo(nomeJogo:string, qtdAposta:number)
  {
    if(nomeJogo == ""){
      alert("É preciso inserir o nome do jogo");
      return;
    }
    this.jogoControllerService.metaDataNovoJogo(nomeJogo,qtdAposta);
    this.router.navigate(['/', 'tela-informacao-aposta']);

  }

}
