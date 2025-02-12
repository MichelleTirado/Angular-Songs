import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { AddSongComponent } from './components/add-song/add-song.component';
import { ListSongComponent } from './components/list-song/list-song.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ListSongComponent,
    AddSongComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
