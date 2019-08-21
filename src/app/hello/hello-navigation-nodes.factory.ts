import { Injectable } from '@angular/core';
import { gettext, NavigatorNode, NavigatorNodeFactory } from '@c8y/ngx-components';

@Injectable()
export class HelloNavigationNodesFactory implements NavigatorNodeFactory {
  get(): NavigatorNode[] {
    return [
      new NavigatorNode({
        path: '/hello',
        label: gettext('Hello'),
        icon: 'globe',
        priority: 100
      })
    ];
  }
}
