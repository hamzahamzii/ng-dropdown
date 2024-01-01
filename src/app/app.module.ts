import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { DropdownFilterComponent } from './components/dropdown/dropdown-filter.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, DropdownFilterComponent],
  imports: [BrowserModule, FormsModule, StoreModule.forRoot(reducers)],
  bootstrap: [AppComponent],
})
export class AppModule {}
