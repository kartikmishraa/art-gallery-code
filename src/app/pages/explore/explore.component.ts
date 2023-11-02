import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { DataService } from 'src/shared/services/data.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  isLoading = true;
  tempData: any;

  pageEvent!: PageEvent;
  length = 100;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log('ngOnInit()');

    this.dataService.getOnePage(this.pageIndex, this.pageSize).subscribe({
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

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    console.log('handePageEvent()');
    console.log('this.pageSize: ', this.pageSize);
    console.log('e.pageSize: ', e.pageSize);
    console.log('this.pageIndex: ', this.pageIndex);
    console.log('e.pageIndex: ', e.pageIndex);

    this.isLoading = true;
    this.dataService.getOnePage(this.pageIndex, this.pageSize).subscribe({
      next: (val) => {
        this.tempData = val.data;
      },
      error: (err) => console.log(err),
      complete: () => (this.isLoading = false),
    });
  }
}
