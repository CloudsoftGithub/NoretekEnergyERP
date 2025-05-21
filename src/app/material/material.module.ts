import { NgModule } from '@angular/core';
 import {MatButtonModule} from '@angular/material/button';
 import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

 const material = [
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
 ];
@NgModule({  
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
