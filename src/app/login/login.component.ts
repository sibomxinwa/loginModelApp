import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

email = '';
password = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onMenuPage() {
    this.router.navigate(['/details'], { queryParams: { email: this.email, password: this.password } });
  }

}
