import { Component, Output, EventEmitter, Input } from 'angular2/core';

@Component({
    selector: 'my-keyboard-full-symbol',
    templateUrl: 'app/templates/keyboard-full-symbol.componen.html',
    styleUrls: [ 'app/css/keyboard.component.css' ]
})

export class KeyboardFullSymbolComponent {

    @Output() symbolType = new EventEmitter();
    @Output() spaceType = new EventEmitter();

    onSymbolClick(type) {
        this.symbolType.emit( type );
    }

    onSymbolSpaceClick(type) {
        this.spaceType.emit( type );
    }

}