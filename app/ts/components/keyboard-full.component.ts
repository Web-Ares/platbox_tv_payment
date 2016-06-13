import { Component, Output, EventEmitter, Input } from 'angular2/core';
import {KeyboardFullEnComponent} from "./keyboard-full-en.component";
import {KeyboardFullRuComponent} from "./keyboard-full-ru.component";
import {KeyboardFullSymbolComponent} from "./keyboard-full-symbol.component";

@Component({
    selector: 'my-keyboard-full',
    templateUrl: 'app/templates/keyboard-full.component.html',
    styleUrls: [ 'app/css/keyboard.component.css' ],
    directives: [
        KeyboardFullRuComponent,
        KeyboardFullEnComponent,
        KeyboardFullSymbolComponent
    ]
})

export class KeyboardFullComponent {

    @Input() capsOn: boolean;

    @Output() symbolType = new EventEmitter();
    @Output() spaceType = new EventEmitter();

    keyboardFullRu = false;
    keyboardFullEn = true;
    keyboardFullSymbol = false;
    typeClassActive = false;

    onKeyboardFullTypeClick( type ) {

        if( type == 'ru' ) {

            this.keyboardFullRu = true;
            this.keyboardFullEn = false;
            this.keyboardFullSymbol = false;

        } else if(type == 'en' ) {

            this.keyboardFullRu = false;
            this.keyboardFullEn = true;
            this.keyboardFullSymbol = false;

        } else if(type == 'symbol' ) {

            this.keyboardFullRu = false;
            this.keyboardFullEn = false;
            this.keyboardFullSymbol = true;

        }

        if( this.typeClassActive ) {
            this.typeClassActive = false;
        } else if( !this.typeClassActive ) {
            this.typeClassActive = true;
        }


        return false;

    }

    onSymbolClick(type) {
        this.symbolType.emit( type );
    }

    onSymbolSpaceClick() {
        this.spaceType.emit( null );
    }

}