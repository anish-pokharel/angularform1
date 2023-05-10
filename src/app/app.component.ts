import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form1';
  topics=['Angular ','React', 'Vue'];

  userModel= new User('Anish','anish@gmail.com',986741991,'','morning ', true);

}
