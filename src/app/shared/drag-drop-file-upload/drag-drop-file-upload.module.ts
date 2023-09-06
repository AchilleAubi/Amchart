import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropFileUploadComponent } from './drag-drop-file-upload.component';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [
    DragDropFileUploadComponent
  ],
  imports: [
    CommonModule,
    FileUploadModule
  ],
  exports: [
    DragDropFileUploadComponent
  ]
})
export class DragDropFileUploadModule { }
