import { Component, OnInit, Output, EventEmitter } from 'angular2/core';
import { PaymentType } from './../things/payment-type';
import { PaymentTypesService } from './../services/payment-type.service';


@Component({
    selector: 'my-payment-types',
    templateUrl: 'app/templates/payment-type.component.html',
    styleUrls: [ 'app/css/payment-type.component.css' ],
    providers: [ PaymentTypesService ]
})

export class PaymentTypesComponent  implements OnInit {
    title = 'Выберите способ оплаты';
    paymentTypes: PaymentType[];
    @Output() setSelectedPaymentType = new EventEmitter();

    constructor(private _paymentTypeService: PaymentTypesService){}

    getPaymentTypes() {
        this._paymentTypeService.getPaymentTypes().then(payments => this.paymentTypes = payments);
    }

    ngOnInit() {
        this.getPaymentTypes();
    }

    onSelect( paymentType: PaymentType ) {
        this.setSelectedPaymentType.emit(paymentType);
        return false;
    }
}