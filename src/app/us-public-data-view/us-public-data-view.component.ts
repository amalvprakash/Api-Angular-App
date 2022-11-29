import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-us-public-data-view',
  templateUrl: './us-public-data-view.component.html',
  styleUrls: ['./us-public-data-view.component.css']
})
export class UsPublicDataViewComponent {
  data:any ={}

  constructor(private api:ApiService){
    api.usPublic().subscribe(
      (response) => {
        this.data = response;
      }
    )
  }
}
