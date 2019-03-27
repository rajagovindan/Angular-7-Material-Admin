import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

const MatComponents = [
  MatCardModule,
  MatExpansionModule,
  MatInputModule,
  MatFormFieldModule,
  MatGridListModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule
]
@NgModule({
  imports: [MatComponents],
  exports:[MatComponents]
})
export class MaterialModule { }
