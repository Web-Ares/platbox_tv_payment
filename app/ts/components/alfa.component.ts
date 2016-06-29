import { Component, Output, OnInit, EventEmitter, Input } from 'angular2/core';

@Component({
    selector: 'my-alfa',
    templateUrl: 'app/templates/alfa.component.html',
    styleUrls: [ 'app/css/mobile.component.css' ]
})

export class AlfaComponent {
    @Input() alfa: string;
    @Output() showKeyboard = new EventEmitter();

    content = {
        inputLabel: 'Ваш аккаунт'
    };

    addClass( item, className ){

        if( item.className.indexOf( className ) < 0 ){
            if( item.className.length ){
                item.className = item.className + ' ' + className;
            } else {
                item.className = className;
            }
        }

    }

    ngOnInit() {

        let func = this.addClass;

        setTimeout( function() {

            for( let i = 0; i < document.getElementsByClassName('text-field').length; i++ ) {

                let input = document.getElementsByClassName('text-field')[i].getElementsByTagName('input');

                if(  !( input[0].value == '' ) ) {
                    func( input[0], 'fill' );
                }

            }

        }, 1 );

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