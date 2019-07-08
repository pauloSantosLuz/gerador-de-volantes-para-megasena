import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TelaJogoImportadoPage } from './tela-jogo-importado.page';
import { File } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { JogoControllerService } from '../jogo-controller.service';

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
  providers: [
//    JogoControllerService,
    File,
    FileChooser,
    FilePath
    

  ],
  declarations: [TelaJogoImportadoPage]
})
export class TelaJogoImportadoPageModule {}
