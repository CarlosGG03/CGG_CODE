import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import data from 'src/app/Componetes/datatable/Data.json'
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent{
  
  Data: any = data;
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject<any>();
   data: any;

}
