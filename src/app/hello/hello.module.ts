import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HelloRoutingModule } from './hello-routing.module';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [SharedModule, HelloRoutingModule],
  declarations: [HelloComponent],
  exports: []
})
export class HelloModule {}
