import { Component, Output, EventEmitter, Input } from 'angular2/core';

@Component({
    selector: 'my-keyboard',
    templateUrl: 'app/templates/keyboard.component.html',
    styleUrls: [ 'app/css/keyboard.component.css' ]
})

export class KeyboardComponent {
    @Output() cancel = new EventEmitter();

    @Input() keyboardVisibilityFull;
    @Input() keyboardVisibilityNumerical;

    onCancel() {
        console.log(5)
        return false;
    }

}