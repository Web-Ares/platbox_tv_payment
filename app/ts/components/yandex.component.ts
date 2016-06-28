import { Component, Output, EventEmitter, Input } from 'angular2/core';

@Component({
    selector: 'my-yandex',
    templateUrl: 'app/templates/yandex.component.html',
    styleUrls: [ 'app/css/mobile.component.css' ]
})

export class YandexComponent {
    @Input() yandex: string;
    @Output() showKeyboard = new EventEmitter();

    content = {
        inputLabel: 'Телефон или Email'
    };

    onClickInput( event,type ){
        let data = {
            input: <HTMLInputElement>event.target.parentElement.getElementsByTagName('input')[0],
            type: type
        };

        this.showKeyboard.emit( data );
    }

}