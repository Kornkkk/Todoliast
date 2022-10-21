import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'popup-add-todolist',
  templateUrl: './add-todolist.component.html',
  styleUrls: ['./add-todolist.component.css']
})
export class AddTodolistComponent implements OnInit {

   @Input() display: boolean = false;
   @Output() displayDialog = new EventEmitter<boolean>();

  todolistForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  initialForm() {
   this.todolistForm = this.fb.group ({
    header: [null , Validators.required],
    detail: [],
    remindDate: [],
   }) 
  }
   
  cancel() {
    this.displayDialog.emit(false);
  }

  submitAddTodolist(){

  }
}
