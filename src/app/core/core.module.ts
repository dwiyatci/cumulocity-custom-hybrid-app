import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CoreModule as C8YCoreModule,
  HOOK_ACTION,
  HOOK_ACTION_BAR,
  HOOK_BREADCRUMB,
  HOOK_NAVIGATOR_NODES,
  HOOK_TABS
} from '@c8y/ngx-components';

import { HelloActionsFactory } from '../hello/hello-actions.factory';
import { HelloBreadcrumbFactory } from '../hello/hello-breadcrumb.factory';
import { HelloNavigationNodesFactory } from '../hello/hello-navigation-nodes.factory';
import { HelloTabsFactory } from '../hello/hello-tabs.factory';
import { LazyNavigationNodesFactory } from '../lazy/lazy-navigation-nodes.factory';
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  imports: [BrowserAnimationsModule, C8YCoreModule.forRoot()],
  exports: [BrowserAnimationsModule],
  providers: [
    { provide: HOOK_NAVIGATOR_NODES, useClass: HelloNavigationNodesFactory, multi: true },
    { provide: HOOK_NAVIGATOR_NODES, useClass: LazyNavigationNodesFactory, multi: true },
    { provide: HOOK_TABS, useClass: HelloTabsFactory, multi: true },
    { provide: HOOK_BREADCRUMB, useClass: HelloBreadcrumbFactory, multi: true },
    { provide: HOOK_ACTION, useClass: HelloActionsFactory, multi: true }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
