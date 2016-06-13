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
    symbolType;
    spaceType;

    appResize(){
        this.setSize();
    }

    ngOnInit() {
        let data = window.document.getElementsByTagName('body')[0].dataset;
        this.paymentData.amount = data.amount;
        this.setSize();
    }

    cancel(){
        this.selectedPaymentType = undefined;
        this.licenseVisibility = false;
        this.transactionVisibility = false;
        this.autoPayVisibility = false;
        this.paymentsVisibility = true;
        this.keyboardVisibility = false;
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

    setSize(){
        let site = window.document.getElementsByClassName( 'site' )[0];

        site.style.fontSize = ( 100 * ( site.clientHeight/ 1080 ) ) + 'px';
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

        this.keyboardType = type;

        if ( this.keyboardType == 'mobileNumber' ||
            this.keyboardType == 'validityPeriodMonth' ||
            this.keyboardType == 'validityPeriodYear' ||
            this.keyboardType == 'cvvCvc') {

            this.keyboardVisibilityFull = false;
            this.keyboardVisibilityNumerical = true;

        } else {
            this.keyboardVisibilityFull = true;
            this.keyboardVisibilityNumerical = false;
        }

    }

    onKeyClick( type ) {
        var target = type.target || type.srcElement || type.currentTarget,
            value = target.innerText;

        if( this.keyboardType  == 'mobileNumber' ) {
            this.paymentData.mobileNumber = value;
        } else if( this.keyboardType  == 'alfaAccount' ) {
            this.paymentData.alfa = value;
        } else if( this.keyboardType  == 'numberCard' ) {
            this.paymentData.cardNumber = value;
        } else if( this.keyboardType  == 'validityPeriodMonth' ) {
            this.paymentData.cardMonth = value;
        } else if( this.keyboardType  == 'validityPeriodYear' ) {
            this.paymentData.cardYear = value;
        } else if( this.keyboardType  == 'cvvCvc' ) {
            this.paymentData.cardCvv = value;
        } else if( this.keyboardType  == 'payPalEmail' ) {
            this.paymentData.payPal = value;
        } else if( this.keyboardType  == 'yandexEmailOrNumber' ) {
            this.paymentData.yandex = value;
        }
    }

    onKeySpaceClick( type ) {
        console.log(454545)
    }

}
