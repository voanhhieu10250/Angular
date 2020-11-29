import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { DanhSachDangChonComponent } from './danh-sach-dang-chon/danh-sach-dang-chon.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-baitap8',
  templateUrl: './baitap8.component.html',
  styleUrls: ['./baitap8.component.scss']
})
export class Baitap8Component implements OnInit {
  @ViewChild('danhSachGhe') danhSachGheComponent = new DanhSachGheComponent()
  @ViewChild('danhSachDangChon') danhSachDangChonComponent = new DanhSachDangChonComponent()
  constructor() { }

  ngOnInit(): void {
  }

  handleSelect(seat: any) {
    //viewChild tới danh-sach-dang-chon component và hàm handleSelect
    console.log('danhSachDangChonComponent', seat);

    this.danhSachDangChonComponent.handleSelect(seat)
  }

  handleRemove(seatId: number) {
    //ViewChild tới danh-sach-ghe component và gọi hàm handleRemove
    this.danhSachGheComponent.handleRemove(seatId)
  }
}
