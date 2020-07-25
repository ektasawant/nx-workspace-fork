import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'index',
        pathMatch: 'full',
        component: IndexComponent
      }
    ])
  ],
  declarations: [IndexComponent],
})
export class ProductsIndexPageModule {}
