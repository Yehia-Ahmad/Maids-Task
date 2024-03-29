import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data$: any;
  pageNum: number = 1;
  totalPages: number;
  loading$ = this.loader.loading$;

  constructor(private api: ApiService, private loader: LoadingService, private router: Router) { }

  ngOnInit(): void {
    this.getPeopleDetails(`?page=${this.pageNum}`);
  }

  getPeopleDetails(urlParameter: string) {
    this.api.getPeopleDetails(urlParameter).subscribe((res: any) => {
      this.data$ = res.data;
      this.totalPages = res.total_pages;
    });
  }

  getCardDetails(id: string) {
    this.router.navigate(['./user-details', id]);
  }

  prevousPage() {
    if (this.pageNum === 1) return;
    this.pageNum--;
    this.getPeopleDetails(`?page=${this.pageNum}`);
  }

  nextPage() {
    if (this.pageNum === this.totalPages) return;
    this.pageNum++;
    this.getPeopleDetails(`?page=${this.pageNum}`);
  }

}
