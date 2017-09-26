import { Component, OnInit } from '@angular/core';
import{Http} from '@angular/http';
import {JsonDataServiceService} from './../services/json-data-service.service';

import 'rxjs/add/operator/map';
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
  
})
export class ListViewComponent implements OnInit {
  listValue:Array<any>;
  error:string;
  constructor(private _httpData:Http,private jsonservice:JsonDataServiceService) { }

  ngOnInit() {
    this.jsonservice.getAllJson()
        .subscribe(
          data => this.listValue=data,
          error => this.error=error.statusText
    );
  }
  

}
