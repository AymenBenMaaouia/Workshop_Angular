import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {
  constructor(private router: Router) {}

  addApartment() {
    this.router.navigate(['/add-apartment']);
  }
}
