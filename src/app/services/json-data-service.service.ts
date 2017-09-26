import { Injectable } from '@angular/core';
import{Http} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class JsonDataServiceService {

  constructor( private _http:Http) { }

  getData(){
    
        return this._http.get('jsondata/db.json')
                    .map(resp => resp.json());
    
      }
  putData(a){
    return this._http.post('jsondata/db.json',a);
    
  }

}
