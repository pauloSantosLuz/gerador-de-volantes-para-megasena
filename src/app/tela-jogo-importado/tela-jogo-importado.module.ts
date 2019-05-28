import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TelaJogoImportadoPage } from './tela-jogo-importado.page';

const routes: Routes = [
  {
    path: '',
    component: TelaJogoImportadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TelaJogoImportadoPage]
})
export class TelaJogoImportadoPageModule {}
