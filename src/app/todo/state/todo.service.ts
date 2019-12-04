import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { TodoStore } from './todo.store';
import { Todo } from './todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {

  constructor(private todoStore: TodoStore,
    private http: HttpClient) {
  }

  get() {
    this.http.get('https://next.json-generator.com/api/json/get/41xe6a5Dw')
      .subscribe((entities: any) => this.todoStore.set(entities));
  }

  add(todo: Todo) {
    this.todoStore.add(todo);
  }

  update(id, todo: Partial<Todo>) {
    this.todoStore.update(id, todo);
  }

  remove(id: ID) {
    this.todoStore.remove(id);
  }
}
