import { Component } from '@angular/core';
import { User } from './user';
import { EnrollementService } from './enrollement.service';

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

  constructor(private _enrollementService: EnrollementService) { }

  validateTopic(value: any) {
    if (value === 'default') {
      this.topicHasError = true;

    }
    else {
      this.topicHasError = false;
    }
  }
  onSubmit() {
    this._enrollementService.enroll(this.userModel)
      .subscribe({
        next: (data: any) => {
          console.log('success', data);
        },
        error: (error: any) => {
          console.error('error', error);
        }
      });
  }

}
