import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	private products: Array<Product>;
  constructor() { }
  private imgUrl = "http://placehold.it/320x150";
  ngOnInit() {
  	this.products = [
  		new Product(1,'第一个商品',1.99,3.5,'强劲有力，效果特别明显',['电子产品','硬件配置']),
  		new Product(2,'第二个商品',2.99,1.5,'强劲有力，效果特别明显',['电子产品','计算机']),
  		new Product(3,'第三个商品',3.99,3.5,'强劲有力，效果特别明显',['电子产品','课程租']),
  		new Product(4,'第四个商品',4.99,3.5,'强劲有力，效果特别明显',['电子产品','软件配置']),
  		new Product(5,'第五个商品',5.99,1.5,'强劲有力，效果特别明显',['电子产品','网站运维']),
  		new Product(6,'第六个商品',6.99,2.5,'强劲有力，效果特别明显',['电子产品','性能优化']),
  		new Product(7,'第七个商品',7.99,4.5,'强劲有力，效果特别明显',['电子产品','图片压缩']),
  		new Product(8,'第八个商品',8.99,3.5,'强劲有力，效果特别明显',['电子产品','脚本处理']),
  	];
  	this.products.push(new Product(9,'第九个商品',8.99,3.5,'强劲有力，效果特别明显',['欣欣产品','脚本处理']));
  }

}
export class Product{
	constructor(
		public id:number,
		public title:string,
		public price:number,
		public rating:number,
		public desc:string,
		public categories:Array<string>
		){

	}
}