import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  searchForm = new FormGroup({
    userId: new FormControl(''),
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getElementByID() {
    let userId = this.searchForm.get('userId').value;
    return this.router.navigate([`./user-details/${userId}`]);
  }

  isValidInputWithNumbersOnly() {
    const regex = new RegExp(/^[0-9]*$/);
    console.log(regex.test(this.searchForm.get('userId').value));
    return regex.test(this.searchForm.get('userId').value);
  }

}
