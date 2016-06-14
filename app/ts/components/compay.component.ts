import { Component, Output, EventEmitter, Input } from 'angular2/core';

@Component({
    selector: 'my-compay',
    templateUrl: 'app/templates/compay.component.html',
    styleUrls: [ 'app/css/mobile.component.css' ]
})

export class CompayComponent {
    @Input() mobileNumber: string;
    @Output() showKeyboard = new EventEmitter();

    content = {
        inputLabel: 'Номер телефона'
    };

    onClickInput( event,type ){
        let data = {
            input: <HTMLInputElement>event.target.parentElement.getElementsByTagName('input')[0],
            type: type
        };

        this.showKeyboard.emit( data );
    }


}