import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PreAnaliseSorteioPage } from './pre-analise-sorteio.page';
import { JogoControllerService } from '../jogo-controller.service';

const routes: Routes = [
  {
    path: '',
    component: PreAnaliseSorteioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
//    JogoControllerService
  ],
  declarations: [PreAnaliseSorteioPage]
})
export class PreAnaliseSorteioPageModule {}
