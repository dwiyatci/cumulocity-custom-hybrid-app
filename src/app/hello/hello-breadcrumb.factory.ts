import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Breadcrumb, BreadcrumbFactory, gettext } from '@c8y/ngx-components';

@Injectable()
export class HelloBreadcrumbFactory implements BreadcrumbFactory {
  constructor(private router: Router) {}

  get(): Breadcrumb {
    const breadcrumb: Breadcrumb = { items: [] };

    if (this.router.url.match(/hello/g)) {
      breadcrumb.items.push({
        label: gettext('Hello'),
        path: '/hello',
        icon: 'plane'
      });

      if (this.router.url.match(/\/world/g)) {
        breadcrumb.items.push({
          label: gettext('World'),
          path: '/hello/world'
        });
      }

      if (this.router.url.match(/anotherworld/g)) {
        breadcrumb.items.push({
          label: gettext('Another world'),
          path: '/hello/anotherworld'
        });
      }
    }

    return breadcrumb;
  }
}
