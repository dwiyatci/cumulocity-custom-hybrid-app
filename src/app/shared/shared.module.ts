import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule as C8YCoreModule } from '@c8y/ngx-components';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, C8YCoreModule],
  declarations: [PageNotFoundComponent],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, C8YCoreModule, PageNotFoundComponent]
})
export class SharedModule {}
