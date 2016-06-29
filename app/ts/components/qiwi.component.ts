import { Component, Output, OnInit, EventEmitter, Input } from 'angular2/core';

@Component({
    selector: 'my-qiwi',
    templateUrl: 'app/templates/qiwi.component.html',
    styleUrls: [ 'app/css/mobile.component.css' ]
})

export class QiwiComponent {
    @Input() mobileNumber: string;
    @Output() showKeyboard = new EventEmitter();

    content = {
        inputLabel: 'Номер телефона'
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