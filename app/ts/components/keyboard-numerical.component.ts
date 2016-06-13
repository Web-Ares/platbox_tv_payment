import { Component, Output, EventEmitter, Input } from 'angular2/core';

@Component({
    selector: 'my-keyboard-numerical',
    templateUrl: 'app/templates/keyboard-numerical.component.html',
    styleUrls: [ 'app/css/keyboard.component.css' ]
})

export class KeyboardNumericalComponent {

    @Output() symbolType = new EventEmitter();

    onSymbolClick(type) {
        this.symbolType.emit( type );
    }

}