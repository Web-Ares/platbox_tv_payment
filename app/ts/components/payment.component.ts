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

    showKeyboardPayment( type ) {
        this.showKeyboard.emit( type );
    }

}