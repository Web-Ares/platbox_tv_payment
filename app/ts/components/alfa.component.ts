import { Component, Output, EventEmitter, Input } from 'angular2/core';

@Component({
    selector: 'my-alfa',
    templateUrl: 'app/templates/alfa.component.html',
    styleUrls: [ 'app/css/mobile.component.css' ]
})

export class AlfaComponent {
    @Input() alfa: string;
    @Output() changeAlfa = new EventEmitter();
    @Output() showKeyboard = new EventEmitter();

    content = {
        inputLabel: 'Ваш аккаунт'
    };

    onChangeAlfa(){
        this.changeAlfa.emit( this.alfa );

    }

    onClickInput( type ){
        this.showKeyboard.emit( type );
    }


}