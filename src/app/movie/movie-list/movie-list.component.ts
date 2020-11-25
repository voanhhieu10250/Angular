import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnChanges {
  @Input() movieAdded: any
  movieList: any[] = [
    {
      id:1,
      name:"The Queen's Gambit",
      price: 85000,
      image:"assets/images/theQueensGambit.jpg"
    },
    {
      id:2,
      name:"The Big Bang Theory",
      price: 65000,
      image:"assets/images/bigBangTheory.jpg"
    },
    {
      id:3,
      name:"Tom and Jerry",
      price: 75000,
      image:"assets/images/tomAndJerry.jpg"
    }
  ]
  constructor() { }

  //Lifecycle hook: theo dõi sự thay đổi của input
  ngOnChanges(changes:any){
    // console.log(changes)
    // const {movieAdded} = changes
    // // Cần kiểm tra previousValue vs curentValue để tránh trường hợp 1 giá trị Input khác thay đổi sẽ chạy 
    // // lệnh movieList.push
    // if (movieAdded?.previousValue !== movieAdded?.currentValue){
    //   this.movieList.push(changes.movieAdded.currentValue)
    // }
    
  }

  ngOnInit(): void {
  }

  handleDeleteMovie(movieId: number){
    this.movieList = this.movieList.filter(movie => {
      return movie.id !== movieId
    })
  }
}
