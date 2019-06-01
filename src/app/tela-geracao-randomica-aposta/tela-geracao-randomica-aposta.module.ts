import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TelaGeracaoRandomicaApostaPage } from './tela-geracao-randomica-aposta.page';

const routes: Routes = [
  {
    path: '',
    component: TelaGeracaoRandomicaApostaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TelaGeracaoRandomicaApostaPage]
})
export class TelaGeracaoRandomicaApostaPageModule {}
