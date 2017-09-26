import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css']
})
export class AddlistComponent implements OnInit {
name:string;
age:string;
  constructor() { }

  ngOnInit() {
  }

demo(){
  
  alert(this.name+" "+this.age);
}
}
