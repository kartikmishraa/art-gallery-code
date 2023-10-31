import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/shared/services/data.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  isLoading = true;
  tempData: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log('ngOnInit()');

    this.dataService.getOnePage(5, 40).subscribe({
      next: (val) => {
        console.log(val.data);
        this.tempData = val.data;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete()');
        this.isLoading = false;
      },
    });
  }
}
