import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public title = '';

  todo = [
    'Get to work',
    'Pick up groceries',
    'Brush teeth',
    'Take a shower',
    'Buy eggs'
  ];

  processed = [
    'Saw thing',
    'Hit the gym',
    'Read a book'
  ];

  done = [
    'Get up',
    'Pay bills'
  ];

  constructor() { }
  
  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    };
  };

}
