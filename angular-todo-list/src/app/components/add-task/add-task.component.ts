import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask = new EventEmitter<Task>();

  title: string;
  description: string;
  completed: boolean = false;
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {}

  addTask() {
    if (!this.title) {
      alert('Please enter a task !');
      return;
    }

    const newTask = {
      title: this.title,
      description: this.description,
      completed: this.completed
    }

    this.onAddTask.emit(newTask);

    this.title = '';
    this.completed = false;
  }
}
