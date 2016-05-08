import { Component, Output, EventEmitter, Input } from 'angular2/core';

@Component({
    selector: 'my-paypal',
    templateUrl: 'app/templates/paypal.component.html',
    styleUrls: [ 'app/css/mobile.component.css' ]
})

export class PayPalComponent {
    @Input() payPal: string;
    @Output() changePayPal = new EventEmitter();

    content = {
        inputLabel: 'Ваш e-mail'
    };

    onChangePayPal(){
        this.changePayPal.emit( this.payPal );

    }


}