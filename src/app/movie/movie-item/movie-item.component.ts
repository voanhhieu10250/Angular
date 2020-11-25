import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  //khai báo input để nhận dữ liệu từ component cha truyền xuống (tên phải trùng với tên props của 
  //component cha truyền cho)
  @Input() movie:any
  //EventEmitter: Đối tượng giúp ta tự định nghĩa 1 sự kiện
  //Output: Đẩy sự kiện này lên component cha
  @Output() onDelete = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  handleDeleteMovie(){
    // Cần truyền id của bộ phim muốn xóa lên component cha
    // emit: kích hoạt sự kiện và kèm theo dữ liệu muốn truyền đi (nếu muốn truyền nhiều dữ liệu 
    // thì tạo 1 object rồi truyền vào, vì nó chỉ truyền được 1 dữ liệu mà thôi)
    this.onDelete.emit(this.movie.id)
  }
}
