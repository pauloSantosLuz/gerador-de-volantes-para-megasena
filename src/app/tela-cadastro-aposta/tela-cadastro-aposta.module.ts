import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TelaCadastroApostaPage } from './tela-cadastro-aposta.page';

const routes: Routes = [
  {
    path: '',
    component: TelaCadastroApostaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TelaCadastroApostaPage]
})
export class TelaCadastroApostaPageModule {}
