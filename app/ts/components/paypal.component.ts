import { Component, Output, EventEmitter, Input } from 'angular2/core';

@Component({
    selector: 'my-paypal',
    templateUrl: 'app/templates/paypal.component.html',
    styleUrls: [ 'app/css/mobile.component.css' ]
})

export class PayPalComponent {
    @Input() payPal: string;
    @Output() showKeyboard = new EventEmitter();

    content = {
        inputLabel: 'Ваш e-mail'
    };

    onClickInput( event,type ){
        let data = {
            input: <HTMLInputElement>event.target.parentElement.getElementsByTagName('input')[0],
            type: type
        };

        this.showKeyboard.emit( data );
    }
    
}