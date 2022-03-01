import { PhotoModule } from './../photo/photo.module';
import { PhotoListModule } from './../photo-list/photo-list.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotoDetailsComponent } from './photo-details.component';

@NgModule({
  declarations: [PhotoDetailsComponent],
  exports: [PhotoDetailsComponent],
  imports: [CommonModule,
  PhotoModule]
})
export class PhotoDetailsModule { }
