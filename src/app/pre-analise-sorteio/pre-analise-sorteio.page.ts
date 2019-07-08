import { Component, OnInit, ViewChild } from '@angular/core';
import { JogoControllerService } from '../jogo-controller.service';

@Component({
  selector: 'app-pre-analise-sorteio',
  templateUrl: './pre-analise-sorteio.page.html',
  styleUrls: ['./pre-analise-sorteio.page.scss'],
})
export class PreAnaliseSorteioPage implements OnInit {
  constructor(private jogoControllerService:JogoControllerService) { }

  ngOnInit() {
  }
  
}
