import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthenService } from 'src/app/core/services/authen.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private auth: AuthenService, private router: Router) {
    //taiKhoan, matKhau, hoTen, soDt, email
    this.signupForm = new FormGroup({
      taiKhoan: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      hoTen: new FormControl("", [Validators.required]),
      matKhau: new FormControl("", [Validators.required, Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      soDt: new FormControl("", [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  handleSignup(): void {
    // đánh dấu tất cả input đều có trạng thái là đã touched
    this.signupForm.markAllAsTouched()

    if (this.signupForm.invalid) return
    console.log(this.signupForm.value)
    this.auth.signup(this.signupForm.value).subscribe({
      //nếu đăng ký thành công, chuyển sang page signin
      complete: () => {
        this.router.navigate(['/signin'])
      }
    })
  }

}
