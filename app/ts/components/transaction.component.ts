import { Component, AfterContentInit } from 'angular2/core';
import { TransactionService } from './../services/transaction.service';

@Component({
    selector: 'my-transaction',
    templateUrl: 'app/templates/transaction.component.html',
    styleUrls: [ 'app/css/transaction.component.css' ],
    providers: [ TransactionService ]
})

export class TransactionComponent implements AfterContentInit{
    success: boolean = false;
    failed: boolean = false;

    constructor(private _transactionService: TransactionService){}


    ngAfterContentInit(){
        console.log( 2 );
        this._transactionService.pay( {'ttt':'ttt'} ).then(transaction => console.log( transaction ));
    }

}

