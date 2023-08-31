import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SerchBoxComponent } from './componets/serch-box/serch-box-componet';
import { CardListComponent } from './componets/card-list/card-list.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SerchBoxComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
