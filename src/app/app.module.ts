import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DisplaySentenceComponent } from './display-sentence/display-sentence.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { FetchDataService } from './fetch-data.service';
import { DisplayRefreshComponent } from './display-refresh/display-refresh.component';
import { ParentComponent } from './parent/parent.component';


@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule,],
  declarations: [AppComponent, DisplaySentenceComponent, InputOutputComponent, DisplayRefreshComponent, ParentComponent],
  bootstrap: [AppComponent],
  providers: [FetchDataService]
})
export class AppModule { }
