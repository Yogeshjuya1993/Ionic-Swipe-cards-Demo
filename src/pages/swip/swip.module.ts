import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwipPage } from './swip';

@NgModule({
  declarations: [
    SwipPage,
  ],
  imports: [
    IonicPageModule.forChild(SwipPage),
  ],
})
export class SwipPageModule {}
