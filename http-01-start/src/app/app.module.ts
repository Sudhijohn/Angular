import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth.interceptor';
import { LogInterceptor } from './log-interceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass : AuthInterceptor, 
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS, 
      useClass : LogInterceptor, 
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
