import { Component, Output, EventEmitter, Input } from 'angular2/core';

import { AddClassDirective } from './../directives/keyhover.directive';

@Component({
    selector: 'my-keyboard-full-en',
    templateUrl: 'app/templates/keyboard-full-en.component.html',
    styleUrls: [ 'app/css/keyboard.component.css' ],
    directives: [AddClassDirective]
})

export class KeyboardFullEnComponent {
    @Input() capsOn: boolean;

    @Output() symbolType = new EventEmitter();
    @Output() spaceType = new EventEmitter();
    //addClass = false;

    onSymbolClick(type) {
        this.symbolType.emit( type );
    }

    onSymbolSpaceClick() {
        this.spaceType.emit( null );
    }

    //onSymbolEnter() {
    //    //this.addClass = true;
    //}
    //
    //onSymbolLeave() {
    //    //this.addClass = false;
    //}

}