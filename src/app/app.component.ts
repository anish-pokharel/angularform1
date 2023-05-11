import { Component } from '@angular/core';
import { User } from './user';
import { EnrollementService } from './enrollement.service';
import * as alertyfy from "alertifyjs"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'form1';
  topics = ['Angular ', 'React', 'Vue'];
  topicHasError = true;
  submitted = false;
  errorMsg = ""

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
    this.submitted = true
    // alertyfy.success("congrulation you are sucess")
    this._enrollementService.enroll(this.userModel)
      .subscribe({
        next: (data: any) => {
          console.log('success', data);
          alertyfy.sucess("congrulation you are sucess");
        },
        error: (error: any) => {

          // this.errorMsg = error.statusText
          alertyfy.error("Error Message");
        }

      }

      );
  }

}
