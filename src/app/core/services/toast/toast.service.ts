import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) { }

  show(key: string, severity: string, summary: string, detail: string, styleClass: string) {
    this.messageService.add({ key: key, severity: severity, summary: summary, detail: detail, styleClass: styleClass });
  }

  showMultiple(data: any[]) {
    this.messageService.addAll(data);
  }

}
