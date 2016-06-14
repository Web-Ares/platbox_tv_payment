import { Component, Output, EventEmitter, Input } from 'angular2/core';


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

    onClickInput( event,type ){
        let data = {
                input: <HTMLInputElement>event.target.parentElement.getElementsByTagName('input')[0],
                type: type
            };

        this.showKeyboard.emit( data );
    }


}