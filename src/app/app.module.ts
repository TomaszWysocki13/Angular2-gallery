import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing.module';

import { GalleryComponent } from './gallery/gallery.component';
import { CarsComponent } from './gallery/cars/cars.component';
import { SmartphonesComponent } from './gallery/smartphones/smartphones.component';
import { HeadphonesComponent } from './gallery/headphones/headphones.component';
import { MousesComponent } from './gallery/mouses/mouses.component';
import { GalleryService } from "./gallery/gallery.service";

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    CarsComponent,
    SmartphonesComponent,
    HeadphonesComponent,
    MousesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
