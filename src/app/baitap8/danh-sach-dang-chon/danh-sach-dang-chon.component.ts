import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-danh-sach-dang-chon',
  templateUrl: './danh-sach-dang-chon.component.html',
  styleUrls: ['./danh-sach-dang-chon.component.scss']
})
export class DanhSachDangChonComponent implements OnInit {
  @Output() onRemove = new EventEmitter()
  selectedList: any[] = []
  constructor() { }

  ngOnInit(): void {
  }
  handleSelect(seat: any) {
    //Kiểm tra iSelect đang là true hay false
    // true: thêm vào mảng selectedList
    //false: xóa khỏi mảng selectedList
    console.log('SEATTTT', seat);

    if (seat.isSelect) {
      console.log('123');

      this.selectedList.push(seat)
    } else {
      const index = this.selectedList.findIndex(item => item.id === seat.id)
      this.selectedList.splice(index, 1)
    }
  }

  handleRemove(seat: any) {
    const index = this.selectedList.findIndex(item => item.id === seat.id)
    this.selectedList.splice(index, 1)
    this.onRemove.emit(seat.id)
  }
}
