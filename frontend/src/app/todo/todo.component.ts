import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService, Todo } from '../todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Todo List</h1>

      <div class="mb-4">
        <input
          type="text"
          [(ngModel)]="newTodoTitle"
          (keyup.enter)="addTodo()"
          placeholder="Add new todo"
          class="p-2 border rounded mr-2"
        />
        <button
          (click)="addTodo()"
          class="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <ul class="space-y-2">
        @for (todo of todos; track todo.id) {
        <li class="flex items-center space-x-2">
          <input
            type="checkbox"
            [checked]="todo.completed"
            (change)="toggleTodo(todo)"
          />
          <span [class.line-through]="todo.completed">
            {{ todo.title }}
          </span>
          <button (click)="deleteTodo(todo.id!)" class="text-red-500 ml-2">
            Delete
          </button>
        </li>
        }
      </ul>
    </div>
  `,
  styles: [],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  newTodoTitle = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  addTodo() {
    if (this.newTodoTitle.trim()) {
      const newTodo: Todo = {
        title: this.newTodoTitle,
        completed: false,
      };

      this.todoService.addTodo(newTodo).subscribe((todo) => {
        this.todos.push(todo);
        this.newTodoTitle = '';
      });
    }
  }

  toggleTodo(todo: Todo) {
    const updatedTodo = { ...todo, completed: !todo.completed };
    this.todoService.updateTodo(updatedTodo).subscribe((updated) => {
      const index = this.todos.findIndex((t) => t.id === updated.id);
      if (index !== -1) {
        this.todos[index] = updated;
      }
    });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    });
  }
}
