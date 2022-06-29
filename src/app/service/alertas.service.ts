import { Injectable } from '@angular/core';
import {BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertasComponent } from '../alertas/alertas.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(
    private bsModalService: BsModalService
  ) { }

  private showAlert(msg: string, type: string) {
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertasComponent)

    bsModalRef.content.type = type;
    bsModalRef.content.message = msg;

  }


  showAlertDanger(msg: string) {
    this.showAlert(msg, 'danger');
  }

  showAlertSuccess(msg: string) {
    this.showAlert(msg, 'success');
  }

  showAlertInfo(msg: string) {
    this.showAlert(msg, 'info')
  }

}
