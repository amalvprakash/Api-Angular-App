import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent {
  data:any = {}
  constructor(private api:ApiService){
    api.userInfo().subscribe(
      (response) => {
        this.data =response;
      }
    )
  }
}
