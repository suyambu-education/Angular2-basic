import { Injectable } from '@angular/core';
import{Http} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class JsonDataServiceService {

  constructor( private _http:Http) { }

  getAllJson(){
    
        return this._http.get('jsondata/db.json')
                    .map(resp => resp.json());
    
      }

}
