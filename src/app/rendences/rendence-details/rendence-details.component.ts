import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rendence-details',
  templateUrl: './rendence-details.component.html',
  styleUrls: ['./rendence-details.component.css']
})
export class RendenceDetailsComponent implements OnInit {
  residenceId!: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.residenceId = +params['id'];});
  }
}
