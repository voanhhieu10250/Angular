import { Injectable } from '@angular/core';
import { Movie } from '../models/movie'
import { Observable } from 'rxjs';

@Injectable({
  // từ phiên bản angular 6, không cần import services vào AppModule và gắn vào trong providers, vì 
  //providedIn:'root' đã giúp angular import dùm

  providedIn: 'root'
})
export class MovieService {

  constructor() { }
  getMovieList(): Movie[] {
    return [
      {
        id: 1,
        name: "The Queen's Gambit",
        price: 85000,
        image: "assets/images/theQueensGambit.jpg"
      },
      {
        id: 2,
        name: "The Big Bang Theory",
        price: 65000,
        image: "assets/images/bigBangTheory.jpg"
      },
      {
        id: 3,
        name: "Tom and Jerry",
        price: 75000,
        image: "assets/images/tomAndJerry.jpg"
      }
    ]
  }

  getMovieListPromise() {
    return new Promise((resolve, reject) => {
      //Fake api
      setTimeout(() => {
        // Trả ra kết quả trong then
        // resolve(["'iron-man", "wonder-women"])

        // Trả ra kết quả trong catch
        reject("Wrong!!")
      }, 2000);
    })
  }

  getMovieListObservable() {
    return new Observable(subscribe => {
      // Fake Api
      setTimeout(() => {
        // Truyền kết quả
        subscribe.next(["'iron-man", "wonder-women"]);

        // Truyền lỗi
        // subscribe.error("Wrong!!!")

        // Kết thúc Observable
        subscribe.complete()
      }, 2000);
    })
  }
}
