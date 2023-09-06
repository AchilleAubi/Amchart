import { Component } from '@angular/core';
import { BehaviorSubjectsService } from '@core/services/behavior-subject/behavior-subjects.service';

@Component({
  selector: 'cca-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss'],
})
export class ModalFormComponent {
  constructor(private behaviorSubject: BehaviorSubjectsService) {}
  closeDialog(event: string) {
    this.behaviorSubject.setCloseModalEvent(event);
  }
}
