import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private http: HttpClient) { }

  async getTodolist( ) : Promise<any> {
    return this.http.get<any>('https://localhost:44384/api/todolist/listToDoList',{  })
      .toPromise();     
  }   
}
