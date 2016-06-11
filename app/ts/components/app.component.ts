import { Component, OnInit, Input } from 'angular2/core';
import { PaymentTypesComponent } from "./payment-type.component";
import { PaymentType } from './../things/payment-type';


import { TransactionComponent } from "./transaction.component";
import {AutopayComponent} from "./autopay.component";
import {PaymentComponent} from "./payment.component";
import {LicenseComponent} from "./license.component";
import {KeyboardComponent} from "./keyboard.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html',
    styleUrls: [ 'app/css/app.component.css' ],
    directives: [
        PaymentTypesComponent,
        PaymentComponent,
        TransactionComponent,
        LicenseComponent,
        AutopayComponent,
        KeyboardComponent
    ]
})
export class AppComponent implements OnInit {

    paymentData = {
        amount: '',
        mobileNumber: '',
        cardNumber: '',
        cardMonth: '',
        cardYear: '',
        cardCvv: '',
        alfa: '',
        yandex: '',
        payPal: '',
        savePaymentData: true,
        typeKeyboard: '',
        paymentType: 0
    };
    
    autopayData = {
        minimum: '335 Рубликов',
        amount: '1000 Рублей'
    };
    paymentsVisibility = true;
    transactionVisibility = false;
    keyboardVisibility = false;
    keyboardType;
    autoPayVisibility = false;
    licenseVisibility = false;
    content = {
        title: 'Пополнение кошелька'
    };
    selectedPaymentType: PaymentType;
    keyboardVisibilityFull = true;
    keyboardVisibilityNumerical = false;

    ngOnInit() {
        let data = window.document.getElementsByTagName('body')[0].dataset;
        this.paymentData.amount = data.amount;
    }

    cancel(){
        this.selectedPaymentType = undefined;
        this.licenseVisibility = false;
        this.transactionVisibility = false;
        this.autoPayVisibility = false;
        this.paymentsVisibility = true;
    }

    changeCardNumber( cardNumber ){
        this.paymentData.cardNumber = cardNumber;
    }

    changeCardYear( cardYear ){
        this.paymentData.cardYear = cardYear;
    }

    changeCardMonth( cardMonth ){
        this.paymentData.cardMonth = cardMonth;
    }

    changeCardCvv( cardCvv ){
        this.paymentData.cardCvv = cardCvv;
    }

    changeMobileNumber( mobileNumber ){
        this.paymentData.mobileNumber = mobileNumber;
    }

    changeAlfa( alfa ){
        this.paymentData.alfa = alfa;
    }

    changeYandex( yandex ){
        this.paymentData.yandex = yandex;
    }

    changePayPaal( payPal ){
        this.paymentData.payPal = payPal;
    }

    changeSavePaymentData( savePayment ){
        this.paymentData.savePaymentData = savePayment;
    }

    setSelectedPaymentType( paymentType ){
        this.selectedPaymentType = paymentType;
        this.paymentData.paymentType = this.selectedPaymentType.id;
    }

    showLicense(){
        this.paymentsVisibility = false;
        this.licenseVisibility = true;
    }

    showTransaction(){
        this.licenseVisibility = false;
        this.transactionVisibility = true;
    }

    showAutoPay(){
        this.transactionVisibility = false;
        this.autoPayVisibility = true;
    }

    onChangeAutopayMinimum( value ){
        this.autopayData.minimum = value;
    }

    onChangeAutopayMaximum( value ){
        this.autopayData.amount = value;
    }

    showKeyboard( type ){
        this.keyboardVisibility = true;
        this.paymentData.mobileNumber='fgg';
        this.keyboardType = type;

        if ( this.keyboardType == 'mobileNumber' ||
            this.keyboardType == 'validityPeriodMonth' ||
            this.keyboardType == 'validityPeriodYear' ||
            this.keyboardType == 'cvvCvc'
        ) {
            console.log(this.keyboardType)
            this.keyboardVisibilityFull = false;
            this.keyboardVisibilityNumerical = true;

        }

    }

}
