import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/shared/services/data.service';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss'],
})
export class ArtworkComponent implements OnInit {
  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.artId = route.snapshot.params['id'];
    console.log(this.artId);
  }

  artId: string = '';
  artObject: any;
  imgSrc!: string;
  isLoading = true;

  ngOnInit(): void {
    /**
     * @description Fetches single artwork details from the API
     */
    this.dataService.getOneArtwork(this.artId).subscribe({
      next: (val) => {
        this.artObject = val.data;
        this.imgSrc = `https://www.artic.edu/iiif/2/${this.artObject.image_id}/full/843,/0/default.jpg`;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
