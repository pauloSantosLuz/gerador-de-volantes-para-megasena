import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NovoJogoPage } from './novo-jogo.page';
import { JogoControllerService } from '../jogo-controller.service';

const routes: Routes = [
  {
    path: '',
    component: NovoJogoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    NovoJogoPage
  ],
  providers : [
  ],
  declarations: [NovoJogoPage]
})
export class NovoJogoPageModule {}
