import { Component, Output, EventEmitter, Input } from 'angular2/core';

@Component({
    selector: 'my-mobile',
    templateUrl: 'app/templates/mobile.component.html',
    styleUrls: [ 'app/css/mobile.component.css' ]
})

export class MobileComponent {
    @Input() savePaymentData: boolean;
    @Input() mobileNumber: string;
    @Output() setSelectedPaymentType = new EventEmitter();
    @Output() pay = new EventEmitter();
    @Output() changeSavePaymentData = new EventEmitter();

    content = {
        inputLabel: 'Номер телефона',
        inputPlaceholder: 'Номер телефона',
        inputHint: 'Для ввода нажмите ОК',
        inputMask: '+7 (999) 999-9999',
        explanation: [
            'Нажмите кнопку «Оплатить» и Вам будет направленно SMS - сообщение с запросом на подтверждение платежа.',
            'Ответьте на сообщение, следуя указанной в нем инструкции.',
            'Вам придет SMS - сообщение с подтверждением оплаты.'
        ],
        chkLabel: 'Сохранить данные для следующих платежей',
        btnCancel: 'отмена',
        btnOk: 'оплатить'
    };

    onCancel() {
        this.setSelectedPaymentType.emit( undefined );
        return false;
    }

    onChangeSave(){
        setTimeout( function () {
            console.log( this.savePaymentData );
        }, 10 );
        //this.changeSavePaymentData.emit( this.savePaymentData );
    }

    onOk() {
        this.pay.emit( {'ttt':'ttt'} );
        return false;
    }

}