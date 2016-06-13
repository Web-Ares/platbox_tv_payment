import { Component, Output, EventEmitter, Input } from 'angular2/core';

@Component({
    selector: 'my-keyboard-full-ru',
    templateUrl: 'app/templates/keyboard-full-ru.component.html',
    styleUrls: [ 'app/css/keyboard.component.css' ]
})

export class KeyboardFullRuComponent {
    @Input() capsOn: boolean;

    @Output() symbolType = new EventEmitter();
    @Output() spaceType = new EventEmitter();

    onSymbolClick(type) {
        this.symbolType.emit( type );
    }

    onSymbolSpaceClick() {
        this.spaceType.emit( null );
    }

}