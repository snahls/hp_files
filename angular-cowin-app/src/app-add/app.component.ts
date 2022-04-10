import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book';
  item:string=""
  fruits=["Pineapple","Apple","Cherry"]
  
  addfruit(item:string){
	  this.fruits.unshift(item);
  }
}
