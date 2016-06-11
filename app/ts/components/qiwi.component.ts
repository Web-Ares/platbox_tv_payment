import { Component, Output, EventEmitter, Input } from 'angular2/core';

@Component({
    selector: 'my-qiwi',
    templateUrl: 'app/templates/qiwi.component.html',
    styleUrls: [ 'app/css/mobile.component.css' ]
})

export class QiwiComponent {
    @Input() mobileNumber: string;
    @Output() changeMobileNumber = new EventEmitter();
    @Output() showKeyboard = new EventEmitter();

    content = {
        inputLabel: 'Номер телефона'
    };

    onChangeMobileNumber(){
        this.changeMobileNumber.emit( this.mobileNumber );
    }

    onClickInput( type ){
        this.showKeyboard.emit( type );
    }


}