import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { Comment } from '../shared/product.service';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:Product;
  comments:Comment[];
  productID:number;
  newRating:number = 5;
  newComment:string = '';

  private isCommentHidden:boolean = true;
  constructor(
  	private routeInfo: ActivatedRoute,
  	private productService: ProductService
  	) { }
  
  ngOnInit() {
  	let productId = this.routeInfo.snapshot.params['productId'];
  	this.product = this.productService.getProduct(productId);
    this.productID = productId;
  	this.comments = this.productService.getCommentsForProductId(productId);
  }

  addComment () {
    console.log(this.product);
    let comment = new Comment(0, this.productID, new Date().toISOString(), 'someone', this.newRating, this.newComment);
    this.comments.unshift(comment);

    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
  }

}
