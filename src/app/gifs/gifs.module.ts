import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SerchBoxComponent } from './componets/serch-box/serch-box-componet';
import { CardListComponent } from './componets/card-list/card-list.component';
import { GifsCardComponent } from './componets/gifs-card/gifs-card.component';



@NgModule({
  declarations: [
    CardListComponent,
    GifsCardComponent,
    HomePageComponent,
    SerchBoxComponent,
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
