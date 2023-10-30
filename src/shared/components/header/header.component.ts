import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  imgSource = 'https://api.artic.edu/docs/assets/logo.svg';
  constructor(private router: Router) {}

  redirectToUrl(url: string): void {
    this.router.navigateByUrl(url);
  }
}
