import { Component, Output, EventEmitter, Input } from 'angular2/core';
import { MobileComponent } from "./mobile.component";
import {CardComponent} from "./card.component";
import {QiwiComponent} from "./qiwi.component";
import {AlfaComponent} from "./alfa.component";
import {CompayComponent} from "./compay.component";
import {YandexComponent} from "./yandex.component";
import {PayPalComponent} from "./paypal.component";

@Component({
    selector: 'my-payment',
    templateUrl: 'app/templates/payment.component.html',
    styleUrls: [ 'app/css/payment.component.css' ],
    directives: [
        MobileComponent,
        CardComponent,
        AlfaComponent,
        CompayComponent,
        YandexComponent,
        PayPalComponent,
        QiwiComponent
    ]
})

export class PaymentComponent {
    @Input() paymentData;
    @Output() cancel = new EventEmitter();
    @Output() showLicense = new EventEmitter();
    @Output() changeSavePaymentData = new EventEmitter();
    @Output() showKeyboard = new EventEmitter();

    content = {
        chkLabel: 'Сохранить данные для следующих платежей',
        btnCancel: 'отмена',
        btnOk: 'оплатить'
    };

    addClass(item, className ){

        if( item.className.indexOf( className ) < 0 ){
            if( item.className.length ){
                item.className = item.className + ' ' + className;
            } else {
                item.className = className;
            }
        }

    }


    onCancel() {
        this.cancel.emit( null );
        return false;
    }

    onChangeSave(){
        this.changeSavePaymentData.emit( !this.paymentData.savePaymentData );
    }

    onOk() {
        let wrap = window.document.getElementsByClassName( 'payment__wrap' )[0],
            inputs = wrap.getElementsByTagName( 'input' ),
            valid = true;

        if( this.paymentData.paymentType == 1 ||
            this.paymentData.paymentType == 3 ||
            this.paymentData.paymentType == 2 ||
            this.paymentData.paymentType == 5 ){

            for( let input of inputs ){
                if( input.value.indexOf('_') >= 0 || input.value == '' ){
                    this.addClass( input, 'error' );
                    valid = false;
                }
            }
        }
        if( this.paymentData.paymentType == 4 ||
            this.paymentData.paymentType == 6 ){

            for( let input of inputs ){
                if( input.value == '' ){
                    this.addClass( input, 'error' );
                    valid = false;
                }
            }
        }
        if( this.paymentData.paymentType == 7 ){

            let mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let countAt = 0;


            for( let input of inputs ){
                if( input.value == '' || !mail.test(input.value ) ){
                    this.addClass( input, 'error' );
                    valid = false;
                } else {
                    for ( let simbol of input.value ){
                        if( simbol == '@' ){
                            countAt++;
                        }
                    }
                    if (countAt > 1){
                        valid = false;

                    }
                }
            }
        }
        if( valid ){
            this.showLicense.emit(null);
        }
        return false;
    }

    showKeyboardPayment( type ) {
        this.showKeyboard.emit( type );
    }

}