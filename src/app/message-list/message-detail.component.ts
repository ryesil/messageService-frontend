import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit{
  pathParamId!: number;


constructor(private route: ActivatedRoute, private dataStorageService: DataStorageService){

}
  ngOnInit(): void {
    this.fibonacciNumbers(4);
    this.reverseString("ramazan");
    this.swapTwoNumbers(2,3);
this.route.params.subscribe(params=>{
      this.pathParamId = params['id'];
    })

    this.dataStorageService.getAMessage(this.pathParamId).subscribe(message=>{
      console.log(message);
    })

  }

  onCancel(f:any){
      
  }

  onSubmit(f:any){

  }

reverseString(str:string){
  const strArr = str.split("");
  let str2 = "";
  for(let i = strArr.length - 1 ; i>=0;i--){
    str2+=strArr[i];
  }
  console.log(str2);
}

reverseString2(str:string){
  return str.split("").reverse().join("");
}

swapTwoNumbers(n1:number, n2:number){
let n3 = 0;
n3 = n1;
n1 = n2;
n2 = n3;

console.log(n1,n2);
}

fibonacciNumbers(num: number){
  let container = [2,3];
  
  for(let i = 0 ; i < num -2; i++){
      container.push(container[i] + container[i+1]);
  }
  console.log(container);
}
}
