import { Component } from '@angular/core';
import { CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList} from '@angular/cdk/drag-drop';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent {
  test = false;
  listOfQuestions = ['Question1', 'question2', 'question3', 'question4'];
  listOfAnswers = ['answer1', 'answer2', 'answer3','answer4']


  constructor(private router: Router){

  }


  drop(event:CdkDragDrop<string[]>){
    console.log(' 1'+event.previousContainer.data,
      ' 2'+event.container.data,
      ' 3'+event.previousIndex,
      ' 4'+event.currentIndex,)
      console.log(event.previousContainer === event.container)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    console.log(this.listOfAnswers.length);
    console.log(this.listOfQuestions.length);
    if(this.listOfQuestions.length === 0){
      this.listOfQuestions.push('And Of Questions');
    }
  }

onYes(){
this.test = true;
}

onNo(){
  this.router.navigate(['/home'])
}
}
