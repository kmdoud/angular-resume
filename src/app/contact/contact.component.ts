import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit 
{
  name: string = "Ken Doud";
  contact: string = "513-600-3890";
  email: string = "kmdoud@gmail.com";
  linkedin: string = "mylinkedIn profile";
  constructor() { }

  ngOnInit() {
  }

}
