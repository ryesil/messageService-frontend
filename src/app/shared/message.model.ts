import { TimestamService } from "./timestam.service";

export class Message{

constructor(public id:number, public subject:string, public body:string, public email:string, public phoneNumber:string, public timestamp: Date){}

}