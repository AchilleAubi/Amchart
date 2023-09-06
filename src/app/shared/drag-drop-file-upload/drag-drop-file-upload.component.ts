import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UploadEvent, UploadedFile } from '@core/models/upload';

@Component({
  selector: 'cca-drag-drop-file-upload',
  templateUrl: './drag-drop-file-upload.component.html',
  styleUrls: ['./drag-drop-file-upload.component.scss'],
})
export class DragDropFileUploadComponent {
  @Input() position: 'horizontal' | 'vertical' = 'horizontal';
  @Input() type: string = '';
  @Output() filesSelected: EventEmitter<File[]> = new EventEmitter<File[]>();

  uploadedFiles: UploadedFile[] = [];

  FilesUploaded: File[] = [];

  onUpload(event: UploadEvent) {
    for (let file of event.files) {
      this.FilesUploaded.push(file);
    }
  }

  constructor() {}

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  onDragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.add('drag-over');
  }

  onDragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.remove('drag-over');
  }

  onDrop(event: any) {
    this.onDragLeave(event);

    const files = event.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      this.uploadedFiles.push({ file: files[i], progress: 0 });
    }
  }

  onFileSelected(event: any) {
    const files = event.target.files;
    const selectedFiles: File[] = [];
    for (let i = 0; i < files.length; i++) {
      selectedFiles.push(files[i]);
      this.uploadedFiles.push({ file: files[i], progress: 20 });
    }
    this.filesSelected.emit(selectedFiles);
  }

  getFileTypeIcon(fileName: string): string {
    const extension = fileName.split('.').pop()?.toLowerCase();

    switch (extension) {
      case 'jpeg':
      case 'jpg':
      case 'png':
      case 'gif':
        return '../../../assets/images.png';
      case 'pdf':
        return '../../../assets/pdf.png';
      case 'xlsx':
      case 'xlsm':
      case 'xlsb':
      case 'xltx':
        return '../../../assets/excel.png';
      case 'doc':
      case 'docx':
        return '../../../assets/word.png';
      default:
        return '../../../assets/fichier.png';
    }
  }

  getUploadProgressText(uFile: UploadedFile): string {
    const progress = uFile.progress;
    if (progress === 100) {
      return 'Completed';
    } else {
      return `${progress}% Done`;
    }
  }

  getFileSize(sizeInBytes: number): string {
    const sizeInMB = sizeInBytes / (1024 * 1024);
    return sizeInMB.toFixed(2) + ' MB';
  }

  removeFile(file: UploadedFile) {
    const index = this.uploadedFiles.indexOf(file);
    if (index !== -1) {
      this.uploadedFiles.splice(index, 1);
      const selectedFiles = this.uploadedFiles.map((uFile) => uFile.file);
      this.filesSelected.emit(selectedFiles);
    }
  }

  getUploadProgress(file: UploadedFile): number {
    return file.progress;
  }
}
