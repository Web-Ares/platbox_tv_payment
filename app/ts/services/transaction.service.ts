import {Injectable} from 'angular2/core';
// import { TRANSACTION } from './../mock/mock-transaction';
import { Http, Response, RequestOptions, RequestMethod } from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class TransactionService {
    constructor (private http: Http) {}
    private _url: string = 'app/php/transaction.php';

    pay (data): Observable<any[]> {

        let dataStrng: string = '';

        for( var k in data ){
            if( dataStrng === '' ){
                dataStrng += ( k + '=' + data[ k ] );
            } else {
                dataStrng += ('&' + k + '=' + data[ k ] );
            }
        }

        let options = new RequestOptions({
            search: dataStrng,
            method: RequestMethod.Get
        });
        return this.http.get(this._url, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }

        let body = res.json();

        return body || { };
    }
    private handleError (error: any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);

    }
}