import { Component} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { NgForm } from '@angular/forms';
import { Message } from '../shared/message.model';
import { TimestamService } from '../shared/timestam.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent {

  constructor(private dataStorageService: DataStorageService, private timestamp: TimestamService, private router: Router){

  }



  onSubmit(f:NgForm){
    if(f.control.valid){
      const subject = f.value.subject;
      const body = f.value.mBody;
      const email = f.value.email;
      const phone = String(f.value.phone);
      const timestamp = this.timestamp.timetamp;
      const messageId = f.value.messageId ? f.value.messageId : 0;
      console.log(f.value);
      const message: Message = new Message(messageId, subject,body,email,phone, timestamp);
      console.log(message);
      this.dataStorageService.saveMessage(message);
    } else {
      console.log("Form is not valid");
    }
  }


  onCancel(f:NgForm){
    console.log(f.control.pristine);
    console.log(f.control.touched);
    if(f.control.pristine && !f.control.touched){
      this.router.navigate(['/home']);
      f.reset();
    } else {
      if(window.confirm("Do you want to quit?"))
      this.router.navigate(['/home']);
    }

  }


}
