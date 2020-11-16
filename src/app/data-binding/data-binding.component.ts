import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  message: string = "Hello cybersoft"
  isActive: boolean = false
  username: string = ""
  fullname: string = ""
  email:string = ""
  address: string = ""
  constructor() { }

  ngOnInit(): void {
  }

  handleChangeActive(): void {
    this.isActive = !this.isActive
  }

  handleChangeUsername(evt: any): void {
    this.username = evt.target.value
  }

  handleChangeFullName(value: string): void{
    // const fullname = <HTMLInputElement>document.getElementById("fullname")
    // this.fullname = fullname.value
    this.fullname = value
  }
}
