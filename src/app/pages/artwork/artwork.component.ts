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
  isLoading = true;

  ngOnInit(): void {
    this.dataService.getOneArtwork(this.artId).subscribe({
      next: (val) => {
        this.artObject = val.data;
        console.log(this.artObject);
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
