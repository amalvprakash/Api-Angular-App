import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  data:any = {}

  constructor(private api:ApiService){
    api.toDo().subscribe(
      (response) => {
        this.data = response;
      }
    )
  }
}
