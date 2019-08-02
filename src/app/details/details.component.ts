import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() email: string;
  @Input() password: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      this.email = params.email;
      this.password = params.password;

      console.log(this.email);
      console.log(this.password);
    });
  }

}


