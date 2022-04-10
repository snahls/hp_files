import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class freeApiService{
    constructor(private http:HttpClient){

    }

    getStates(){
       return this.http.get('https://cdn-api.co-vin.in/api/v2/admin/location/states');
    }
}