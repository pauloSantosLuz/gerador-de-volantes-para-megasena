import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'novo-jogo', loadChildren: './novo-jogo/novo-jogo.module#NovoJogoPageModule' },
  { path: 'tela-informacao-aposta', loadChildren: './tela-informacao-aposta/tela-informacao-aposta.module#TelaInformacaoApostaPageModule' },
  { path: 'tela-cadastro-aposta', loadChildren: './tela-cadastro-aposta/tela-cadastro-aposta.module#TelaCadastroApostaPageModule' },
  { path: 'tela-aposta-criada', loadChildren: './tela-aposta-criada/tela-aposta-criada.module#TelaApostaCriadaPageModule' },
  { path: 'tela-jogo-importado', loadChildren: './tela-jogo-importado/tela-jogo-importado.module#TelaJogoImportadoPageModule' },
  { path: 'pre-analise-sorteio', loadChildren: './pre-analise-sorteio/pre-analise-sorteio.module#PreAnaliseSorteioPageModule' },
  { path: 'tela-analise', loadChildren: './tela-analise/tela-analise.module#TelaAnalisePageModule' },
  { path: 'tela-geracao-randomica-aposta', loadChildren: './tela-geracao-randomica-aposta/tela-geracao-randomica-aposta.module#TelaGeracaoRandomicaApostaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
