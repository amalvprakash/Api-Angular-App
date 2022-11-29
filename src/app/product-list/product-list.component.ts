import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  
  
  data:any = []

  constructor(private api:ApiService){
    api.productList().subscribe(
      (respose) =>{
        this.data = respose;
      }
    )
  }

}
