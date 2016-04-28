import { Component } from 'angular2/core';
import { PaymentTypesComponent } from "./payment-type.component";
import { PaymentType } from './../things/payment-type';
import { MobileComponent } from "./mobile.component";
import { TransactionComponent } from "./transaction.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html',
    styleUrls: [ 'app/css/app.component.css' ],
    directives: [ PaymentTypesComponent, MobileComponent, TransactionComponent ]
})
export class AppComponent {
    paymentData = {
        amount: '1500',
        mobileNumber: '',
        savePaymentData: true,
        paymentType: 0
    };
    paymentsVisibility = true;
    transactionVisibility = false;
    content = {
        title: 'Пополнение кошелька',
        text: `На ${this.paymentData.amount} Рубликов`
    };
    selectedPaymentType: PaymentType;

    setSelectedPaymentType( paymentType ){
        this.selectedPaymentType = paymentType;
    }

    changeSavePaymentData( savePayment ){
        this.paymentData.savePaymentData = savePayment;
    }

    pay( data ){

        this.paymentData.paymentType = this.selectedPaymentType.id;

        console.log( data );

        // for( var key in data ){
        //     console.log( data[ key ] );
        // }

        this.paymentsVisibility = false;
        this.transactionVisibility = true;
    }

}
