import { Component, OnInit, ViewChild } from '@angular/core';
import { JogoControllerService } from '../jogo-controller.service';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { ApostaControllerService } from '../aposta-controller.service';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-pre-analise-sorteio',
  templateUrl: './pre-analise-sorteio.page.html',
  styleUrls: ['./pre-analise-sorteio.page.scss'],
})
export class PreAnaliseSorteioPage implements OnInit {
  linhasConteudoImportado:string[] = [];
  conteudoJogoImportado:string = "";

  constructor(private file:File,private filePath:FilePath,private fileChooser:FileChooser,private jogoControllerService:JogoControllerService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    if(this.jogoControllerService.nomeJogo == undefined)
      this.abrirArquivo();
  }
  public abrirArquivo(){
    this.fileChooser.open()
    .then(uri => {
      this.filePath.resolveNativePath(uri)
        .then(filePath => {
          let path = filePath.substring(0, filePath.lastIndexOf('/'));
          let file = filePath.substring(filePath.lastIndexOf('/')+1, 
            filePath.length);
            let nomeJogo = file.toString().split(".txt",1);
            this.jogoControllerService.nomeJogo = nomeJogo[0].trim();
            this.file.readAsText(path,file)
              .then(text => {this.conteudoJogoImportado = text.toString();
                let quebraLinha = 0;
                for(let i = 0; i < this.conteudoJogoImportado.length; i++){
                  if(this.conteudoJogoImportado[i] == "\n")
                    quebraLinha++;
                }
                this.linhasConteudoImportado = this.conteudoJogoImportado.split("\n",quebraLinha);
                this.carregaJogo();            
              })
              .catch(err => alert("Arquivo não pode ser lido"));      
        }).catch(err => alert(err))
    }).catch(e => console.log(e));
    
  }

  public mostrarLinhas(){
    this.carregaJogo();
  }

  public carregaJogo(){
    for(let linha of this.linhasConteudoImportado){
      let aposta:ApostaControllerService = new ApostaControllerService();
      aposta.numDezenas = linha.length/4;
      for(let dezena of linha.split(",",(linha.length)/4))
        aposta.dezenas.push(dezena.trim());
      this.jogoControllerService.aposta.push(aposta);
      for(let i = 0; i < this.jogoControllerService.aposta.length; i ++)
        this.jogoControllerService.aposta[i].indexAposta = this.jogoControllerService.aposta[i].length + 1;
      
      this.jogoControllerService.qtdAposta = this.jogoControllerService.aposta.length;
    }
  }

  public escolheJogo(){
    this.jogoControllerService.aposta.length = 0;
    this.abrirArquivo();
  }
  
}
