import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor() { }

  listData : MatTableDataSource<any>;
  displayColumns : string[] = ['options','DepartmentID','DepartmentName']



  ngOnInit() {
  }

}
