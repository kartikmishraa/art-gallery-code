import { Component, Input } from '@angular/core';
import { RouterService } from 'src/shared/services/router.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor(public myRouter: RouterService) {}

  @Input() title: string = 'Card Title';
  @Input() subtitle: string = 'Subtitle';
  @Input() imgSrc: string = '';
  @Input() artId: string = '';
  @Input() isAlt = false;
}
