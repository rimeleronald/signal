import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { Service } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './button.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [AppComponent, ButtonComponent],
  providers: [Service],
  bootstrap: [AppComponent],
})
export class AppModule {}
