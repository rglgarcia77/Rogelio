import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contact = {
    firstName: '',
    lastName: '',
    email: '',
    comment: ''

  };
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.post('http://localhost:8080/sendEamail', this.contact)
    .subscribe( (Response: any) => {
      console.log(Response);
    }, (error) => {
      console.log(error);
    });
  }
  submit() {

  }
}
