import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	private products: Array<Product>;
  constructor(private productService: ProductService) { };
  private imgUrl = "http://placehold.it/320x150";
  ngOnInit() {
    this.products = this.productService.getProducts();
 }

};
export class Product{
	constructor(
		){

	}
}