import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { BehaviorSubjectsService } from '@core/services/behavior-subject/behavior-subjects.service';
@Component({
  selector: 'cca-modal-doc',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  providers: [DialogService],
})
export class ModalComponent implements OnInit {
  viewModal: boolean = false;
  viewModalText: boolean = false;
  viewModalForm: boolean = false;
  classModal: { width: string } = { width: '' };
  modalType: string = '';
  ref!: DynamicDialogRef;
  constructor(
    public dialogService: DialogService,
    private behaviorSubject: BehaviorSubjectsService
  ) {}
  ngOnInit() {
    this.behaviorSubject.getCloseModalEvent().subscribe({
      next: () => {
        this.ref.close();
      },
    });
  }
  showDialoog(label: string) {
    this.modalType = label;
    switch (label) {
      case 'Full width modal':
        this.classModal = { width: '95vw' };
        this.viewModalText = true;
        break;
      case 'Large modal':
        this.viewModalForm = true;
        this.ref = this.dialogService.open(ModalFormComponent, {
          header: 'Modal Form',
          styleClass: 'large-modal',
          height: 'fit-contact',
          contentStyle: { overflow: 'auto' },
          baseZIndex: 10000,
        });
        break;
      case 'Standard modal':
        this.classModal = { width: '50vw' };
        this.viewModal = true;
        break;
      default:
        this.classModal = { width: '25vw' };
        this.viewModal = true;
        break;
    }
  }
}
