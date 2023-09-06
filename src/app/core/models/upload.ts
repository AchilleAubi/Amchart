export interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

export interface UploadedFile {
    file: File;
    progress: number;
}