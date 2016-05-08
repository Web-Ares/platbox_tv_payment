import { Component, Output, EventEmitter, Input } from 'angular2/core';

@Component({
    selector: 'my-compay',
    templateUrl: 'app/templates/compay.component.html',
    styleUrls: [ 'app/css/mobile.component.css' ]
})

export class CompayComponent {
    @Input() mobileNumber: string;
    @Output() changeMobileNumber = new EventEmitter();

    content = {
        inputLabel: 'Номер телефона'
    };

    onChangeMobileNumber(){
        this.changeMobileNumber.emit( this.mobileNumber );

    }


}