import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BackendDataService, DataBean } from './service/data/backend-data.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import * as XLSX from 'xlsx';
import { ExcelExportService } from './service/excel-export.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  cars: any = [];
  carsfinal: any =[];
  name: String;
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  carsdata: any[];
  selectedItems: any = [];
  dropdownSettings: IDropdownSettings;
  obj: any;
  exceldata: any;
  title = 'data';
  clickMessage = '';
  postmessage = '';

  constructor(private service: BackendDataService, private excelService: ExcelExportService) {

  }
  ngOnInit() {
    this.carsdata = [
      { item_id: 1, item_text: 'Bugati' },
      { item_id: 2, item_text: 'Audi' },
      { item_id: 3, item_text: 'Tesla' },
      { item_id: 4, item_text: 'Benz' },
      // { item_id: 4, item_text: 'Ferrari' }
    ];
    // this.selectedItems = [{ item_id: 3, item_text: 'Tesla' },
    // { item_id: 4, item_text: 'Benz' }];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'SelectAll',
      unSelectAllText: 'Unselect All',
      itemsShowLimit: 3,
      allowSearchFilter: this.ShowFilter
    }
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  getdata() {

    console.log(this.name);
    // console.log(this.service.executeGetDataService());
    this.service.executeGetDataService(this.name).subscribe(
      response => this.handleSuccessfulResponse(response)
    );

    
  }
  postdata() {

    this.cars = [];
    for (this.obj in this.selectedItems) {
      // console.log(this.selectedItems[this.obj].item_text);
      this.cars.push(this.selectedItems[this.obj].item_text);
    }
    // console.log(this.cars);
    this.service.executePOstDataService(new DataBean(this.name, this.cars)).subscribe(
      res => {
        console.log(res)
      }
    );

    this.postmessage = `Posted data successfully `;
  }
  handleSuccessfulResponse(response: DataBean) {
    this.name = response.name;
    this.cars = response.cars;
    this.carsfinal= response.cars;
    this.clickMessage = `My name is  ${this.name} and my car is ${this.carsfinal};`;
    console.log(response);
    this.exceldata = [{
      name: response.name,
      cars: response.cars[0]
    }, { cars: response.cars[1] }, { cars: response.cars[2] }, { cars: response.cars[3] }, { cars: response.cars[4] }];

    // this.exceldata=response;
    this.excelService.exportAsExcelFile(this.exceldata, 'sample')
    // console.log(this.cars);

  }
}