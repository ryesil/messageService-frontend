import { Injectable } from '@angular/core';
import { Message } from './message.model';
import { HttpClient } from '@angular/common/http';
import { ApiUrls } from './api-urls.enum';
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  id!: number

  constructor(private httpClient: HttpClient) { }

  saveMessage(message:Message){
    this.httpClient.post(ApiUrls.BASE_API+'/new',message).subscribe(response=>{
      console.log(response);
    })
  }

  getMessages(){
   return this.httpClient.get<Message[]>(ApiUrls.BASE_API+'/messages');
  }


  getAMessage(id:number){
    return this.httpClient.get<Message>(ApiUrls.BASE_API+'/messages/'+id);
  }



}
