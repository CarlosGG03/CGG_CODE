import { Component, OnInit,OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'TT_OPI';
  dtOptions: DataTables.Settings = {}
  data: any = [];

  constructor(private httpClient: HttpClient) {}
    ngOnDestroy(): void {
        throw new Error('Method not implemented.');
    }
  ngOnInit() {
    this.dtOptions = {
      language: {
        url:"//cdn.datatables.net/plug-ins/1.12.1/i18n/es-ES.json"
      }
    }
   
  }
 
}
