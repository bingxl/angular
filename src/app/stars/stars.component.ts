import { Component, OnInit, OnChanges, SimpleChange, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
	
	@Input()
	private rating:number =0;
	private stars: boolean[];
  @Output()
  private ratingChange:EventEmitter<number> = new EventEmitter();

  @Input()
  private readonly:boolean = true;

  constructor() { }
  //ngOnInit 组件生命周期钩子
  ngOnInit() {
  	
  }
  ngOnChanges(changes: SimpleChange) {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add 'implements OnChanges' to the class.
     this.stars = [];
  	for(let i=1; i<=5; i++){
  		this.stars.push(i > this.rating);
  	}
    
  }
  clickStar (index:number) {
    if(!this.readonly) {
        this.rating = index + 1;
        this.ngOnInit();
        this.ratingChange.emit(this.rating);
    }
   
  }

}
