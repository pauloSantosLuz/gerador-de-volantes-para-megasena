import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { ApostaControllerService } from '../aposta-controller.service';
import { JogoControllerService } from '../jogo-controller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-informacao-aposta',
  templateUrl: './tela-informacao-aposta.page.html',
  styleUrls: ['./tela-informacao-aposta.page.scss'],
})
export class TelaInformacaoApostaPage implements OnInit {
  @ViewChild("botaoApostaAnterior") botaoAnterior;
  @ViewChild("numeroDezenas") viewNumDezenas;
  @ViewChild("geracaoManual") viewGeracaoManual;
  @ViewChild("geracaoAleatoria") viewGeracaoAleatoria;
  
  proximoUrl:string = "/tela-cadastro-aposta";
  indexApostaPagina:number = 0;

  constructor(private jogoControllerService: JogoControllerService,
    private router:Router) {
      this.indexApostaPagina = jogoControllerService.indexAposta;
    }

  ngOnInit() {
   
  }
  ionViewWillEnter(){
    this.indexApostaPagina = this.jogoControllerService.indexAposta;

    //se esta na primeira aposta desativa o botao de voltar
    if(this.jogoControllerService.indexAposta == 1)
      this.botaoAnterior.disabled = true;
    else
      this.botaoAnterior.disabled = false;

      let indexArray:number = this.jogoControllerService.indexAposta - 1;

      // se estiver editando  mostra as informações ja adicionadas na tela 
      if(this.jogoControllerService.onEdit()){
        this.viewNumDezenas.value = this.jogoControllerService
          .aposta[indexArray].numDezenas;
        let randomica = this.jogoControllerService.aposta[indexArray].aleatoria;
        if(randomica)
          this.viewGeracaoAleatoria.checked = true;
        else
          this.viewGeracaoManual.checked = true;

      }else{
        this.viewNumDezenas.value = 6; // se nao tiver no modo edicao mostra as informaçoes padroes na tela
        this.viewGeracaoManual.checked = true;
    
      }

  }
  ionViewDidLeave(){
    // quando sair da tela atualiza o index
    this.indexApostaPagina = this.jogoControllerService.indexAposta;
  }
  // insere a metadata da aposta
  public apostaMetadata(aleatoria:boolean, numDezenas:number)
  {
    if(this.jogoControllerService.onEdit())
    {
      let index = this.indexApostaPagina - 1;
      this.jogoControllerService.aposta[index].numDezenas = numDezenas;
      this.jogoControllerService.aposta[index].geracaoRandomica = aleatoria;
    }
    else
    {
      let novaAposta = new ApostaControllerService();
      novaAposta.numDezenas = numDezenas;
      novaAposta.geracaoRandomica = aleatoria;
      this.jogoControllerService.aposta.push(novaAposta);      
    }

    //debuga se esta alterando as apostas certas 
    let index;

    if(this.jogoControllerService.onEdit())
      index = this.indexApostaPagina - 1;
    else
      index = this.jogoControllerService.aposta.length - 1;

      console.log(this.jogoControllerService.aposta[index].numDezenas);

    //navega para tela de cadastro
    this.router.navigate(['/', 'tela-cadastro-aposta']);
  }

  //evento onCheck dos radios
  public onCheck(esteRadio:string)
  {
    if(esteRadio == "geracaoManual")
      this.proximoUrl = "/tela-cadastro-aposta";
    if(esteRadio == "geracaoAleatoria")
      this.proximoUrl = "/tela-geracao-randomica-aposta";
      
  }
  //navega para a aposta anterior
  public apostaAnterior()
  {
    this.jogoControllerService.indexAposta--;
    this.ionViewDidLeave();
    this.ionViewWillEnter();
  }

}
