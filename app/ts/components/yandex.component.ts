import { Component, Output, OnInit, EventEmitter, Input } from 'angular2/core';

@Component({
    selector: 'my-yandex',
    templateUrl: 'app/templates/yandex.component.html',
    styleUrls: [ 'app/css/mobile.component.css' ]
})

export class YandexComponent {
    @Input() yandex: string;
    @Output() showKeyboard = new EventEmitter();

    content = {
        inputLabel: 'Телефон или Email'
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