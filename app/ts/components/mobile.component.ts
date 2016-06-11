import { Component, Output, EventEmitter, Input } from 'angular2/core';


@Component({
    selector: 'my-mobile',
    templateUrl: 'app/templates/mobile.component.html',
    styleUrls: [ 'app/css/mobile.component.css' ]
})

export class MobileComponent {
    @Input() mobileNumber: string;
    @Output() changeMobileNumber = new EventEmitter();
    @Output() showKeyboard = new EventEmitter();
    @Output() showKeyboard1 = new EventEmitter();

    content = {
        inputLabel: 'Номер телефона',
        explanation: [
            'Нажмите кнопку «Оплатить» и Вам будет направленно SMS - сообщение с запросом на подтверждение платежа.',
            'Ответьте на сообщение, следуя указанной в нем инструкции.',
            'Вам придет SMS - сообщение с подтверждением оплаты.'
        ]
    };

    onChangeMobileNumber(){
        this.changeMobileNumber.emit( this.mobileNumber );
    }

    onClickInput( type ){
        this.showKeyboard.emit( type );
        this.showKeyboard1.emit( type );
    }


}