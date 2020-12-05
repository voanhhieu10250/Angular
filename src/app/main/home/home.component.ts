import { Movie } from './../../core/models/movie';
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movieList: Movie[] = []

  constructor(private movieService: MovieService) { }

  // Tương đương với componentDidMount bên React
  // chạy 1 lần sau khi render
  // Thích hợp để: call Api, tương tác với DOM, event

  ngOnInit(): void {
    // this.movieList = this.movieService.getMovieList()
    // console.log(this.movieList)

    // this.movieService.getMovieListPromise().then(result => {
    //   console.log(result)
    // })
    //   .catch((err) => {
    //     console.log(err)
    //   })

    this.movieService.getMovieList().subscribe({
      // next: Nhận kết quả
      next: (result) => {
        console.log(result);
        this.movieList = result;
      },
      // error: Nhận lỗi
      error: error => {
        console.log(error)
      },
      complete: () => {
        console.log('DONE')
      }
    })
  }

}
