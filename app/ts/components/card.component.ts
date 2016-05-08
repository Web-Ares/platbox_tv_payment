import { Component, Output, EventEmitter, Input } from 'angular2/core';

@Component({
    selector: 'my-card',
    templateUrl: 'app/templates/card.component.html',
    styleUrls: [ 'app/css/card.component.css' ]
})

export class CardComponent {
    @Input() cardNumber: string;
    @Input() cardYear: string;
    @Input() cardCvv: string;
    @Input() cardMonth: string;
    @Output() changeCardNumber = new EventEmitter();
    @Output() changeCardMonth = new EventEmitter();
    @Output() changeCardYear = new EventEmitter();
    @Output() changeCardCvv = new EventEmitter();

    content = {
        numberLabel: 'Номер карты',
        periodLabel: 'Срок действия',
        cvvLabel: 'CVV / CVC'
    };

    onChangeCardNumber(){
        this.changeCardNumber.emit( this.cardNumber );
    }

    onChangeCardYear(){
        this.changeCardYear.emit( this.cardYear );
    }

    onChangeCardMonth(){
        this.changeCardMonth.emit( this.cardMonth );
    }

    onChangeCardCvv(){
        this.changeCardCvv.emit( this.cardCvv );
    }

}