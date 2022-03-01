import { PhotoDetailsModule } from './photo-details/photo-details.module';
import { NgModule } from '@angular/core';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';

@NgModule({
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,
        DarkenOnHoverModule,
        PhotoDetailsModule
    ]
})
export class PhotosModule {}
