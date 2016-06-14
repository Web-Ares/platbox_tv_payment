import { Component, Output, EventEmitter, Input } from 'angular2/core';

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

    onClickInput( event,type ){
        let data = {
            input: <HTMLInputElement>event.target.parentElement.getElementsByTagName('input')[0],
            type: type
        };

        this.showKeyboard.emit( data );
    }


}