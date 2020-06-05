import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BackendDataService } from './service/data/backend-data.service';
import { HeaderCmpComponent } from './components/header-cmp/header-cmp.component';
import { ExcelExportService } from './service/excel-export.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderCmpComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
