import { Component, Output, EventEmitter, Input } from 'angular2/core';

import { AddClassDirective } from './../directives/keyhover.directive';

@Component({
    selector: 'my-keyboard-full-symbol',
    templateUrl: 'app/templates/keyboard-full-symbol.componen.html',
    styleUrls: [ 'app/css/keyboard.component.css' ],
    directives: [AddClassDirective]
})

export class KeyboardFullSymbolComponent {

    @Output() symbolType = new EventEmitter();
    @Output() spaceType = new EventEmitter();
    @Output() addClass = new EventEmitter();
    @Output() removeClass = new EventEmitter();
    firstActive = true;

    onSymbolClick(type) {
        this.symbolType.emit( type );
    }

}