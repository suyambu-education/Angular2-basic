import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import {JsonDataServiceService} from './services/json-data-service.service';
@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [JsonDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
