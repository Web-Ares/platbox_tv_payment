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
    currentInput: HTMLInputElement;
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
    clearElem;
    saveText;
    printKey;

    addClass(item, className ){

        if( item.className.indexOf( className ) < 0 ){
            if( item.className.length ){
                item.className = item.className + ' ' + className;
            } else {
                item.className = className;
            }
        }

    }

    hasClass( elem, classNme ) {
        return elem.className.indexOf( classNme ) >= 0;
    }

    removeClass(item, className ){

        let classNameStart = item.className.indexOf( className );
        if( classNameStart > 0 ){
            if( item.className == className ){
                item.className = '';
            } else {
                let classesArr = item.className.split( className );

                if( classesArr[0].trim() == '' || classesArr[1].trim() == '' ) {
                    item.className = classesArr[0].trim() + ' ' + classesArr[1].trim();
                } else {
                    item.className = classesArr[0].trim() + ' ' + classesArr[1].trim();
                }

            }
        }
    }

    appResize(){
        this.setSize();
    }

    ngOnInit() {
        let payment = JSON.parse( window.document.getElementsByTagName('body')[0].dataset.payment ),
            autoPay = JSON.parse( window.document.getElementsByTagName('body')[0].dataset.autopay );


        for ( let item in payment ){
            this.paymentData[ item ] = payment[ item ];

        }

        for ( let item in autoPay ){
            this.autopayData[ item ] = autoPay[ item ];

        }

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

    enterSimbol( value ){
        let dataset = this.currentInput.dataset,
            maskSimbol = dataset.masksimbol,
            sufix = dataset.sufix,
            type = this.keyboardType,
            oldVal = null,
            maskIndex = null;

        if( maskSimbol ){
            oldVal = this.paymentData[ type ];
            maskIndex = oldVal.indexOf( maskSimbol );
            if( maskIndex >= 0 ){
                this.paymentData[ type ] = ( oldVal.substring( 0, maskIndex ) + value + oldVal.substring( maskIndex + 1 ) );
            }
        } else if ( sufix ){

            if( isNaN(this.autopayData[ type ]) ){
                this.autopayData[ type ] = parseInt( value )
            } else {
                this.autopayData[ type ] = parseInt( this.autopayData[ type ] + value );
            }

        } else{
            this.paymentData[ type ] += value;
        }

    }

    makeInputActive(){
        let mask = this.currentInput.dataset.mask,
            type = this.keyboardType,
            wH = window.innerHeight / 2,
            site = window.document.getElementsByClassName( 'site' )[0],
            offset = this.currentInput.getBoundingClientRect(),
            inputH=this.currentInput.offsetHeight;


        if( offset.top >= wH || offset.bottom >= wH ){

            setTimeout(function () {
                site.style.overflow = 'auto';

                site.scrollTop = ( offset.top + inputH + 10 - wH);
                site.style.overflow = 'hidden';

            }, 1);
        }


        if( mask && this.paymentData[ type ] == '' ){
            this.paymentData[ type ] = mask;
        }

        this.addClass( this.currentInput, 'active' );
        this.removeClass( this.currentInput, 'error' );


    }

    makeInputNormal(){
        let mask = this.currentInput.dataset.mask,
            type = this.keyboardType;


        if( mask == this.paymentData[ type ] ){
            this.paymentData[ type ] = '';
        }

        this.removeClass( this.currentInput, 'active' );

    }

    removeSymbol(){
        let dataset = this.currentInput.dataset,
            mask = dataset.mask,
            sufix = dataset.sufix,
            maskSymbol = dataset.masksimbol,
            type = this.keyboardType,
            oldVal = null,
            i = null;

        if( mask ){
            oldVal = this.paymentData[ type ];
            for( i = mask.length-1; i >= 0; i-- ){
                if( mask[ i ] == maskSymbol && oldVal[ i ] != maskSymbol ){
                    this.paymentData[ type ] = ( oldVal.substring( 0, i ) + maskSymbol + oldVal.substring( i + 1 ) );
                    break;
                }
            }
        } else if ( sufix ){
            oldVal = this.autopayData[ type ] + '';
            this.autopayData[ type ] = parseInt( oldVal.substr(0,oldVal.length -1 ) );
        } else {
            oldVal = this.paymentData[ type ];
            this.paymentData[ type ] = parseInt( oldVal.substr(0,oldVal.length -1 ) );
        }

    }

    setSelectedPaymentType( paymentType ){
        this.selectedPaymentType = paymentType;
        this.paymentData.paymentType = this.selectedPaymentType.id;
    }

    setSize(){
        let site = window.document.getElementsByClassName( 'site' )[0],
            keyboard = window.document.getElementsByClassName( 'keyboard' )[0],
            newSize = ( 100 * ( window.innerHeight / 1080 ) ) + 'px';

        site.style.fontSize = newSize;
        
        if( keyboard ){
            keyboard.style.fontSize = newSize;
        }
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

    showKeyboard( data ){
        this.keyboardVisibility = true;

        this.keyboardType = data.type;
        this.currentInput = data.input;

        this.makeInputActive();


        if ( this.keyboardType == 'mobileNumber' ||
             this.keyboardType == 'cardNumber' ||
             this.keyboardType == 'cardMonth' ||
             this.keyboardType == 'cardYear' ||
             this.keyboardType == 'alfa' ||
             this.keyboardType == 'cardCvv' ||
             this.keyboardType == 'amount' ||
             this.keyboardType == 'minimum') {

            this.keyboardVisibilityFull = false;
            this.keyboardVisibilityNumerical = true;

        } else {

            this.keyboardVisibilityFull = true;
            this.keyboardVisibilityNumerical = false;

        }

    }

    onKeyClick( type ) {
        let target = type.target || type.srcElement || type.currentTarget,
            value = target.innerText;

        this.enterSimbol( value );
    }

    onKeySpaceClick() {

        this.enterSimbol( ' ' );

    }

    onClearSymbol() {
        this.removeSymbol();

        return false;
    }

    onSaveSymbols () {
        this.keyboardVisibility = false;
        this.makeInputNormal();

        return false;
    }

    onStartPrint () {

        let elems = document.getElementsByClassName('keyboard__key'),
            activeElem,
            value;

        for( let i = 0; i < elems.length; i++ ) {
            if( this.hasClass( elems[i], 'active' ) ) {
                activeElem = elems[i];
            }
        }

        if( this.hasClass( activeElem, 'keyboard__key_space' ) ) {
            value = ' ';
        } else {
            value = activeElem.innerText;
        }

        this.enterSimbol( value );

    }

}
