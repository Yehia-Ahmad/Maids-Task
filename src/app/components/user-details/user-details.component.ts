import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  data$: any;
  pageNum: number = 1;
  totalPages: number;
  isError: boolean = false;
  loading$ = this.loader.loading$;

  constructor(private api: ApiService, private loader: LoadingService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.getCardDetails(id);
    });
  }

  getCardDetails(id: string) {
    this.api.getElementByID(id).subscribe((res: any) => {
      this.data$ = res.data;
      this.isError = false;
    }, (error) => {
      this.isError = true;
    });
  }

  getPeopleDetails() {
    return this.router.navigate([`./home`]);
  }

}
