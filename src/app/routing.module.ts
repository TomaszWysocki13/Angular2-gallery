import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { CarsComponent }   from './gallery/cars/cars.component';
import { SmartphonesComponent }   from './gallery/smartphones/smartphones.component';
import { HeadphonesComponent }   from './gallery/headphones/headphones.component';
import { MousesComponent }   from './gallery/mouses/mouses.component';

const appRoutes: Routes = [
  { path: 'gallery/cars', component: CarsComponent },
  { path: 'gallery/smartphones', component: SmartphonesComponent },
  { path: 'gallery/headphones', component: HeadphonesComponent },
  { path: 'gallery/mouses', component: MousesComponent },
  { path: '',   redirectTo: '/gallery/cars', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
