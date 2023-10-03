import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { Message } from '../shared/message.model';
import { NgForm } from '@angular/forms';
import { TimestamService } from '../shared/timestam.service';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit{
  pathParamId!: number;
  message!: Message;

constructor(private route: ActivatedRoute, private dataStorageService: DataStorageService, private timestamp: TimestamService,){

}
  ngOnInit(): void {

this.route.params.subscribe(params=>{
      this.pathParamId = params['id'];
    })

    this.dataStorageService.getAMessage(this.pathParamId).subscribe(message=>{
      this.message = message;
    })

  }

  onCancel(f:any){
      
  }

  onSubmit(f:NgForm){
    if(f.valid){
      const subject = f.value.subject;
      const body = f.value.mBody;
      const email = f.value.email;
      const phone = String(f.value.phone);
      const timestamp = this.timestamp.timetamp;
      const messageId = f.value.messageId ? f.value.messageId : 0;
      console.log(f.value);
      const message: Message = new Message(messageId, subject,body,email,phone, timestamp);
      const id = this.pathParamId;
      this.dataStorageService.updateMessage(id, message).subscribe((response: any) =>{
        console.log(response);
      })

    }
      }



}
