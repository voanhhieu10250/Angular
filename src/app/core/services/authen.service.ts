import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private http: HttpClient) { }

  signin(values: any): Observable<any> {
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`;
    return this.http.post(url, values)
  }

  signup(values: any): Observable<any> {
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`;
    return this.http.post(url, { ...values, maNhom: "GP01" })
  }
}
