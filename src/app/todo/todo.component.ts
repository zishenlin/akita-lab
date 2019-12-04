import { Component, OnInit } from '@angular/core';
import { TodoService } from './state/todo.service';
import { TodoQuery } from './state/todo.query';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todo$ = this.todoQuery.todo$;
  constructor(
    private todoService: TodoService,
    private todoQuery: TodoQuery,
  ) { }

  ngOnInit() {
    this.todoService.get();
  }

  add() {
    this.todoService.add({ id: Math.floor(((Math.random() * 100) + 1)), name: new Date().getTime() + '' })
  }

  update() {
    this.todoService.update(1, { name: 'update 1' });
  }

  remove() {
    this.todoService.remove(2);
  }
}
