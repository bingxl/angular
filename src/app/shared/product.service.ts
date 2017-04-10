import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }
  	private products: Product[] = [
  		new Product(1,'第一个商品',1.99,3.5,'强劲有力，效果特别明显',['电子产品','硬件配置']),
  		new Product(2,'第二个商品',2.99,1.5,'强劲有力，效果特别明显',['电子产品','计算机']),
  		new Product(3,'第三个商品',3.99,3.5,'强劲有力，效果特别明显',['电子产品','课程租']),
  		new Product(4,'第四个商品',4.99,3.5,'强劲有力，效果特别明显',['电子产品','软件配置']),
  		new Product(5,'第五个商品',5.99,1.5,'效果好，服务好，效果特别明显',['电子产品','网站运维']),
  		new Product(6,'第六个商品',6.99,2.5,'强劲有力，效果特别明显',['电子产品','性能优化']),
  		new Product(7,'第七个商品',7.99,4.5,'强劲有力，效果特别明显',['电子产品','图片压缩']),
  		new Product(8,'第八个商品',8.99,3.5,'强劲有力，效果特别明显',['电子产品','脚本处理']),
  	];

  	private comments: Comment[] = [
  		new Comment(1, 1, "2017-02-02 22:22:22", "张三", 3, "东西不错"),
  		new Comment(2, 2, "2017-03-02 22:22:22", "李四", 3, "东西不错"),
  		new Comment(1, 1, "2017-02-02 20:22:22", "王五", 3, "东西不错"),
  		new Comment(2, 2, "2017-04-06 22:20:22", "赵刘", 3, "东西不错"),
  		new Comment(2, 1, "2017-05-06 18:22:22", "张三", 3, "东西不错")
  	];
  	getProducts(){
  		return this.products;
  	}

  	getProduct(id:number): Product {
  		return this.products.find((product) => product.id ==id);
  	}

  	getCommentsForProductId(id:number) : Comment[]{
  		return this.comments.filter((comment:Comment) => comment.productId == id);
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

export class Comment {
	constructor(
		public id: number,
		public productId: number,
		public timestamp: string,
		public user: string,
		public rating: number,
		public content: string
		){

	}
}