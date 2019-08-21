import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { gettext, Tab, TabFactory } from '@c8y/ngx-components';

@Injectable()
export class HelloTabsFactory implements TabFactory {
  constructor(private router: Router) {}

  get(): Tab[] {
    const tabs: Tab[] = [];

    if (this.router.url.match(/hello/g)) {
      tabs.push({
        path: '/hello/world',
        label: gettext('World'),
        icon: 'globe',
        priority: 1001
      });

      tabs.push({
        path: '/hello/anotherworld',
        label: gettext('Another world'),
        icon: 'wordpress'
      });
    }

    return tabs;
  }
}
