import { Component, OnInit } from '@angular/core';
import { JogoControllerService } from '../jogo-controller.service';

@Component({
  selector: 'app-novo-jogo',
  templateUrl: './novo-jogo.page.html',
  styleUrls: ['./novo-jogo.page.scss'],
})
export class NovoJogoPage implements OnInit {

  constructor(private jogoControllerService:JogoControllerService) { }

  ngOnInit() {
  }

  public onAddNovoJogo(nomeJogo:string, qtdAposta:number)
  {
    this.jogoControllerService.metaDataNovoJogo(nomeJogo,qtdAposta);
  }

}
