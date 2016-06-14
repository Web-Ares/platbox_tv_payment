import { Component, Output, EventEmitter, Input, OnChanges } from 'angular2/core';

import { KeyboardFullComponent } from "./keyboard-full.component";
import {KeyboardNumericalComponent} from "./keyboard-numerical.component";

@Component({
    selector: 'my-keyboard',
    templateUrl: 'app/templates/keyboard.component.html',
    styleUrls: [ 'app/css/keyboard.component.css' ],
    directives: [
        KeyboardFullComponent,
        KeyboardNumericalComponent
    ]

})

export class KeyboardComponent implements OnChanges{
    @Input() keyboardVisibilityFull: boolean;
    @Input() keyboardVisibilityNumerical: boolean;

    @Output() symbolType = new EventEmitter();
    @Output() spaceType = new EventEmitter();
    @Output() clearElem = new EventEmitter();
    @Output() saveText = new EventEmitter();
    @Output() setSize = new EventEmitter();
    @Output() printKey = new EventEmitter();

    capsOn = false;
    firstActive = true;

    btnFooterText = {
        wipeOff: 'Стереть',
        caps: 'Большие буквы',
        move: 'Перемещение по буквам слова',
        save: 'Сохранить',

    };

    hasClass( elem, classNme ) {
        return elem.className.indexOf( classNme ) >= 0;
    }

    removeClass( item, className ){

        let classNameStart = item.className.indexOf( className );

        if( classNameStart > 0 ){
            if( item.className == className ){
                item.className = '';
            } else {
                let classesArr = item.className.split( className );

                if( classesArr[0].trim() == '' || classesArr[1].trim() == '' ) {
                    item.className = classesArr[0].trim() + ' ' + classesArr[1].trim();
                } else {
                    item.className = classesArr[0].trim() + ' ' + classesArr[1].trim();
                }

            }
        }

    }

    addClass( item, className ){

        if( item.className.indexOf( className ) < 0 ){

            if( item.className.length ){
                item.className = item.className + ' ' + className;
            } else {
                item.className = className;
            }
        }

    }

    onCapsClick() {
        if( this.capsOn ) {
            this.capsOn = false;
        } else if( !this.capsOn ) {
            this.capsOn = true;
        }

        return false;
    }

    onKeyClick( type ) {
        this.symbolType.emit( type );
    }

    onKeySpaceClick() {
        this.spaceType.emit( null );
    }

    onClear() {
        this.clearElem.emit( null );
    }

    onStart() {
        this.printKey.emit( null );
    }

    onSave() {
        this.saveText.emit( null );
    }

    ngOnChanges(){
        this.setSize.emit( null );
    }

    onMoveRight() {

        let elems = document.getElementsByClassName('keyboard__key'),
            index = 0;

        for( let i = 0; i < elems.length; i++ ) {
            if( this.hasClass( elems[i], 'active' ) ) {
                index = i;

            }
        }

        this.removeClass( elems[ index ], 'active' );

        if( ( index + 1 ) >= elems.length ) {
            index = -1;
        }

        this.addClass( elems[ index + 1 ], 'active' );

    }

    onMoveLeft() {

        let elems = document.getElementsByClassName('keyboard__key'),
            index = 0;

        for( let i = 0; i < elems.length; i++ ) {
            if( this.hasClass( elems[i], 'active' ) ) {
                index = i;

            }
        }

        this.removeClass( elems[ index ], 'active' );

        if( index == 0 ) {
            index = elems.length;
        }

        this.addClass( elems[ index - 1 ], 'active' );

    }

}