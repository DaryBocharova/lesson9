import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export class ModalData {
  geo :{
    lat: string;
    lng: string;
  }
}
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  public dataModal:ModalData;
  constructor(@Inject(MAT_DIALOG_DATA) public data: ModalData) {
    this.dataModal=data["data"];
  }
}
