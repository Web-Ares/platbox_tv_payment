import {Injectable} from 'angular2/core';
import { Http, Response, RequestOptions, RequestMethod } from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class AutopayService {
    constructor (private http: Http) {}
    private _url: string = 'app/php/autopay.php';

    save (data): Observable<any[]> {

        let options = new RequestOptions({
            search: data,
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
        console.error(errMsg);
        return Observable.throw(errMsg);

    }
}