import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TelaInformacaoApostaPage } from './tela-informacao-aposta.page';

const routes: Routes = [
  {
    path: '',
    component: TelaInformacaoApostaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TelaInformacaoApostaPage]
})
export class TelaInformacaoApostaPageModule {}
