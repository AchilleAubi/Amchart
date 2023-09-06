import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cca-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  handleFilesSelected(files: File[]) {
    console.log('Fichiers sélectionnés :', files);
  }

  handleFileUpload(selectedFile: File) {
    console.log('Fichier sélectionné:', selectedFile);
  }
}
