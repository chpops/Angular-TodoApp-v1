import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  public todo : string [];

  done = [
    'Get up',
    'Pay bills'
  ];

  process = [
    'Buy a helmet',
    'Learn Sketch',
    'Analyze the survey results'
  ];

  constructor() { };
  
  ngOnInit(): void {
    this.todo = ['Test Task 1', 'Test Task 2', 'Test Task 3']
  };

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

};
