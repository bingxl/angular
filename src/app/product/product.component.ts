import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';//使用响应式编程必须引入
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	private products: Array<Product>;
  constructor(private productService: ProductService) {
    this.titleFilter.valueChanges
        .debounceTime( 500 )
        .subscribe(
          value => this.keyword = value,
        )
   };
  private imgUrl = "http://placehold.it/320x150";
  private keyword:string;
  private titleFilter:FormControl = new FormControl();
  ngOnInit() {
    this.products = this.productService.getProducts();
 }

};
export class Product{
	constructor(
		){

	}
}