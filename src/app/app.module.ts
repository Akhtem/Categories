import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon'; 
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, CategoryListComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, MatTreeModule, MatIconModule, RouterModule], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
