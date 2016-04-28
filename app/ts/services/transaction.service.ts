import {Injectable} from 'angular2/core';
import { TRANSACTION } from './../mock/mock-transaction';

@Injectable()
export class TransactionService {
    pay( data ) {
        console.log( data );
        return  Promise.resolve( TRANSACTION );
        //return HEROES;
    }
}