import { Component } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  name:string = 'communication in component'; 
  productName = "完美期盼";
  isBlue = true;

  value = "click";
  doOnInput(event:any){

    console.log("DOM:" + event.target.value);
    console.log("HTML:" + event.target.getAttribute("value"));
        this.value = event.target.value;
  }

  constructor(){
    Observable.from( [1, 2, 3, 4])
        .filter( e => e%2 == 0)
        .map( e => e*e)
        .subscribe(
          e => console.log(e),
          err => console.error( err ),
          () => console.log( "end" )
        )
  }
}
