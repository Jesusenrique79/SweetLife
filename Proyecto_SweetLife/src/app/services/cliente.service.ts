import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Cliente } from '../models/cliente';
import { Global } from './global';

@Injectable()
export class ClienteService{
    public url: string;

    constructor(
    
        private _http: HttpClient

    ) {
        this.url = Global.url;
    }

    testService() {
        return 'Probando el servicio de Angular';
    }
//METODO PARA GUARDAR EL CLIENTE
    saveCliente(cliente: Cliente): Observable<any> {
        let params = JSON.stringify(cliente);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'add', params, { headers: headers });
    }

}