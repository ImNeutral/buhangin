import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  feed() {  
    this.router.navigate(['feed']);
  }

  stats() {  
    this.router.navigate(['statistics']);
  }

  actions() {  
    this.router.navigate(['actions']);
  }

  user() {  
    this.router.navigate(['user']);
  }

}
