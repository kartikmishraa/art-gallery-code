import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss'],
})
export class ArtworkComponent {
  constructor(private route: ActivatedRoute) {
    this.artId = route.snapshot.params['id'];
    console.log(this.artId);
  }

  artId: string = '';
}
