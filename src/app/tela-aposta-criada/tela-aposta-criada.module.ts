import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TelaApostaCriadaPage } from './tela-aposta-criada.page';

const routes: Routes = [
  {
    path: '',
    component: TelaApostaCriadaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TelaApostaCriadaPage]
})
export class TelaApostaCriadaPageModule {}
