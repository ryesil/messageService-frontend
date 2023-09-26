import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Subscription} from 'rxjs';
import * as moment from 'moment'
import { Message } from '../shared/message.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messageList: any[] = [];
  subscription!: Subscription;

 constructor(private dataStorageService : DataStorageService, private router: Router, private route: ActivatedRoute){

 }

  


  public ngOnInit(): void {
    this.subscription = this.dataStorageService.getMessages().subscribe({
      next:(messages: Message[])=>{
        messages.forEach(message => {

          this.messageList.push(
           {id:message.id, subject:message.subject, messageBody: message.body, email:message.email,phone:message.phoneNumber, date: moment(message.timestamp).format('MM-DD-YYYY hh:mm A').toString()})
        })
        console.log(this.messageList);
      },
      error:(error)=>{

      },
      complete:()=>{}
    })
  }

  rowClicked(i:number){
   const id = this.messageList[i].id;   
  this.router.navigate([id, {edit:false}], {relativeTo:this.route})
  }


}
