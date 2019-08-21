import { Component } from '@angular/core';
import { gettext } from '@c8y/ngx-components';

@Component({
  selector: 'hello',
  template: `
    <c8y-action-bar-item [placement]="'right'">
      <a class="btn btn-link" (click)="saveTheEarth()">
        <i c8yIcon="ravelry"></i>&nbsp; {{ 'Save the Earth' | translate }}
      </a>
    </c8y-action-bar-item>
    <marquee>hello, world</marquee>
  `
})
export class HelloComponent {
  saveTheEarth() {
    alert(gettext('we love the earth, it is our planet. we love the earth, it is our home.'));
  }
}
