import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public items = [];
  public user = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }


login() {
  console.log(this.user);
  this.items.push(this.user);
  this.user = {
    email: '',
    password: ''
  };
}}
