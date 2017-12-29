import { Component, Input, OnInit } from '@angular/core';
import { Buttons } from './../../core/consts';

@Component({
  selector: 'c-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() key: string;
  @Input() type: string;
  public typeClass: string;

ngOnInit() {
  this.typeClass = this.assignType(this.type);
}

  public assignType(type: string): string {
    let className: string;
    switch (type) {
      case Buttons[Buttons.short]:
        className = 'default-btn--short';
        break;
      case Buttons[Buttons.tall]:
        className = 'default-btn--tall';
        break;
      case Buttons[Buttons.smallFont]:
        className = 'default-btn--small-font';
        break;
      case Buttons[Buttons.guards]:
        className = 'default-btn--has-guards';
        break;
        case Buttons[Buttons.warn]:
          className = 'default-btn--warn';
        break;
    }
    return className;
  }
}
