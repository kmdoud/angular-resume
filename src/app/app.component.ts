import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-resume';

name: string = "Ken Doud";
contact: string = "513-600-3890";
email: string = "kmdoud@gmail.com";
linkedin: string = "mylinkedIn profile";

}
