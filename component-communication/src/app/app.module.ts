import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddServerComponent } from './add-server/add-server.component';
import { ListServerComponent } from './list-server/list-server.component';

@NgModule({
  declarations: [
    AppComponent,
    AddServerComponent,
    ListServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
