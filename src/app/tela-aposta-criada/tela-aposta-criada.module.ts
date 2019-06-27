import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TelaApostaCriadaPage } from './tela-aposta-criada.page';
import { JogoControllerService } from '../jogo-controller.service';
import { File } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

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
  providers: [
    File,
    FileChooser
    //JogoControllerService
  ],
  declarations: [TelaApostaCriadaPage]
})
export class TelaApostaCriadaPageModule {}
