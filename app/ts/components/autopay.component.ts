import { Component, Output, EventEmitter, Input, DoCheck } from 'angular2/core';
import { AutopayService } from './../services/autopay.service';

@Component({
    selector: 'my-autopay',
    templateUrl: 'app/templates/autopay.component.html',
    styleUrls: [ 'app/css/autopay.component.css' ],
    providers: [ AutopayService ]
})

export class AutopayComponent implements DoCheck{
    @Input() autopayData;
    @Output() cancel = new EventEmitter();
    @Output() onChangeAutopay = new EventEmitter();
    @Output() onChangeAutopayMinimum = new EventEmitter();
    @Output() onChangeAutopayMaximum = new EventEmitter();
    autopayMinimum: string;
    autopayMaximum: string;

    save: boolean = false;

    content = {
        askTitle: 'Установить автопополнение?',
        askText: 'По достижению минимальной суммы на счете Кошелька, сумма автопополнения будет автоматически списана с вашей банковской карты и зачислена в Кошелек.',
        btnAskOk: 'Да',
        title: 'Настройки автопополнения',
        btnCancel: 'Нет',
        minSum: 'Минимальная сумма в Кошельке',
        maxSum: 'Сумма автопополнения',
        btnSave: 'сохранить',
        btnNo: 'отмена'
    };

    constructor(private _autopayService: AutopayService ){}

    ngDoCheck(){
        if( isNaN(this.autopayData.minimum) ){
            this.autopayMinimum = '';
        } else {
            this.autopayMinimum = this.autopayData.minimum + ' Рубликов';

        }
        if( isNaN(this.autopayData.amount) ){
            this.autopayMaximum = '';
        } else {
            this.autopayMaximum = this.autopayData.amount + ' Рубликов';

        }
    }

    onCancel(){
        this.cancel.emit( null );
    }
    

    onOk(){
       this.save = true;
    }

    addClass(item, className ){

        if( item.className.indexOf( className ) < 0 ){
            if( item.className.length ){
                item.className = item.className + ' ' + className;
            } else {
                item.className = className;
            }
        }

    }


    onSave(){

        let inputs = window.document.getElementsByTagName( 'input' ),
            valid = true;

        for ( let input of inputs ){
            if( input.value == '' ){
                this.addClass( input, 'error' );
                valid = false;
            }
        }

        if( valid ){
            this._autopayService.save( 'minimum=' + parseFloat( this.autopayMinimum ) +'&saveSum=' + parseFloat( this.autopayMaximum ) )
                .subscribe(
                    success => this.cancel.emit( null ),
                    error =>  console.log( error ));
        }

    }

    onClickInput(event,type){
        let data = {
            input: <HTMLInputElement>event.target.parentElement.getElementsByTagName('input')[0],
            span: <HTMLElement>event.target.parentElement.getElementsByTagName('span')[0],
            type: type
        };

        this.onChangeAutopay.emit( data );
    }

    changeAutopayMinimum(){
        this.onChangeAutopayMinimum.emit( this.autopayMinimum );

    }

    changeAutopayMaximum(){
        this.onChangeAutopayMaximum.emit( this.autopayMaximum );

    }

}

