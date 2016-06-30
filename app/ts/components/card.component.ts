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

        }, 100 );

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

        var parent = event.target.parentElement;


        if( parent.className == 'text-field' ) {

            parent = event.target.parentElement;

        } else {

            parent = event.target.parentElement.parentElement;

        }

        let data = {
            input: <HTMLInputElement>parent.getElementsByTagName('input')[0],
            span: <HTMLElement>parent.getElementsByTagName('span')[0],
            type: type
        };

        this.showKeyboard.emit( data );
    }

}