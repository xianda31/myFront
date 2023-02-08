import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialsModule } from './shared/materials.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { SortPipe } from './shared/pipes/sortPipe';




@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SortPipe,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialsModule,
    HttpClientModule
  ],
  providers: [SortPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
