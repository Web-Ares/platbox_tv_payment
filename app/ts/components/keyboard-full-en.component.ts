import { Component, Output, EventEmitter, Input } from 'angular2/core';

@Component({
    selector: 'my-keyboard-full-en',
    templateUrl: 'app/templates/keyboard-full-en.component.html',
    styleUrls: [ 'app/css/keyboard.component.css' ]
})

export class KeyboardFullEnComponent {
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