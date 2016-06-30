import { Component, Output, OnInit, EventEmitter, Input, OnChanges } from 'angular2/core';

@Component({
    selector: 'my-card',
    templateUrl: 'app/templates/card.component.html',
    styleUrls: [ 'app/css/card.component.css' ]
})

export class CardComponent implements OnChanges{
    @Input() cardNumber: string;
    @Input() cardYear: string;
    @Input() cardCvv: string;
    @Input() cardMonth: string;
    @Output() showKeyboard = new EventEmitter();

    cvvProtect: string = '';

    content = {
        numberLabel: 'Номер карты',
        periodLabel: 'Срок действия',
        cvvLabel: 'CVV / CVC'
    };

    ngOnInit() {

        setTimeout( function() {

            for( let i = 0; i < document.getElementsByClassName('text-field').length; i++ ) {

                let input = document.getElementsByClassName('text-field')[i].getElementsByTagName('input'),
                    span = document.getElementsByClassName('text-field')[i].getElementsByTagName('span');

                if(  !( input[0].value == '' ) ) {
                    span[0].innerText = input[0].value ;
                }

            }

        }, 1 );

    }

    ngOnChanges(){
        let i;

        this.cvvProtect = '';

        for( i = 0; i<this.cardCvv.length; i++ ){
            if( this.cardCvv[ i ] != '_' ){
                this.cvvProtect += '*';
            }
        }
    }

    onClickInput( event,type ){
        let data = {
            input: <HTMLInputElement>event.target.parentElement.getElementsByTagName('input')[0],
            span: <HTMLElement>event.target.parentElement.getElementsByTagName('span')[0],
            type: type
        };

        this.showKeyboard.emit( data );
    }

}