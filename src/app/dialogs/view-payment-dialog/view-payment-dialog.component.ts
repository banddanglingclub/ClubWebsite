import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PaymentDetail } from 'src/app/models/payment';
import { PaymentType } from 'src/app/models/payment-enum';
import { ScreenService } from 'src/app/services/screen.service';

@Component({
  selector: 'app-view-payment-dialog',
  templateUrl: './view-payment-dialog.component.html',
  styleUrls: ['./view-payment-dialog.component.css']
})
export class ViewPaymentDialogComponent {

  public get paymentType(): typeof PaymentType {
    return PaymentType; 
  }

  constructor(
    public dialogRef: MatDialogRef<ViewPaymentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PaymentDetail,
    public screenService: ScreenService) {
  }

  public close(): void {
    this.dialogRef.close();
  }

}
