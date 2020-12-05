import { Injectable } from '@angular/core';
import { Movie } from '../models/movie'
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  // từ phiên bản angular 6, không cần import services vào AppModule và gắn vào trong providers, vì 
  //providedIn:'root' đã giúp angular import dùm

  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovieList(): Observable<Movie[]> {
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`;

    return this.http.get<Movie[]>(url);
  }

  getMovieDetail(movieId: string): Observable<any> {
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim`;
    let params = new HttpParams()
    params = movieId ? params.append('maPhim', movieId) : params
    return this.http.get(url, { params })
  }


  // currentPage: trang hien tai
  // pageSize: số phần tử trên 1 trang
  getMovieListPaging(currentPage: number, pageSize: number): Observable<any> {
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang`

    let params = new HttpParams()
    params = currentPage ? params.append('soTrang', currentPage.toString()) : params;
    params = pageSize ? params.append('soPhanTuTrenTrang', pageSize.toString()) : params
    params = params.append('maNhom', 'GP01')
    return this.http.get(url, { params })
  }
  // getMovieList(): Movie[] {
  //   return [
  //     {
  //       id: 1,
  //       name: "The Queen's Gambit",
  //       price: 85000,
  //       image: "assets/images/theQueensGambit.jpg"
  //     },
  //     {
  //       id: 2,
  //       name: "The Big Bang Theory",
  //       price: 65000,
  //       image: "assets/images/bigBangTheory.jpg"
  //     },
  //     {
  //       id: 3,
  //       name: "Tom and Jerry",
  //       price: 75000,
  //       image: "assets/images/tomAndJerry.jpg"
  //     }
  //   ]
  // }

  // getMovieListPromise() {
  //   return new Promise((resolve, reject) => {
  //     //Fake api
  //     setTimeout(() => {
  //       // Trả ra kết quả trong then
  //       // resolve(["'iron-man", "wonder-women"])

  //       // Trả ra kết quả trong catch
  //       reject("Wrong!!")
  //     }, 2000);
  //   })
  // }

  // getMovieListObservable() {
  //   return new Observable(subscribe => {
  //     // Fake Api
  //     setTimeout(() => {
  //       // Truyền kết quả
  //       subscribe.next(["'iron-man", "wonder-women"]);

  //       // Truyền lỗi
  //       // subscribe.error("Wrong!!!")

  //       // Kết thúc Observable
  //       subscribe.complete()
  //     }, 2000);
  //   })
  // }
}
