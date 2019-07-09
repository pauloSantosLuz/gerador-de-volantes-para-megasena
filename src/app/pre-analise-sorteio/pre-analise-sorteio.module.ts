import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PreAnaliseSorteioPage } from './pre-analise-sorteio.page';
import { JogoControllerService } from '../jogo-controller.service';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';

const routes: Routes = [
  {
    path: '',
    component: PreAnaliseSorteioPage
  }
];

@NgModule({
  imports: [
    NgxMaskIonicModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    File,
    FileChooser,
    FilePath
//    JogoControllerService
  ],
  declarations: [PreAnaliseSorteioPage]
})
export class PreAnaliseSorteioPageModule {}
