import { Component, Output, EventEmitter, Input } from 'angular2/core';

@Component({
    selector: 'my-yandex',
    templateUrl: 'app/templates/yandex.component.html',
    styleUrls: [ 'app/css/mobile.component.css' ]
})

export class YandexComponent {
    @Input() yandex: string;
    @Output() changeYandex = new EventEmitter();

    content = {
        inputLabel: 'Телефон или e-mail'
    };

    onChangeYandex(){
        this.changeYandex.emit( this.yandex );

    }


}