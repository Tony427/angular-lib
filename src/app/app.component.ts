import { Component } from '@angular/core';

// 這個@是來自angular的框架
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// 這邊都是用來加function的
export class AppComponent {
  title = 'angular-lib';
  aNumber: number;
}
