import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/tasks';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  newTaskTitle = '';

  constructor(public taskService: TaskService) {}

  addTask() {
    if (this.newTaskTitle.trim()) {
      this.taskService.addTask(this.newTaskTitle);
      this.newTaskTitle = '';
    }
  }
}
