import { Component, OnInit } from '@angular/core';
import { TodolistService } from './services/todolist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todolist-webapp';

  constructor(private todolistService : TodolistService){ }
  ngOnInit(): void { 
   

    }
  }

