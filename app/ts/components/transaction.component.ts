import { Component, AfterContentInit, Input, Output, EventEmitter } from 'angular2/core';
import { TransactionService } from './../services/transaction.service';

@Component({
    selector: 'my-transaction',
    templateUrl: 'app/templates/transaction.component.html',
    styleUrls: [ 'app/css/transaction.component.css' ],
    providers: [ TransactionService ]
})

export class TransactionComponent implements AfterContentInit{
    @Input() paymentData: Object;
    @Output() cancel = new EventEmitter();
    @Output() showAutoPay = new EventEmitter();


    success: boolean = false;
    failed: boolean = false;
    errorMessage: string;
    number: string;
    date: string;
    amount: string;
    content = {
        successTitle: 'Транзакция успешно совершена',
        number: 'Номер транзакции',
        date: 'Дата',
        amount: 'Сумма',
        btnOk: 'Готово',
        failTitle: 'Не удалось совершить транзакцию',
        failText: 'При проведении транзакции произошла ошибка. Попробуйте повторить операцию позже или обратетись в техническую поддержку.',
        btnCancel: 'отмена',
        btnRepeat: 'повторить'
    };

    constructor(private _transactionService: TransactionService){}


    ngAfterContentInit(){
        this._transactionService.pay( this.paymentData )
                                .subscribe(
                                    success => this._showSuccess( success ),
                                    error =>  this._showFailed());
   }

    private _showSuccess( success ){

        this.number = success.id;
        this.date = success.date;
        this.amount = success.price;

        this.success = true;

    }

    private _showFailed(){

        this.failed = true;

    }

    onCancel(){
        this.cancel.emit( null );
    }

    onRepeat(){
        this.failed = false;

        this._transactionService.pay( this.paymentData )
            .subscribe(
                success => this._showSuccess( success ),
                error =>  this.errorMessage = <any>error);
    }

    onOk(){
        this.showAutoPay.emit( null );
    }

}

