import { NgModule } from '@angular/core';
import { UpgradeModule as NgUpgradeModule } from '@angular/upgrade/static';
import { HybridAppModule, UpgradeModule } from '@c8y/ngx-components/upgrade';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HelloModule } from './hello/hello.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    HelloModule,
    AppRoutingModule,
    NgUpgradeModule,
    // Upgrade module must be the last
    UpgradeModule
  ]
})
export class AppModule extends HybridAppModule {
  constructor(protected upgrade: NgUpgradeModule) {
    super();
  }
}
