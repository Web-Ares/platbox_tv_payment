import { Component, Output, EventEmitter, Input } from 'angular2/core';

import { AddClassDirective } from './../directives/keyhover.directive';

@Component({
    selector: 'my-keyboard-full-ru',
    templateUrl: 'app/templates/keyboard-full-ru.component.html',
    styleUrls: [ 'app/css/keyboard.component.css' ],
    directives: [AddClassDirective]
})

export class KeyboardFullRuComponent {
    @Input() capsOn: boolean;

    @Output() symbolType = new EventEmitter();
    @Output() spaceType = new EventEmitter();
    @Output() addClass = new EventEmitter();
    @Output() removeClass = new EventEmitter();

    //addClass = false;

    onSymbolClick(type) {
        this.symbolType.emit( type );
    }

    onSymbolSpaceClick() {
        this.spaceType.emit( null );
    }

    onSymbolEnter() {
        //this.addClass = true;
    }

    onSymbolLeave() {
        //this.addClass = false;
    }

}