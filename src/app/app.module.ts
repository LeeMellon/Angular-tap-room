import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { NewKegComponent } from './new-keg/new-keg.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';


@NgModule({
  declarations: [
    AppComponent,
    KegListComponent,
    NewKegComponent,
    EditKegComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
