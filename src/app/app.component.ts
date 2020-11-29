import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message: string = "fe52-angular"
  title = 'my-first-angularApp';
  number: number = 0.5
  price: number = 3000
  date: Date = new Date()
  obj: any = {
    hoten: "Hieu",
    lop: "FE52",
    tuoi: "19"
  }
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  message1: string = "Lorem ipsum, dolor sit amet consectetur adipisicing elit Minimexercitationem tempore voluptate adipisci neque nam modi sequi reprehenderitnemo illum assumenda quisquam culpa, optio unde! Aliquid dolor eligendivoluptatem aperiam."
}
