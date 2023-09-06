import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'cca-alert-component',
  templateUrl: './alert-component.component.html',
  styleUrls: ['./alert-component.component.scss'],
  providers: [ConfirmationService],
})
export class AlertComponentComponent implements OnInit {
  constructor(private confirmationService: ConfirmationService) {}
  showCancelBtn: boolean = false;
  showModal: boolean = false;
  btnTitle: string = 'Ok';
  alertContent: string = '';
  confirmBtnClass: string = '';
  ngOnInit() {}

  openPopup(type: string) {
    switch (type) {
      case 'Error':
        this.alertContent = `
        <div class="rounded-t flex flex-column justify-center items-center p-3"><br/>
          <i class="pi pi-times bg-error rounded-full p-1 text-white"></i>
          <p class="text-gray-500 font-bold mt-2">Heads up!</p><br/>
          <p class="text-18 text-center w-10">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p> 
  </div>`;
        this.confirmBtnClass =
          'bg-error border-transparent hover:bg-red-400 my-2';
        break;
      case 'Info':
        this.alertContent = `
        <div class="rounded-t flex flex-column justify-center items-center p-3"><br/>
          <i class="pi pi-info bg-info rounded-full p-1 text-white "></i>
          <p class="text-gray-500 font-bold mt-2">Heads up!</p><br/>
          <p class="text-18 text-center w-10">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p> 
  </div>`;
        this.confirmBtnClass =
          'bg-info border-transparent enabled:hover:bg-info hover:bg-info my-2';
        break;
      case 'Warn':
        this.alertContent = `
        <div class="rounded-t flex flex-column justify-center items-center p-3"><br/>
          <i class="pi pi-exclamation-triangle  rounded-full p-1 text-warn " ></i>
          <p class="text-gray-500 font-bold mt-2">Heads up!</p><br/>
          <p class="text-18 text-center w-10">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p> 
  </div>`;
        this.confirmBtnClass =
          ' bg-warn border-transparent enabled:hover:bg-warn hover:bg-warn my-2';
        break;
      case 'Success':
        this.alertContent = `
        <div class="rounded-t flex flex-column justify-center items-center p-3"><br/>
          <i class="pi pi-check bg-success rounded-full p-1 text-white "></i>
          <p class="text-gray-500 font-bold mt-2">Heads up!</p><br/>
          <p class="text-18 text-center w-10">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p> 
  </div>`;
        this.confirmBtnClass =
          'bg-success border-transparent enabled:hover:bg-success hover:bg-success my-2';
        break;
      case 'Delete popup':
        this.alertContent = `
        <div class="rounded-t flex flex-column justify-center items-center p-3"><br/>
          <i class="pi pi-times bg-error rounded-full p-1 text-white "></i>
          <p class="text-gray-500 font-bold mt-2">Delete an organisation</p><br/>
          <p class="text-18 text-center w-10">Are you sure you want to delete this organisation?</p> 
          <p class="text-18 text-center w-10">You won't be able to restore it again.</p> 
  </div>`;
        this.confirmBtnClass =
          'bg-error border-transparent hover:bg-red-400 my-2 px-3 py-[0.45rem]';
        this.showCancelBtn = true;
        this.btnTitle = 'Delete';
        break;
      case 'confirm popup':
        this.alertContent = `
        <div class="rounded-t flex flex-column justify-center items-center p-3"><br/>
          <i class="pi pi-check bg-secondary rounded-full p-1 text-white "></i>
          <p class="text-gray-500 font-bold mt-2">Save an organization</p><br/>
          <p class="text-18 text-center w-10">Are you sure you want to confirm this organisation?</p> 
          <p class="text-18 text-center w-10">you won't be able to restore it again</p> 
  </div>`;
        this.confirmBtnClass =
          'bg-secondary border-transparent enabled:hover:bg-secondary hover:bg-secondary my-2 px-3 py-[0.45rem]';
        this.showCancelBtn = true;
        this.btnTitle = 'Save';

        break;
    }
    this.showModal = true;
  }

  closePopup() {
    this.confirmationService.close();
    this.showCancelBtn = false;
    this.showModal = false;
  }
}
