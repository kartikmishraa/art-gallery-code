import { Component, Input } from '@angular/core';
import { RouterService } from 'src/shared/services/router.service';

@Component({
  selector: 'app-card-temp',
  templateUrl: './card-temp.component.html',
  styleUrls: ['./card-temp.component.scss'],
})
export class CardTempComponent {
  constructor(public myRouter: RouterService) {}

  @Input() title: string = 'Card Title';
  @Input() subtitle: string = 'Subtitle';
  @Input() imgSrc: string = '';
  @Input() artId: string = '';
}
