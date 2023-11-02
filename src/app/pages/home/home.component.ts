import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService } from 'src/shared/services/router.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public myRouter: RouterService) {}
}
