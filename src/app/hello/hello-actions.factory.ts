import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action, ActionFactory, gettext } from '@c8y/ngx-components';

@Injectable()
export class HelloActionsFactory implements ActionFactory {
  constructor(private router: Router) {}

  get(): Action[] {
    const actions: Action[] = [];

    const flourishAction = {
      label: ' ' + gettext('Flourish life'),
      icon: 'pagelines',
      action: () =>
        alert(gettext('...then life can flourish more richly, both in numbers and variety.')),
      disabled: false
    };

    if (this.router.url.match(/anotherworld/g)) {
      flourishAction.disabled = true;
    }

    actions.push(flourishAction);

    return actions;
  }
}
