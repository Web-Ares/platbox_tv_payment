import { Component, Output, OnInit, EventEmitter, Input } from 'angular2/core';


@Component({
    selector: 'my-mobile',
    templateUrl: 'app/templates/mobile.component.html',
    styleUrls: [ 'app/css/mobile.component.css' ]
})

export class MobileComponent {
    @Input() mobileNumber: string;
    @Output() showKeyboard = new EventEmitter();

    content = {
        inputLabel: 'Номер телефона',
        explanation: [
            'Нажмите кнопку «Оплатить» и Вам будет направленно SMS - сообщение с запросом на подтверждение платежа.',
            'Ответьте на сообщение, следуя указанной в нем инструкции.',
            'Вам придет SMS - сообщение с подтверждением оплаты.'
        ]
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