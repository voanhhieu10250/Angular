import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenService } from 'src/app/core/services/authen.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  @ViewChild('signinForm') signinForm: NgForm
  constructor(private auth: AuthenService, private router: Router) { }

  ngOnInit(): void {
  }

  handleSignin(): void {
    if (this.signinForm.invalid) return //như vậy thì nếu người dùng cố tình inspect lên lúc nút button 
    //đang disabled thì cũng không thể gửi dữ liệu đi đc
    console.log(this.signinForm.value)
    this.auth.signin(this.signinForm.value).subscribe({
      next: result => {
        console.log(result)
        this.router.navigate(['/'])
      }
    })
  }


}
