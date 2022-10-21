import { Component, OnInit } from '@angular/core';
import { Todolist } from 'src/app/models/todolist.model';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(private todolistService: TodolistService) { }

  todolists: Todolist[] = [];
  popupAddTodolistDisplay: boolean = false;

 async ngOnInit()  {
    // this.todolistService.getTodolist().then(res => {
    //   this.todolists = res.data;
    // })
    var _todolist = await this.todolistService.getTodolist() ; 
    this.todolists = _todolist.data; 
  
  }

  addTodolist() {
   this.setpopupAddTodolistDisplay(true)
 

  }

  editTodolist(td: Todolist) {

  
  }
  deleteTodolist(td: Todolist) {

  }

  setpopupAddTodolistDisplay(display: boolean) {
     this.popupAddTodolistDisplay = true;
  }
}
