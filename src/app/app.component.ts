import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'form1';
  topics = ['Angular ', 'React', 'Vue'];
  topicHasError = true;

  userModel = new User('anish', 'anish@gmail.com', 9867419921, 'default', 'morning ', true);

  validateTopic(value: any) {
    if (value === 'default') {
      this.topicHasError = true;

    }
    else {
      this.topicHasError = false;
    }
  }

}
