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
    @Output() changeMobileNumber = new EventEmitter();
    @Output() changeAlfa = new EventEmitter();
    @Output() changeYandex = new EventEmitter();
    @Output() changePayPal = new EventEmitter();
    @Output() changeCardNumber = new EventEmitter();
    @Output() changeCardMonth = new EventEmitter();
    @Output() changeCardYear = new EventEmitter();
    @Output() changeCardCvv = new EventEmitter();

    content = {
        chkLabel: 'Сохранить данные для следующих платежей',
        btnCancel: 'отмена',
        btnOk: 'оплатить'
    };

    onChangeAlfa( alfa ){
        this.paymentData.alfa = alfa;
        this.changeAlfa.emit( alfa );
    }

    onChangeYandex( yandex ){
        this.paymentData.yandex = yandex;
        this.changeYandex.emit( yandex );
    }

    onChangePayPal( payPal ){
        this.paymentData.payPal = payPal;
        this.changePayPal.emit( payPal );
    }

    onChangeMobileNumber( mobileNumber ){
        this.paymentData.mobileNumber = mobileNumber;
        this.changeMobileNumber.emit( mobileNumber );
    }

    onChangeCardNumber( cardNumber ){
        this.paymentData.cardNumber = cardNumber;
        this.changeCardNumber.emit( cardNumber );
    }

    onChangeCardMonth( cardMonth ){
        this.paymentData.cardMonth = cardMonth;
        this.changeCardMonth.emit( cardMonth );
    }

    onChangeCardYear( cardYear ){
        this.paymentData.cardYear = cardYear;
        this.changeCardYear.emit( cardYear );
    }

    onChangeCardCvv( cardCvv ){
        this.paymentData.cardCvv = cardCvv;
        this.changeCardCvv.emit( cardCvv );
    }

    onCancel() {
        this.cancel.emit( null );
        return false;
    }

    onChangeSave(){
        this.changeSavePaymentData.emit( !this.paymentData.savePaymentData );
    }

    onOk() {
        this.showLicense.emit(null);
        return false;
    }

}