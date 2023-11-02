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
  data: any;

  // Paginator Properties
  pageEvent!: PageEvent;
  length = 100;
  pageSize = 6;
  pageIndex = 0;
  pageSizeOptions = [6, 12, 24];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    /**
     * @description Initial Data Fetch
     */
    this.dataService.getOnePage(this.pageIndex, this.pageSize).subscribe({
      next: (val) => {
        this.data = val.data;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  /**
   * @description Pagination
   * @param e The PageEvent being fired by Mat-Paginator
   */
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    this.isLoading = true;
    this.dataService.getOnePage(this.pageIndex, this.pageSize).subscribe({
      next: (val) => {
        this.data = val.data;
      },
      error: (err) => console.log(err),
      complete: () => (this.isLoading = false),
    });
  }
}
