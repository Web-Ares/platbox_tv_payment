import {Injectable} from 'angular2/core';
import { PAYMENTTYPES } from './../mock/mock-paymen-types';

@Injectable()
export class PaymentTypesService {
    getPaymentTypes() {
        
        return  Promise.resolve( PAYMENTTYPES );
        //return HEROES;
    }
}