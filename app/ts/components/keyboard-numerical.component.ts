import { Component, Output, EventEmitter, Input, ElementRef } from 'angular2/core';

import { AddClassDirective } from './../directives/keyhover.directive';

@Component({
    selector: 'my-keyboard-numerical',
    templateUrl: 'app/templates/keyboard-numerical.component.html',
    styleUrls: [ 'app/css/keyboard.component.css' ],
    directives: [AddClassDirective]
})

export class KeyboardNumericalComponent {

    @Output() symbolType = new EventEmitter();
    @Output() addClass = new EventEmitter();
    @Output() removeClass = new EventEmitter();

    //addClass;

    //constructor(private elementRef: ElementRef) {
    //}


    onSymbolClick( type ) {
        this.symbolType.emit( type );
    }

    //onSymbolEnter() {
    //    let el = this.elementRef.nativeElement;
    //    console.log(this.elementRef.nativeElement)
    //    this.addClass = true;
    //}
    //
    //onSymbolLeave() {
    //    this.addClass = false;
    //}

}