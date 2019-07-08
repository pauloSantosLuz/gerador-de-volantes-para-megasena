import { Component, OnInit } from '@angular/core';
import { JogoControllerService } from '../jogo-controller.service';
import { File } from '@ionic-native/file/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-aposta-criada',
  templateUrl: './tela-aposta-criada.page.html',
  styleUrls: ['./tela-aposta-criada.page.scss'],
})
export class TelaApostaCriadaPage implements OnInit {
  apostaTxt:string = "";
  constructor(private jogoControllerService:JogoControllerService,private file: File,private router:Router) {}

  ngOnInit() {
    console.log(this.jogoControllerService.aposta[0].dezenas);
  }
  ionViewDidEnter(){
    for(let aposta in this.jogoControllerService.aposta){
      for(let dezena of this.jogoControllerService.aposta[aposta].dezenas){
        this.apostaTxt += dezena + ", ";
      }
      this.apostaTxt +="\n";
  
    }

  }
  public finalizar(){
    let nomeJogo:string = this.jogoControllerService.nomeJogo + ".txt";
    this.file.writeFile(this.file.externalDataDirectory, nomeJogo,
    this.apostaTxt, {replace: true});
    this.router.navigate(['/', 'menu']);

  }

  public alterarAposta(){
    this.jogoControllerService.indexAposta = 1;
    this.router.navigate(['/', 'tela-informacao-aposta']);
  }
  public sorteio(){
    this.router.navigate(['/', 'pre-analise-sorteio']);
  }

}
