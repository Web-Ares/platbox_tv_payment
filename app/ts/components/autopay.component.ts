import { Component, Output, EventEmitter, Input } from 'angular2/core';
import { AutopayService } from './../services/autopay.service';

@Component({
    selector: 'my-autopay',
    templateUrl: 'app/templates/autopay.component.html',
    styleUrls: [ 'app/css/autopay.component.css' ],
    providers: [ AutopayService ]
})

export class AutopayComponent{
    @Input() autopayMaximum;
    @Input() autopayMinimum;
    @Output() cancel = new EventEmitter();
    @Output() onChangeAutopayMinimum = new EventEmitter();
    @Output() onChangeAutopayMaximum = new EventEmitter();


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


   //  ngAfterContentInit(){
   //      this._transactionService.pay( this.paymentData )
   //                              .subscribe(
   //                                  success => this._showSuccess( success ),
   //                                  error =>  this._showFailed());
   // }


    onCancel(){
        this.cancel.emit( null );
    }
    

    onOk(){
       this.save = true;
    }

    onSave(){
             this._autopayService.save( 'minimum=' + parseFloat( this.autopayMinimum ) +'&saveSum=' + parseFloat( this.autopayMaximum ) )
                                     .subscribe(
                                         success => this.cancel.emit( null ),
                                         error =>  console.log( error ));
    }

    changeAutopayMinimum(){
        this.onChangeAutopayMinimum.emit( this.autopayMinimum );

    }

    changeAutopayMaximum(){
        this.onChangeAutopayMaximum.emit( this.autopayMaximum );

    }

}

