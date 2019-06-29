import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NovoJogoPageModule } from './novo-jogo/novo-jogo.module';
import { TelaInformacaoApostaPageModule } from './tela-informacao-aposta/tela-informacao-aposta.module';
import { JogoControllerService } from './jogo-controller.service';
import { ApostaControllerService } from './aposta-controller.service';
import { TelaCadastroApostaPageModule } from './tela-cadastro-aposta/tela-cadastro-aposta.module';
import { TelaApostaCriadaPageModule } from './tela-aposta-criada/tela-aposta-criada.module';
import { PreAnaliseSorteioPageModule } from './pre-analise-sorteio/pre-analise-sorteio.module';
import { TelaAnalisePageModule } from './tela-analise/tela-analise.module';
import { TelaGeracaoRandomicaApostaPageModule } from './tela-geracao-randomica-aposta/tela-geracao-randomica-aposta.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    TelaGeracaoRandomicaApostaPageModule,
    TelaAnalisePageModule,
    PreAnaliseSorteioPageModule,
    TelaApostaCriadaPageModule,
    TelaCadastroApostaPageModule,
    TelaInformacaoApostaPageModule,
    NovoJogoPageModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
    ],
  providers: [
    JogoControllerService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
