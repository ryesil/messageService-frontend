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

addTwoNumbers(l1:number[],l2:number[]){
  const num1 = Number(l1.reverse().join(''));
  const num2 = Number(l2.reverse().join(''));
  const num3 = num1+num2;
  return String(num3).split('').map(el=>Number(el)).reverse();
}

addTwoNumbers2(l1:number[],l2:number[]){
  let num1 = "";
  let num2 = "";

  for(let i = l1.length - 1 ; i >= 0; i--){
    num1 += l1[i];
  };

  for(let i = l2.length - 1 ; i >= 0; i--){
    num2 += l2[i];
  };
const num3 = parseInt(num1) + parseInt(num2);
return String(num3).split("").map(str=>Number(str));


}


}
