import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

import { StoreModule } from '@ngrx/store';
import { fileUploadReducer } from './file-upload/file-upload.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ 
      fileUploadReducer
    }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
