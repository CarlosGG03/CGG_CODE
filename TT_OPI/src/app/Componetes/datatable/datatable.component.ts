import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnDestroy,OnInit {
  

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject<any>();
   data: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.http.get('https://github.com/CarlosGG03/CGG_CODE/blob/master/TT_OPI/src/assets/Data.json')
      .subscribe(console.log);
  }


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
