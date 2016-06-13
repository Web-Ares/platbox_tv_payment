import { Component, Output, EventEmitter, Input } from 'angular2/core';

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

export class KeyboardComponent{
    @Input() keyboardVisibilityFull: boolean;
    @Input() keyboardVisibilityNumerical: boolean;

    @Output() symbolType = new EventEmitter();
    @Output() spaceType = new EventEmitter();
    @Output() clearElem = new EventEmitter();
    @Output() saveText = new EventEmitter();

    capsOn = false;

    btnFooterText = {
        wipeOff: 'Стереть',
        caps: 'Большие буквы',
        move: 'Перемещение по буквам слова',
        save: 'Сохранить',

    };

    onCancel() {
        //console.log(5)
        return false;
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

    onSave() {
        this.saveText.emit( null );
    }

}