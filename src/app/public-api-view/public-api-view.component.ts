import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-public-api-view',
  templateUrl: './public-api-view.component.html',
  styleUrls: ['./public-api-view.component.css']
})
export class PublicApiViewComponent {
  data:any = {}

  constructor(private api:ApiService){
    api.publicApi().subscribe(
      (response) => {
        this.data = response;
      }
    )
  }
}
